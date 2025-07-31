import { Calendar, Home, Newspaper, PackageSearch , Inbox, User, Settings, Images } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Slide Show",
    url: "#",
    icon: Images,
  },
  {
    title: "Produtos",
    url: "#",
    icon: PackageSearch,
  },
  {
    title: "Search",
    url: "#",
    icon: Newspaper,
  },
]

const data = {
  user: {
    name: "Nadottins",
    email: "nadottins@email.com",
    avatar: User
  },
  items: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Slide Show",
      url: "#",
      icon: Images,
    },
    {
      title: "Produtos",
      url: "#",
      icon: PackageSearch,
    },
    {
      title: "Search",
      url: "#",
      icon: Newspaper,
    },
  ],

  footer: {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
} 

export default function AppSidebar() {
  return (

    <Sidebar className="transition-[width,padding] duration-200 ease-in-out" collapsible="icon">

      {/* Header da sidebar */}
      <SidebarHeader>
        <SidebarMenu className="mt-3">
          <SidebarMenuItem className="pb-3"  key={data.user.name}>
            <SidebarMenuButton asChild>
              <a href="#">
                <data.user.avatar className="mb-1" />
                <span className="
                  text-[18px]">Bem vindo, {data.user.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarHeader>

      {/* Conteudo principal */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.items.map((item) => (
                <SidebarMenuItem className="pb-3"  key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mb-1" />
                      <span className="
                        text-[18px]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>

      </SidebarContent>

      {/* Footer da sidebar */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="pb-3"  key={data.footer.title}>
            <SidebarMenuButton asChild>
              <a href="#">
                <data.footer.icon className="mb-1" />
                <span className="
                  text-[18px]">{data.footer.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarFooter>
    </Sidebar>

  )
}
