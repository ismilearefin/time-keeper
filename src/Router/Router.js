import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import MainRoute from "../Components/MainRoute/MainRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);


