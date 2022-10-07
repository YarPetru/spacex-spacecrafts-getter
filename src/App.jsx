import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './components/Layout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import { GlobalStyle } from 'styles/GlobalStyle';

const HomePage = lazy(() => import('pages/HomePage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const DragonListPage = lazy(() => import('pages/DragonListPage'));
const DragonDetailsPage = lazy(() => import('pages/DragonDetailsPage'));

function App() {
  return (
    <>
      <Suspense fallback="LOADING...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute restricted>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="/dragons"
              element={
                <PrivateRoute>
                  <DragonListPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/dragons/:dragonId"
              element={
                <PrivateRoute>
                  <DragonDetailsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute restricted>
                  <SignupPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
