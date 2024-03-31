import { createRoot } from 'react-dom/client';

import AppWrapper from './AppWrapper';

const container = document.getElementById('root');

if (container instanceof HTMLElement) {
  const root = createRoot(container);

  root.render(<AppWrapper />);
}
