import { useState, useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './configs/router';
import ContextProvider from './actions/Context';

function App() {
  const [count, setCount] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="small-screen">
        <div className="show-on-small-screens">Made for PC</div>
        </div>
      ) : (
        <ContextProvider>
          <div className='font-saira'>
          <RouterProvider router={router} />
          </div>
        </ContextProvider>
      )}
    </>
  );
}

export default App;
