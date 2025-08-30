import App from "@/App";
import About from "@/pages/about/About";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import Contact from "@/pages/contact/Contact";
import AdminOverview from "@/pages/dashboard/admin/AdminOverview";
import ManageParcels from "@/pages/dashboard/admin/ManageParcels";
import ManageUsers from "@/pages/dashboard/admin/ManageUsers";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import DeliveryHistory from "@/pages/dashboard/receiver/DeliveryHistory";
import IncomingParcels from "@/pages/dashboard/receiver/IncomingParcels";
import ReceiverHome from "@/pages/dashboard/receiver/ReceiverHome";
import ReceiverDashboard from "@/pages/dashboard/ReceiverDashboard";
import CreateParcel from "@/pages/dashboard/sender/CreateParcel";
import MyParcels from "@/pages/dashboard/sender/MyParcels";
import SenderHome from "@/pages/dashboard/sender/SenderHome";
import SenderDashboard from "@/pages/dashboard/SenderDashboard";
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
         },
      ]
   },
   {
      path: '/login',
      Component: Login
   },
   {
      path: '/register',
      Component: Register
   },
   {
      path: '/admin/dashboard',
      Component: AdminDashboard,
      children: [
         {
            index: true,
            Component: AdminOverview
         },
         {
            path: 'manage-users',
            Component: ManageUsers
         },
         {
            path: 'manage-parcels',
            Component: ManageParcels
         }

      ]
   },
   {
      path: '/receiver/dashboard',
      Component: ReceiverDashboard,
      children: [
         {
            index: true,
            Component: ReceiverHome
         },
         {
            path: 'incoming',
            Component: IncomingParcels
         },
         {
            path: 'history',
            Component: DeliveryHistory
         }
      ]
   },
   {
      path: '/sender/dashboard',
      Component: SenderDashboard,
      children: [
         {
            index: true,
            Component: SenderHome
         },
         {
            path: 'create-parcel',
            Component: CreateParcel
         },
         {
            path: 'my-parcels',
            Component: MyParcels
         }
      ]
   }
])

