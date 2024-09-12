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
import Editorial from '../pages/Editorial';
import Reviewer2 from '../pages/Reviewer/Reviewer2';
import ReviewBoard from '../pages/ReviewBoard';
import Reviewer3 from '../pages/Reviewer/Reviewer3';
import Editor2 from '../pages/Editor/Editor2';
import Editor3 from '../pages/Editor/Dashboard';
import Editor4 from '../pages/Editor/Editor4';
import Editor5 from '../pages/Editor/Editor5';
import Editor6 from '../pages/Editor/Editor6';
import Ce2 from '../pages/ChiefEditor/Ce2';
import Ce4 from '../pages/ChiefEditor/Ce4';
import Layout2 from '../pages/Layout2';
import Guidelines from '../pages/Guidlines';




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
        path: "/sign/*",
        element: <Login/>
      },
     
    ],
  },
  {
    path: "/author/",
    element: <Layout2 />,
    children:[
      {
        path:'paperdetails/1',
        element:<Author1/>
      },
      {
        path:'paperdetails/2',
        element:<Author2/>
      },
      {
        path:'paperdetails/3',
        element:<Author3/>
      },
      {
        path:'dashboard',
        element:<AuthorDashboard/>
      },
     
      {
        path:'orchid',
        element:<Orchid/>
      },
      {
        path:'editorial',
        element:<Editorial/>
      },
      {
        path:'reviewboard',
        element:<ReviewBoard/>
      },
      
      
      {
        path:'ce2',
        element:<Ce2/>
      },
      {
        path:'ce4',
        element:<Ce4/>
      },
      {
        path:'guidelines',
        element:<Guidelines/>
      }
    ]
  },
  {
    path: "/contactus",
    element: <Layout2/> ,
    children:[
      {
        path:'',
        element:<Contactus/>
      }
    ]
  },
  {
    path: "reviewer/",
    element: <Layout2/>,
    children:[
      {
        path:'dashboard',
        element:<Reviewer1/>
      },
      {
        path:'paperdetails/1',
        element:<Reviewer2/>
      },
      {
        path:'paperdetails/2',
        element:<Reviewer3/>
      },
    ]
  },
  {
    path: "editor/",
    element: <Layout2/>,
    children:[
      {
        path:'reviewerdetails',
        element:<Editor2/>
      },
      {
        path:'dashboard',
        element:<Editor3/>
      },
      {
        path:'editor4',
        element:<Editor4/>
      },
      {
        path:'editor5',
        element:<Editor5/>
      },
      {
        path:'editor6',
        element:<Editor6/>
      },
    ]
  }
]);


export default router;
