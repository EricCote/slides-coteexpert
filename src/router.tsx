import Home from './homepage/Home';

import Sandpack from './components/Sandpack';
import SandpackWithHTMLOutput from './components/Sandpack/SandpackWithHTMLOutput';
import Diagram from './components/slides/Diagram';
import Illustration from './components/slides/Illustration';
import { createBrowserRouter, Outlet, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useMemo } from 'react';
import GotoPopup from './components/slides/GotoPopup';

import Status from './decks/React/0-javascript.fr.mdx';
//./decks/React/14-effects/3-effects.fr.mdx   (55)
//./decks/React/14-effects/4-remove-effects.fr.mdx  (43)
//./decks/React/14-effects/5-effect-lifecycle.fr.mdx (49)
//./decks/React/14-effects/6-effects-and-events.fr.mdx  (28)
//./decks/React/14-effects/7-reduce-effect-dependencies.fr.mdx (58)
//./decks/React/14-effects/8-custom-hooks.fr.mdx  (56)

//import Status2 from './decks/React/5-data/6-effects-and-events.fr.mdx';
import { useLanguage } from './components/slides/LanguageProvider';

const components = {
  Sandpack,
  SandpackWithHTMLOutput,
  Diagram,
  Illustration,
  Alert({ type = 'primary', children }: { type: string; children: any }) {
    return <div className={`alert alert-${type} px-5 py-4 `}>{children}</div>;
  },
  TwoColumns({ className, children, style, top = false }: any) {
    return (
      <aside
        className={className}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          columnGap: '1em',
          alignItems: top ? 'top' : 'center',
          ...style,
        }}
      >
        {children}
      </aside>
    );
  },
  wrapper({ children }: any) {
    //layout function for mdx.
    return (
      <>
        <GotoPopup />
        <>{children}</>
      </>
    );
  },

  Hint({ toggle, children }: any) {
    let { lang } = useParams();
    lang = lang ?? 'en';
    toggle = toggle ?? lang === 'fr' ? 'Indice' : 'Hint';
    return (
      <details>
        <summary className='btn-link link-info'>{toggle}</summary>
        {children}
      </details>
    );
  },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    //errorElement: <ErrorBoundary />,

    children: [
      { index: true, element: <Home /> },
      {
        index: false,
        element: (
          <article>
            <Outlet />
          </article>
        ),
        children: [
          {
            path: 'status',
            element: <Status components={components} />,
          },
          {
            path: 'decks/:lang/',
            element: <Language />,
            children: [
              {
                path: ':doc',
                element: <MyLoader />,
              },
              {
                path: ':subject/:doc',
                element: <MyLoader />,
              },
              {
                path: ':subject/:subfolder/:doc',
                element: <MyLoader />,
              },
              {
                path: ':subject/:subfolder/:subsubfolder/:doc',
                element: <MyLoader />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

function MyLoader() {
  const { subject, subfolder, subsubfolder, doc, lang } = useParams();

  const MyMdx = useMemo(
    () =>
      lazy(() => {
        let module;
        if (subsubfolder) {
          module = import(
            `./decks/${subject}/${subfolder}/${subsubfolder}/${doc}.${lang}.mdx`
          );
        } else if (subfolder) {
          module = import(`./decks/${subject}/${subfolder}/${doc}.${lang}.mdx`);
        } else if (subject) {
          module = import(`./decks/${subject}/${doc}.${lang}.mdx`);
        } else {
          module = import(`./decks/${doc}.${lang}.mdx`);
        }
        module.then((mod) => {
          document.title =
            mod.frontmatter?.title ?? (lang === 'fr' ? 'Diapos' : 'Slides');
        });
        return module;
      }),
    [subject, doc, lang, subfolder, subsubfolder]
  );

  return (
    <Suspense
      fallback={
        <div>{lang === 'fr' ? 'Chargement...' : 'Slides are Loading...'}</div>
      }
    >
      <MyMdx components={components} />
    </Suspense>
  );
}

function Language() {
  // Get the lang param from the URL.
  const { lang } = useParams();
  const [, setLanguage] = useLanguage();

  useEffect(() => setLanguage(lang ?? 'en'), [lang, setLanguage]);

  return (
    <>
      <Outlet />
    </>
  );
}
