import React, { useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { DatePickerWithRange } from "./ui/DateRangePicker";
import { ViewTabs } from "./ViewTabs";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const [activeTab, setActiveTab] = useState("dailyView");
  const renderContent = () => {
    switch (activeTab) {
      case "dailyView":
        return <div>這是dailyView頁面內容</div>;
      case "monthlyView":
        return <div>這是monthlyView頁面內容</div>;
      case "statistics":
        return <div>這是statistics頁面內容</div>;
      default:
        return <div>請選擇一個頁面</div>;
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 border-b-2  backdrop-blur ">
        <div className="flex h-16 items-center justify-between py-4 px-3 sm:px-6 lg:px-8 max-w-[1700px] mx-auto">
          <div className="text-4xl font-bold tracking-tight">
            Punch-In Tracker
          </div>
          <ViewTabs onTabChange={setActiveTab} />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DatePickerWithRange className="hidden sm:block" />
          </div>
        </div>
      </header>
      <main className="flex-grow p-4">{renderContent()}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 My Application
      </footer>
    </div>
  );
};
export default MainLayout;
