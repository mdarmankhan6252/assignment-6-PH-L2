import { AppSidebar } from "@/components/app-sidebar"
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router"
export default function AdminDashboard() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
               <div className="flex items-center justify-between gap-2 px-4  w-full">
                  <SidebarTrigger className="-ml-1" />
                  <img src="https://i.ibb.co.com/67B1bs1p/Arman-khan-gst.jpg" className="w-10 rounded-full h-10 object-cover" />
               </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
               <Outlet />
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}