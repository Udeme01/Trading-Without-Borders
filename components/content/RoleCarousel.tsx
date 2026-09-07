"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Role } from "@/types";

const ACTIVE_SCALE = 2.1; // how much wider the active card is vs inactive
const ACTIVE_HEIGHT = 480;
const INACTIVE_HEIGHT = 340;
const CARD_GAP = 24;

export default function RoleCarousel({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive base card width
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      if (w >= 768) setCardWidth(340);
      else if (w >= 640) setCardWidth(320);
      else setCardWidth(280);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Measure the visible container width
  useLayoutEffect(() => {
    const update = () =>
      setContainerWidth(containerRef.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(roles.length - 1, index)));
    },
    [roles.length],
  );

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // --- Compute each card's actual width (active card is wider) ---
  const widths = roles.map((_, i) =>
    i === active ? cardWidth * ACTIVE_SCALE : cardWidth,
  );
  const totalTrackWidth =
    widths.reduce((sum, w) => sum + w, 0) + CARD_GAP * (roles.length - 1);

  // Center-point of the active card within the track
  const activeCardLeft = widths
    .slice(0, active)
    .reduce((sum, w) => sum + w + CARD_GAP, 0);
  const activeCardCenter = activeCardLeft + widths[active] / 2;

  // Ideal translateX to center the active card in the viewport
  const idealTranslate = containerWidth / 2 - activeCardCenter;

  // Clamp so we never scroll past the track's start or end
  const minTranslate = Math.min(0, containerWidth - totalTrackWidth); // right bound
  const maxTranslate = 0; // left bound — never shift right past the start
  const translateX =
    totalTrackWidth <= containerWidth
      ? 0 // whole track fits — no need to shift at all
      : Math.max(minTranslate, Math.min(maxTranslate, idealTranslate));

  // Touch/swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex items-center transition-transform duration-500 ease-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(${translateX}px)`,
          }}
        >
          {roles.map((role, index) => (
            <RoleCarouselCard
              key={role.slug}
              role={role}
              isActive={index === active}
              width={widths[index]}
              onSelect={() => goTo(index)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        disabled={active === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-60 transition hover:bg-[#001C55] hover:text-white disabled:opacity-30 disabled:pointer-events-none md:left-4"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        disabled={active === roles.length - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-60 transition hover:bg-[#001C55] hover:text-white disabled:opacity-30 disabled:pointer-events-none md:right-4"
      >
        <ArrowRight size={18} />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {roles.map((role, index) => (
          <button
            key={role.slug}
            onClick={() => goTo(index)}
            aria-label={`Go to ${role.label}`}
            className={`h-2 rounded-full transition-all ${
              index === active
                ? "w-6 bg-[#001C55]"
                : "w-2 bg-ink-60/30 hover:bg-ink-60/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function RoleCarouselCard({
  role,
  isActive,
  width,
  onSelect,
}: {
  role: Role;
  isActive: boolean;
  width: number;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={!isActive ? onSelect : undefined}
      style={{ width, height: isActive ? ACTIVE_HEIGHT : INACTIVE_HEIGHT }}
      className={`group relative shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
        isActive
          ? "z-10 shadow-2xl"
          : "cursor-pointer opacity-80 hover:opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${role.image ?? ""})`,
          backgroundColor: "#001C55",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {isActive ? (
        <ActiveCardContent role={role} />
      ) : (
        <InactiveCardContent role={role} onSelect={onSelect} />
      )}
    </div>
  );
}

function ActiveCardContent({ role }: { role: Role }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
      <div className="ml-auto flex h-full w-full flex-col justify-between rounded-xl bg-black/55 p-6 backdrop-blur-sm md:w-[60%] md:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {role.eyebrow}
          </p>
          <div className="mt-3 h-px w-8 bg-white/40" />
          <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
            {role.heading}
          </h3>
          <p className="mt-2 font-display text-lg italic text-white/80">
            {role.subheading}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {role.description}
          </p>
        </div>

        <Link
          href={`/discover/${role.slug}`}
          className="mt-6 flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3"
        >
          {role.ctaLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function InactiveCardContent({
  role,
  onSelect,
}: {
  role: Role;
  onSelect: () => void;
}) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-end p-5">
      <h3 className="font-display text-lg font-semibold text-white">
        {role.heading}
      </h3>
      <p className="mt-1 text-sm italic leading-snug text-white/70">
        {role.subheading}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        aria-label={`Expand ${role.label}`}
        className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-[#001C55]"
      >
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
