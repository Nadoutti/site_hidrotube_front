import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import localFont from "next/font/local";
import AppSidebar from "@/components/app_sidebar.js"


 const calibri = localFont({
  src: "../fonts/calibri-regular.ttf",
  variable: "--font-calibri",
});

export default function AdminLayout({ children }) {
  return (
      <div
        className={`${calibri.className}
          bg-[#ffffff]`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
  );
}

