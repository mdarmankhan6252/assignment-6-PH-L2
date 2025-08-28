import App from "@/App";
import About from "@/pages/about/About";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
   {
      path: '/',
      Component: App,
      children: [
         {
            index: true,
            Component: Home
         },
         {
            path: 'about',
            Component: About
         },
         {
            path: 'contact',
            Component: Contact
         }
      ]
   },
   {
      path: '/login',
      Component: Login
   },
   {
      path: '/register',
      Component: Register
   }
])

