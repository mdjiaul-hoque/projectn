import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// react-router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignUp from './SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
