import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Landing';
import Layout from './../pages/Layout';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'
import Dashboard from '../pages/Author/Dashboard';
import Author1 from '../pages/Author/Author1';
import Author2 from '../pages/Author/Author2';
import Author3 from '../pages/Author/Author3';
import Author4 from '../pages/Author/Author4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />, 
      },
      {
        path: "/contactus",
        element: <Contactus/> ,
      },
      {
        path: "/sign/*",
        element: <Login/>
      },
      {
        path:'/author/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/author/paperdetails/1',
        element:<Author1/>
      },
      {
        path:'/author/paperdetails/2',
        element:<Author2/>
      },
      {
        path:'/author/paperdetails/3',
        element:<Author3/>
      },
      {
        path:'/author/paperdetails4',
        element:<Author4/>
      }
    ],
  },
]);


export default router;
