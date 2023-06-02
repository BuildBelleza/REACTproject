import React, { useState } from 'react';
import { Breeds, Favorites, Landing, Quiz } from '../views';

const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Landing />} />
        <Route path="/appliedTo" element={<AppliedTo />} />
      </Routes>
    </main>
  );
};

export default Main;