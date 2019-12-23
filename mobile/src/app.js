import React from 'react';

import createRoutes from './routes';

export default function App() {
  const signed = false;

  const Routes = createRoutes(signed);
  return <Routes />;
}
