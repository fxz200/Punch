import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { DatePickerWithRange } from "./ui/DateRangePicker";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // const [activeTab, setActiveTab] = useState("dailyView");
  // const activeTab = "dailyView"; // 預設為 dailyView
  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "dailyView":
  //       return <div>這是dailyView頁面內容</div>;
  //     //   case "monthlyView":
  //     //     return <div>這是monthlyView頁面內容</div>;
  //     //   case "statistics":
  //     //     return <div>這是statistics頁面內容</div>;
  //     default:
  //       return <div>請選擇一個頁面</div>;
  //   }
  // };
  return (
    <div className="h-screen">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-grow">
          <header className="sticky top-0 z-10 border-b-2  backdrop-blur ">
            <div className="flex h-16 items-center justify-between py-4 px-3 sm:px-6 lg:px-8 max-w-[1700px] mx-auto">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="text-3xl font-bold tracking-tight">
                  Punch-In Tracker
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ModeToggle />
                <DatePickerWithRange className="hidden sm:block" />
              </div>
            </div>
          </header>

          <main className="flex-grow p-4">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};
export default MainLayout;
