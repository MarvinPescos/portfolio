// Renders text segments like [{ text }, { text, italic: true, accent: true }].
export default function RichText({ parts }) {
  return parts.map((part, i) => {
    const classes = [part.italic && 'serif-italic', part.accent && 'accent'].filter(Boolean).join(' ');
    return classes ? (
      <em key={i} className={classes}>
        {part.text}
      </em>
    ) : (
      part.text
    );
  });
}
