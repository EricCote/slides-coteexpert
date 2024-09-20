export default `export default function Cat({ mouse }) {
  return (
    <img
      src='/cat.jpg'
      alt='cat'
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
}
`;
