export function Section({ text, children }) {
  return (
    <>
      <h2>{text}</h2>
      {children}
    </>
  );
}
