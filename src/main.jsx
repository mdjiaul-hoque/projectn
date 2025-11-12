import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import Layout from './Layout.jsx/Layout.jsx';
import Home from './pages/Home.jsx';
import SkillDetails from './pages/SkillDetails.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import NotFound from './pages/NotFound.jsx';
// import Profile from './pages/Profile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "Signup",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "profile",
      //   element: <Profile></Profile>
      // },
        {
        // Dynamic route for skill details
        path: "skill/:id",
        element: <ProtectedRoute><SkillDetails /></ProtectedRoute>,
      },
      {
        path: '*',
        element: <NotFound></NotFound>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>

)
