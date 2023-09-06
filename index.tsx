import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
if (domNode === null) throw new Error('Root container missing in index.html');
const root = createRoot(domNode as HTMLElement);
root.render(<App />);
