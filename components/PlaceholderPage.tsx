type PlaceholderPageProps = {
  title: string;
  items: readonly string[];
  note?: string;
};

export function PlaceholderPage({
  title,
  items,
  note,
}: PlaceholderPageProps) {
  return (
    <main className="placeholder-page">
      <div className="placeholder-page__inner">
        <header className="placeholder-page__intro">
          <p className="placeholder-page__eyebrow">Base page structure</p>
          <h1>{title}</h1>
          {note ? <p className="placeholder-page__note">{note}</p> : null}
        </header>

        <ol className="placeholder-page__list">
          {items.map((item, index) => (
            <li className="placeholder-page__item" key={item}>
              <span className="placeholder-page__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
