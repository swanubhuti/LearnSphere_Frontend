import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "../features/api/authApi";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);
  
  return (
    <div className="h-16  bg-white border-b border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
    {/* Desktop */}
    <div className="max-w-7xl mx-7 hidden md:flex justify-between items-center gap-10 h-full">
      <div className="flex items-center gap-2">
        <School className="text-sky-900" size={"35"} />
        <Link to="/">
          <h1 className=" text-sky-900 font-extrabold text-3xl">
            Learn Sphere
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {/* {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
                  </>
                )} */}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button className="bg-sky-900" onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          
        </div>
        
      </div>
      </div>
      

  )
}

export default Navbar