export default `export default function Cat({ mouse }) {
  return (
    <img
      src='${
        location.protocol +
        '//' +
        location.hostname +
        (location.port ? ':' + location.port : '')
      }/img/cat.jpg'
      alt='cat'
      width="150"
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
}
`;
