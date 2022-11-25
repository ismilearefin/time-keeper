import {createBrowserRouter} from "react-router-dom";
import Addproducts from "../Components/DashboardRoute/Addproducts/Addproducts";
import AllBuyer from "../Components/DashboardRoute/AllBuyer/AllBuyer";
import AllSellers from "../Components/DashboardRoute/AllSellers/AllSellers";
import DashboardRoute from "../Components/DashboardRoute/DashboardRoute";
import Myorders from "../Components/DashboardRoute/Myorders/Myorders";
import MyProducts from "../Components/DashboardRoute/MyProducts/MyProducts";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MainRoute from "../Components/MainRoute/MainRoute";
import ShowCategory from "../Components/ShowCategory/ShowCategory";
import Signup from "../Components/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
          element: <PrivateRoute><ShowCategory></ShowCategory></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/categoris/${params.name}`)
        }
      ]
    },
    {
      path : '/dasboard',
      element: <PrivateRoute><DashboardRoute></DashboardRoute></PrivateRoute>,
      children:[
        {
          path: '/dasboard/myorder',
          element:<Myorders></Myorders>
        },
        {
          path: '/dasboard/addproduct',
          element:<Addproducts></Addproducts>
        },
        {
          path:'/dasboard/myproducts',
          element:<MyProducts></MyProducts>
        },
        {
          path:'/dasboard/allseller',
          element:<AllSellers></AllSellers>
        },
        {
          path:'/dasboard/allbuyers',
          element:<AllBuyer></AllBuyer>
        },
        {
          path:'/dasboard/reporteditem',
          element:<p>Reported Items</p>
        }
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


