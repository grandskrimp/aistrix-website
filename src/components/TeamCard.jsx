import ImageWithFallback from "./ImageWithFallback.jsx";

export default function TeamCard({ person }) {
  return (
    <article className="premium-card premium-card-hover p-4">
      <ImageWithFallback
        src={person.image}
        alt={person.name}
        aspect="aspect-[4/4]"
        label={person.name}
        icon="UserRound"
        className="rounded-[24px]"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-ink">{person.name}</h3>
        <p className="mt-1 text-sm font-semibold text-blue-700">{person.role}</p>
        <p className="mt-3 text-sm leading-7 text-graphite">{person.description}</p>
      </div>
    </article>
  );
}
