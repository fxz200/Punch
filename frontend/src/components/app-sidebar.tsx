import { useState } from "react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Index",
    url: "/index",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");
  console.log(selectedItem);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="mt-8">
            <SidebarMenuButton asChild>
              <a>
                <Settings className="text-primary" />
                <span className="text-primary">item.title</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`py-2 ${
                    selectedItem === item.title
                      ? "bg-sidebar-border rounded-md"
                      : ""
                  }`}
                  onClick={() => setSelectedItem(item.title)}
                >
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className=" text-primary" />
                      <span className="text-primary">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between  py-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a>
                <Settings className=" text-primary" />
                <span className="text-primary">item.title</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
