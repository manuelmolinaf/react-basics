


import { type FC } from 'react';


import { Routes, Route, Navigate } from "react-router";
import Layout from './components/layout/layout.component';
import MoviesGrid from './pages/movies-grid/movies-grid.component';

const App: FC = () => {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="movies" replace />} />
        <Route path="movies" element={<MoviesGrid />} />
        {/* <Route path="movies/:id" element={<MovieDetails />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
