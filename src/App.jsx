import { lazy, Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import View from './Pages/View';
import ResturantMenu from './Pages/ResturantMenu';
import Error from './Pages/Error';
import { Route, Routes } from 'react-router-dom';
import ShimmerUI from './Components/ShimmerUI';

function App() {
  const About = lazy(() => import('./Pages/About'));

  return (
    <>
      <Header />
      <Routes>
        <Route element={<View />} path='/' />
        <Route element={<Suspense fallback={ShimmerUI}><About /></Suspense>} path='/about' />
        <Route element={<Error />} path='/err' />
        <Route element={<ResturantMenu />} path='/menu/:id' />
      </Routes>
    </>
  );
}

export default App;
