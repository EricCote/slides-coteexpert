/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import { Children, ReactElement, ReactNode } from 'react';

import {
  Sandpack,
  SandpackOptions,
  SandpackTheme,
} from '@codesandbox/sandpack-react';
//import { levelUp } from '@codesandbox/sandpack-themes';
//import { SandpackLogLevel } from '@codesandbox/sandpack-client';
//import { CustomPreset } from './CustomPreset';
import { createFileMap } from './createFileMap';
//import { CustomTheme } from './Themes';

type SandpackProps = {
  children: ReactNode;
  autorun?: boolean;
  options?: SandpackOptions;
  files?: object;
};

const sandboxStyle = `
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-inline-start: 20px;
}
`.trim();

function SandpackRoot(props: SandpackProps) {
  let {
    children,
    autorun = true,
    options: myOptions,
    files: additionalFiles,
    ...rest
  } = props;
  myOptions = myOptions ?? {};
  myOptions! = { editorHeight: '500px', ...myOptions };
  const codeSnippets = Children.toArray(children) as ReactElement[];
  let files = createFileMap(codeSnippets);

  if (additionalFiles) {
    files = { ...files, ...additionalFiles };
  }

  files['/styles.css'] = {
    code: [sandboxStyle, files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: !files['/styles.css']?.visible,
  };

  return (
    <div className='sandpack sandpack--playground w-full my-8' dir='ltr'>
      <Sandpack
        template='react'
        files={files}
        theme={myDark}
        options={myOptions}
        {...rest}
      />
    </div>
  );
}

// levelUp.font.size = '1.1rem';
// levelUp.font.lineHeight = '1.5rem';
const myDark: SandpackTheme = {
  colors: {
    surface1: '#1F1F1F',
    surface2: '#333333',
    surface3: '#333333',

    disabled: '#4D4D4D',
    base: '#808080',
    clickable: '#999999',
    hover: '#C5C5C5',
    accent: '#E5E5E5',

    error: '#FFB4A6',
    errorSurface: '#690000',
    warning: '#E7C400',
    warningSurface: '#3A3000',
  },
  syntax: {
    plain: '#CCCCCC',
    comment: {
      color: '#6A9955',
      fontStyle: 'italic',
    },
    keyword: '#C586C0',
    tag: '#569cd6',
    punctuation: '#CCCCCC',
    definition: '#DCDCAA',
    property: '#9cdcfe',
    static: '#B5CEA8',
    string: '#CE9178',
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"Cascadia Code", Consolas, Menlo, Monaco, "Courier New", monospace',
    size: '18px',
    lineHeight: '27px',
  },
};

/*

Amethyst  (trop doux)
Aquablue (Light)
atomDark (doux)
cobalt2 +++
cyberpunk  (Couleur un peux laides)
dracula  +++
ecoLight (light)
freeCodeCampDark +++
githubLight (light good)
gruvboxDark (hotdog)
gruvboxLight (desert)
levelUp +++
monokaiPro +++
neocyan +++
nightOwl +++
sandpackDark (sick green)










*/

export default SandpackRoot;
