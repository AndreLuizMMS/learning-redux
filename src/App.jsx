import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Counter from './app/features/counter/Counter';
import Blog from './app/features/blog/Blog';

import './app.scss';

function App() {
  return (
    <Routes>
      <Route index element={<Counter />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
