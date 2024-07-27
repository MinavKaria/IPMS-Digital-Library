import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Landing';
import Layout from './../pages/Layout';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'
import Dashboard from '../pages/Author/Dashboard';
import Author1 from '../pages/Author/Author1';
import Author2 from '../pages/Author/Author2';
import Author3 from '../pages/Author/Author3';

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
        path:'/author/paperdetails',
        element:<Author1/>
      },
      {
        path:'/author/paperdetails2',
        element:<Author2/>
      },
      {
        path:'/author/paperdetails3',
        element:<Author3/>
      }
    ],
  },
]);


export default router;
