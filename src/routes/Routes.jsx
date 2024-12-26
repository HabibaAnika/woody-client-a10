
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";
import Root from "../layouts/Root";
import AllItem from "../pages/AllItem";
import AddItem from "../pages/AddItem";
import MyItem from "../pages/MyItem";
import ItemDetails from "../pages/ItemDetails"
import PrivetRoute from "./PrivetRoute";
import UpdateDetails from "../pages/UpdateDetails";
import Contact from '../components/Contact'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('https://b9-a10-woody-server.vercel.app/all')
        },
        {
          path: "/all",
          element: <AllItem></AllItem>,
          loader: () => fetch('https://b9-a10-woody-server.vercel.app/all')
        },
        {
          path:"/add",
          element: <PrivetRoute>
               <AddItem></AddItem>
          </PrivetRoute>
        },
        {
          path: "/myItem",
          element: <PrivetRoute>
              <MyItem></MyItem>
          </PrivetRoute>
        },
        {
          path: "/update/:id",
          element: <UpdateDetails></UpdateDetails>
        },
        {
          path: "/details/:id",
          element: <PrivetRoute>
            <ItemDetails></ItemDetails>
          </PrivetRoute>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    },
  ]);
  
  export default router;