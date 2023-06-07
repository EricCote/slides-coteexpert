import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Home() {
  document.documentElement.lang = 'en';
  return (
    <>
      <Menu />
      <h1 className='my-5'>Simple MDX Slides</h1>
      <div>
        <h3>English</h3>
        <h5>
          <Link to='en/fundamentals'>React Fundamentals</Link>
        </h5>
        <p>Your first steps with React</p>
        <h5>
          <Link to='en/react-router'>React-Router</Link>
        </h5>
        <p>Introducing React Router</p>
      </div>
      <hr className='my-5' />
      <div>
        <h3>Français</h3>

        <h5>
          <Link to='fr/fundamentals'>Fondements de React</Link>
        </h5>
        <p>Vos premiers pas en React</p>
        <h5>
          <Link to='fr/react-router'>React-Router</Link>
        </h5>
        <p>Introduction à React Router</p>
      </div>

      <hr className='my-5' />

      <p>
        Please visit: <a href='https://www.reactacademy.live'>React Academy</a>
      </p>
    </>
  );
}
