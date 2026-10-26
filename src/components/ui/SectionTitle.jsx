// `reveal` is off when a parent element already animates the title in.
export default function SectionTitle({ number, children, bordered = true, reveal = true }) {
  return (
    <h2 className={`section-title mono${bordered ? ' bordered' : ''}`} data-reveal={reveal || undefined}>
      <span className="accent">{number}</span> — {children}
    </h2>
  );
}
