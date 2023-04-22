import '~bootstrap/dist/css/bootstrap.css';
import './App.css';
import SlidesEn from './decks/slides.en.mdx';
import SlidesFr from './decks/slides.fr.mdx';
import ThemeProvider from './components/dark-mode/ThemeProvider';
import GotoPopup from './components/GotoPopup';

export default function App() {
  const lang = location.pathname === '/fr' ? 'fr' : 'en';
  return (
    <ThemeProvider theme='auto'>
      <GotoPopup />
      <article>{lang === 'fr' ? <SlidesFr /> : <SlidesEn />}</article>
    </ThemeProvider>
  );
}
