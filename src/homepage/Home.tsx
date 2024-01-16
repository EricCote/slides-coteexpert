import { Link } from 'react-router-dom';
import Menu from './Menu';

const decks = [
  {
    route: 'AspNetWebApi/api1',
    title: 'Web API',
    description: 'Your first steps with .NET Web APIs',
    language: 'en',
  },
  {
    route: 'AspNetWebApi/api1',
    title: 'API Web',
    description: "Vos premiers pas avec les Web API d'ASP.NET",
    language: 'fr',
  },
  {
    route: 'Blazor/blazor1',
    title: 'Intro à Blazor',
    description: 'Premiers pas avec Blazor',
    language: 'fr',
  },

  {
    route: 'fundamentals',
    title: 'Intro à React',
    description: 'Premiers pas avec React',
    language: 'fr',
  },
];

const languages = [
  { language: 'Français', shortName: 'fr' },
  { language: 'English', shortName: 'en' },
];

export default function Home() {
  document.documentElement.lang = 'en';
  return (
    <>
      <Menu />
      <h1 className='my-5'>Diapositives</h1>
      {languages.map((lang) => (
        <>
          <div>
            <h3>{lang.language}</h3>
            {decks
              .filter((deck) => deck.language === lang.shortName)
              .map((deck) => (
                <>
                  <h5>
                    <Link to={`decks/${lang.shortName}/${deck.route}`}>
                      {deck.title}
                    </Link>
                  </h5>
                  <p>{deck.description}</p>
                </>
              ))}
          </div>
          <hr className='my-5' />
        </>
      ))}

      <p>
        Please visit: <a href='https://www.reactacademy.live'>React Academy</a>
      </p>
    </>
  );
}
