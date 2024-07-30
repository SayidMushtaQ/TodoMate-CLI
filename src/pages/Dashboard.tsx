import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
export default function Dashboard() {
  return (
    <div className="w-full h-screen border-2 border-red-400">
      <div className={"flex justify-around items-center flex-col h-screen"}>
        <div className="w-[35rem]">
          <Label htmlFor="todoBox" className={cn('font-bold text-base')}>Enter Task:</Label>
          <div className="border-2 border-[#343434] flex justify-between items-center rounded-md pr-2 mt-1.5 py-1">
            <Input
              id="todoBox"
              type="text"
              className={cn("border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0")}
              placeholder="Enter a task to get started"
            />
            <Button className={cn('w-20 h-8')}>Add</Button>
          </div>
        </div>
        <div>Body</div>
      </div>
    </div>
  );
}
