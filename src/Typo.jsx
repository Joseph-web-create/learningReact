export default function Typo({ col, font, text }) {
  return (
    <>
      <h1 style={{ fontSize: font, color: col }}>{text}</h1>
    </>
  );
}
