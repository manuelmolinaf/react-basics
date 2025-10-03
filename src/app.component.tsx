import { Fragment, type FC } from 'react';
import './app.styles.css';

import Movies from './pages/movies/movies.component';
import { Routes, Route, Navigate} from 'react-router';
import Layout from './components/layout/layout.component';
import MovieDetails from './pages/movie-details/movie-details.component';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App: FC = () => {
  

  return (


    <Fragment>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to='movies'/>} />
          <Route path='movies' element={<Movies/>} />
           <Route path='movies/:id' element={<MovieDetails/>} />
        </Route>
      </Routes>

       {
        import.meta.env.MODE === 'development' &&
        <ReactQueryDevtools
          initialIsOpen={false}
          position='bottom'
          buttonPosition='bottom-right'
        />
      }

    </Fragment>

  );
}

export default App;
