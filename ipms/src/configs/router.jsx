import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Login from "../pages/Login"


const router=createBrowserRouter([
    {
      path: '/home',
      element: (
        <>
          <Navbar />
          <h1>Home</h1>
          <Card name="Yash" des="abcd"/>
          <Card name="Shree" des="efsf"/>
          <Footer />

        </>
      ),
    },
    {
        path:'login',
        element:(
            <>
                <Navbar />
                <Login/>
                <Footer />
            </>
        )
    },
    {
        path:'*',
        element:(
            <>
                <Navbar />
                <h1>404</h1>
                <Footer />
            </>
        )
    }
  ])

export default router