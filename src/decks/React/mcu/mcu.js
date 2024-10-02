const packageJson = `{
  "dependencies": {
    "react": "next",
    "react-dom": "next",
    "react-error-boundary": "latest",
    "react-scripts": "latest"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
`;

const css = `button {
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
  display: block;
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

const displayMovies = `export default function DisplayMovies({ movies }) {
  return movies.length > 0 ? (
    <div className='movieCards'>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.cover_url} />
          <p>
            <b>Release date: </b>
            {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>No movies yet</div>
  );
}
`;

const useRerender = `import { useState } from 'react';

export default function useRerender() {
  const [, setRerender] = useState();

  function forceRerender() {
    setRerender({});
  }

  return forceRerender;
}
`;

const fetchData = `let cache = new Map();

export function fetchData(url,options) {
  if (!cache.has(url)) {
    cache.set(url, getData(url, options));
  }
  return cache.get(url);
}

async function getData(url, options) {
  const { delay, ...rest } = options ?? {}
  if (delay) {
    await new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }
  
  const response = await fetch(url,rest);
  return await response.json();
}

export function removeFromCache(url) {
  if (cache.has(url)) {
    cache.delete(url);
  }
}
`;

export default {
  '/src/styles.css': { code: css, hidden: true },
  '/package.json': packageJson,
  '/src/DisplayMovies.jsx': displayMovies,
  '/src/useRerender.js': useRerender,
  '/src/fetchData.js': fetchData,
};
