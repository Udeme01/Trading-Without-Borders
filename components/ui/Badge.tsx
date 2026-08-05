import { cn } from "@/lib/utils";

// Used for the filter tags across Trade Intelligence: Country, Industry,
// Topic, Audience, Date — kept as plain mono text in a hairline box so it
// reads like a customs stamp / ledger tag rather than a colorful chip.
export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "meta-label inline-block border border-line px-2 py-1",
        className
      )}
    >
      {children}
    </span>
  );
}
