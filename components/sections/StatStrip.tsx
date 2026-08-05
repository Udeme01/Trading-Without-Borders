interface Stat {
  value: string;
  label: string;
}

export default function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-8 border-y border-line py-10 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="meta-label">{stat.label}</dt>
          <dd className="mt-2 font-display text-3xl font-medium md:text-4xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
