import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const portalContainer = document.getElementById('root-portal'); // Create a new div element
if (!portalContainer) {
  // Create the portal container if it doesn't exist
  const newPortalContainer = document.createElement('div');
  newPortalContainer.id = 'root-portal';
  document.body.appendChild(newPortalContainer);
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App />,
);