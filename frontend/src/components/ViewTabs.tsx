import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface ViewTabsProps {
  onTabChange: (value: string) => void;
}
export function ViewTabs({ onTabChange }: ViewTabsProps) {
  return (
    <Tabs
      defaultValue="dailyView"
      className="w-[400px]"
      onValueChange={onTabChange}
    >
      <TabsList className="flex gap-2">
        <TabsTrigger value="dailyView">Daily View</TabsTrigger>
        <TabsTrigger value="monthlyView">Monthly View</TabsTrigger>
        <TabsTrigger value="statistics">Statistics</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
