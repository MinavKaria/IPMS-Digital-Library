import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Landing';
import Layout from './../pages/Layout';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'
import Dashboard from '../pages/Author/Dashboard';

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
      }
    ],
  },
]);


export default router;
