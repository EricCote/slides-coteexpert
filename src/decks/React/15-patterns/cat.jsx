export default `export default function Cat({ mouse }) {
  return (
    <img
      src='https://cdn5.vectorstock.com/i/1000x1000/28/54/face-cat-fluffy-lovely-animal-outline-vector-12722854.jpg'
      alt='cat'
       width="150"
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
    />
  );
}
`;
