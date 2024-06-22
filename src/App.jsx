import React, { useEffect } from 'react';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import PageDetail from './pages/PageDetail';
import Homepage from './pages/PageHome';
import Loginpage from './pages/PageLogin';
import Registerpage from './pages/PageRegister';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetUserAuth } from './states/userAuth/action.js';

function App() {
  const { userAuth, isPreload = false } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetUserAuth());
  };

  if (isPreload) {
    return null;
  }

  if (userAuth === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className='container-app'>
        <header>
          <Navigation userAuth={userAuth} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/thread/:threadId" element={<PageDetail />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
