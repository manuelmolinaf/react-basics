import { type FC } from 'react';
import './app.styles.css';

import Movies from './pages/movies/movies.component';
import { Routes, Route, Navigate} from 'react-router';
import Layout from './components/layout/layout.component';
import MovieDetails from './pages/movie-details/movie-details.component';


const App: FC = () => {
  

  return (


    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='movies'/>} />
        <Route path='movies' element={<Movies/>} />
         <Route path='movies/:id' element={<MovieDetails/>} />
      </Route>
    </Routes>

  );
}

export default App;
