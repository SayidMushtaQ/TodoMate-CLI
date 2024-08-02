import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvatarIMG from "@/assets/avatar.jpeg";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem, 
} from "@/components/ui/dropdown-menu";
import { AuthContext,AuthContextProps } from "@/context/AuthContext";
const ArrowDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.65 12.65C9.75 12.75 9.86667 12.8 10 12.8C10.1333 12.8 10.25 12.75 10.35 12.65L13.15 9.85C13.3 9.7 13.3373 9.52067 13.262 9.312C13.1873 9.104 13.0333 9 12.8 9H7.2C6.96667 9 6.81267 9.104 6.738 9.312C6.66267 9.52067 6.7 9.7 6.85 9.85L9.65 12.65ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
      fill="black"
    />
  </svg>
);

export default function Dashboard() {
  const { user } = useContext(AuthContext) as AuthContextProps;
  console.log(user);
  return (
    <div className="container w-full mx-auto">
      <div className="absolute right-20 top-10">
        <Avatar className={cn("cursor-pointer")}>
          <AvatarImage src={AvatarIMG} alt="Avatar" />
          <AvatarFallback>UserName</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={"flex justify-center items-center flex-col gap-32 h-[80vh]"}
      >
        <div className="w-[35rem]">
          <Label htmlFor="todoBox" className={cn("font-bold text-base")}>
            Enter Task:
          </Label>
          <div className="border-2 border-[#343434] flex justify-between items-center rounded-md pr-2 mt-1.5 py-1">
            <Input
              id="todoBox"
              type="text"
              className={cn(
                "border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              )}
              placeholder="Enter a task to get started"
            />
            <Button className={cn("w-20 h-8")}>Add</Button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-10">
          <div className="bg-white border border-[#343434] ounded-md rounded-md p-3">
            <DropdownMenu>
              <DropdownMenuTrigger className={cn("outline-none")}>
                <div className="flex justify-between items-center w-[20rem]">
                  <span>TODO APP: Feature Development</span>
                  <ArrowDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={cn("shadow-none border-[#343434] rounded-md mt-5")}
              >
                <DropdownMenuItem
                  className={cn("w-[21rem]")}
                  onSelect={(e) => e.preventDefault()}
                >
                  <Checkbox className={cn("mr-2.5")} />
                  Implement user registration with email and password.
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Checkbox className={cn("mr-2.5")} />
                  Add user login functionality.
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Checkbox className={cn("mr-2.5")} />
                  Integrate password reset feature.
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
