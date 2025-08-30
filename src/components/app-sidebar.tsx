"use client"

import * as React from "react"
import {
  Car,
  LayoutDashboard,
  SendHorizontal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "@/utils/Logo"

// This is sample data.
const data = {

  teams: [
    {
      name: "ParcelXpress",
      logo: Logo,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Admin Panel",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: '/admin/dashboard'
        },
        {
          title: "Manage Users",
          url: "/admin/dashboard/manage-users",
        }
      ],
    },
    {
      title: "Receiver",
      url: "",
      icon: Car ,
      items: [
        {
          title: "Receiver Overview",
          url: "/receiver/dashboard",
        },
        {
          title: "Incoming",
          url: "/receiver/dashboard/incoming",
        },
        {
          title: "Delivery History",
          url: "/receiver/dashboard/history",
        },
      ],
    },
    {
      title: "Sender",
      url: "",
      icon: SendHorizontal,
      items: [
        {
          title: "Sender Overview",
          url: "/sender/dashboard",
        },
        {
          title: "Create Parcel",
          url: "create-parcel",
        },
        {
          title: "My Parcels",
          url: "my-parcels",
        },
      ],
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className=" pt-4 pl-6">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
