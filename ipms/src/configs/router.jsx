import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Landing';
import Layout from './../pages/Layout';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'
import Author1 from '../pages/Author/Author1';
import Author2 from '../pages/Author/Author2';
import Author3 from '../pages/Author/Author3';
import AuthorDashboard from '../pages/Author/Author4';
import Reviewer1 from '../pages/Reviewer/Reviewer1';
import Orchid from '../pages/Orcid';
<<<<<<< HEAD
import Editorial from '../pages/Editorial';
=======
import Reviewer2 from '../pages/Reviewer/Reviewer2';
>>>>>>> 96d85996d38565b8766ca936f0589f2d8093a002

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
        path:'/author/dashboard',
        element:<AuthorDashboard/>
      },
      {
        path:'/review/dashboard',
        element:<Reviewer1/>
      },
      {
        path:'/review/paperdetails/1',
        element:<Reviewer2/>
      },
      {
        path:'/orchid',
        element:<Orchid/>
      },
      {
        path:'/editorial',
        element:<Editorial/>
      }
    ],
  },
]);


export default router;
