import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Layout from './components/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const DragonListPage = lazy(() => import('pages/DragonListPage'));
const DragonDetailsPage = lazy(() => import('pages/DragonDetailsPage'));

function App() {
  return (
    <>
      <Suspense fallback="LOADING...">
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/dragons" element={<DragonListPage />} />
          <Route path="/dragons/:dragonId" element={<DragonDetailsPage />} />
          {/* </Route> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
