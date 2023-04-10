import './App.css';
import SlidesEn from './slides.en.mdx';
import SlidesFr from './slides.fr.mdx';

export default function App() {
  const lang = location.pathname === '/fr' ? 'fr' : 'en';
  return (
    <>
      <article>{lang === 'fr' ? <SlidesFr /> : <SlidesEn />}</article>
    </>
  );
}
