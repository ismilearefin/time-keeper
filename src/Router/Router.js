import {createBrowserRouter} from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Addproducts from "../Components/DashboardRoute/Addproducts/Addproducts";
import AllBuyer from "../Components/DashboardRoute/AllBuyer/AllBuyer";
import AllSellers from "../Components/DashboardRoute/AllSellers/AllSellers";
import DashboardRoute from "../Components/DashboardRoute/DashboardRoute";
import Myorders from "../Components/DashboardRoute/Myorders/Myorders";
import Payment from "../Components/DashboardRoute/Myorders/Payment/Payment";
import MyProducts from "../Components/DashboardRoute/MyProducts/MyProducts";
import ReportedItems from "../Components/DashboardRoute/ReportedItems/ReportedItems";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MainRoute from "../Components/MainRoute/MainRoute";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import ShowCategory from "../Components/ShowCategory/ShowCategory";
import Signup from "../Components/Signup/Signup";
import DisplayError from "../DisplayError/DisplayError";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute/AdminPrivateRoute";
import BuyerPrivateRoute from "../PrivateRoute/BuyerPrivateRoute/BuyerPrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerPrivateRoute from "../PrivateRoute/SellerPrivateRoute/SellerPrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      errorElement: <DisplayError></DisplayError>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/category/:name',
          element: <PrivateRoute><ShowCategory></ShowCategory></PrivateRoute>,
          loader: ({params}) => fetch(`https://timekeeper-server.vercel.app/categoris/${params.name}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
      ]
    },
    {
      path : '/dasboard',
      element: <PrivateRoute><DashboardRoute></DashboardRoute></PrivateRoute>,
      errorElement: <DisplayError></DisplayError>,
      children:[
        {
          path: '/dasboard/myorder',
          element:<BuyerPrivateRoute><Myorders></Myorders></BuyerPrivateRoute>
        },
        {
          path:'/dasboard/payment/:id',
          element:<BuyerPrivateRoute><Payment></Payment></BuyerPrivateRoute>,
          loader:({params}) => fetch(`https://timekeeper-server.vercel.app/allproducts/payment/${params.id}`)
        },
        {
          path: '/dasboard/addproduct',
          element:<SellerPrivateRoute><Addproducts></Addproducts></SellerPrivateRoute>
        },
        {
          path:'/dasboard/myproducts',
          element:<SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
        },
        {
          path:'/dasboard/allseller',
          element:<AdminPrivateRoute><AllSellers></AllSellers></AdminPrivateRoute>
        },
        {
          path:'/dasboard/allbuyers',
          element:<AdminPrivateRoute><AllBuyer></AllBuyer></AdminPrivateRoute>
        },
        {
          path:'/dasboard/reporteditems',
          element:<AdminPrivateRoute><ReportedItems></ReportedItems></AdminPrivateRoute>
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ]);


