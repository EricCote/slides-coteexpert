import '~bootstrap/dist/css/bootstrap.css';
import './App.css';
import SlidesEn from './slides.en.mdx';
import SlidesFr from './slides.fr.mdx';
import ThemeProvider from './components/dark-mode/ThemeProvider';

export default function App() {
  const lang = location.pathname === '/fr' ? 'fr' : 'en';
  return (
    <ThemeProvider theme='auto'>
      <article>{lang === 'fr' ? <SlidesFr /> : <SlidesEn />}</article>
    </ThemeProvider>
  );
}
