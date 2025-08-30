"use client"

import * as React from "react"
import {
  Car,
  LayoutDashboard,
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
      title: "Manage Users",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Parcels",
      url: "#",
      icon: Car,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
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
