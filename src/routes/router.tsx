import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // children: [
    //   {
    //     path: '/',
    //     element: <App />,
    //   },
    // ],
  },
]);

export default router;
