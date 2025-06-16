const css = `
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #d9d9d9;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 10px;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.movieCards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  row-gap: 20px;
  column-gap: 20px;
  justify-content: space-between;
}

.movieCards > div {
  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  padding: 10px;
  width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
}

.movieCards img {
  float: left;
  margin-right: 15px;
  width: 200px;
}

.spinner {
  display: inline-block;
  width: 2em;
  height: 2em;
  vertical-align: -0.125em;
  border-radius: 50%;
  animation: 0.75s linear infinite spinner;
  border: 0.25em solid currentcolor;
  border-right-color: transparent;
}

@keyframes spinner {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
`;

export default {
  '/src/styles.css': { code: css, hidden: true },
};
