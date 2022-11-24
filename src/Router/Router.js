import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MainRoute from "../Components/MainRoute/MainRoute";
import ShowCategory from "../Components/ShowCategory/ShowCategory";
import Signup from "../Components/Signup/Signup";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/category/:name',
          element: <ShowCategory></ShowCategory>,
          loader: ({params}) => fetch(`http://localhost:5000/categoris/${params.name}`)
        },
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    }
  ]);


