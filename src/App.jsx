import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getFetchingCurrent, authOperations } from 'redux/auth';

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
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(getFetchingCurrent);
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    setFirstRenderEnded(true);
  }, [dispatch]);

  return (
    !isFetchingUser &&
    firstRenderEnded && (
      <>
        <Suspense
          fallback={
            <PulseLoader
              cssOverride={{ textAlign: 'center', marginTop: '20px' }}
              color="#ff6b08"
              size="16px"
              margin="8px"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
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
        <ToastContainer theme="light" position="top-center" autoClose={3000} />
        <GlobalStyle />
      </>
    )
  );
}

export default App;
