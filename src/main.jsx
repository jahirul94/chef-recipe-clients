import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import RecipesDetails from './components/RecipesDetails/RecipesDetails';
import PrivateRoutes from './routes/PrivateRoutes';
import ErrorPage from './errorPage/ErrorPage';
import Blog from './Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path :'/',
        element : <Home></Home>,
        loader : ()=> fetch('https://assignment-ten-server-seven.vercel.app/data')
      },
      { 
        path : '/login',
        element :<Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/:id',
        element : <PrivateRoutes><RecipesDetails></RecipesDetails></PrivateRoutes>,
        loader : ({params}) => fetch(`https://assignment-ten-server-seven.vercel.app/${params.id}`)
      },
       {
        path :'blog',
        element :<Blog></Blog>
       },
        {
          path:'*',
          element : <ErrorPage></ErrorPage>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
              <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
