import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Landing';
import Layout from './../pages/Layout';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'
import Dashboard from '../pages/Author/Dashboard';
import Author1 from '../pages/Author/Author1';
import Author2 from '../pages/Author/Author2';

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
        path: "/sign",
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
      }
    ],
  },
]);


export default router;
