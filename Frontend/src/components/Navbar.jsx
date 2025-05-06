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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link, useNavigate } from "react-router-dom";
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
      toast.success(data?.message || "User logged out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 px-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
       
        <div className="flex items-center gap-2">
          <School className="text-sky-900 " size={30} />
          <Link to="/">
            <h1 className="text-sky-900 font-bold text-xl md:text-3xl">
              Learn Sphere
            </h1>
          </Link>
        </div>

        
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="user"
                  />
                  <AvatarFallback>LS</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/my-learning">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button className="bg-sky-900" onClick={() => navigate("/login")}>
                Signup
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-sky-900" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-50">
              <SheetHeader>
                <SheetTitle className="text-sky-900 text-lg">Menu</SheetTitle>
              </SheetHeader>

              <div className=" p-3 flex flex-col gap-3">
                {[
                  { to: "/", label: "Home" },
                  user && { to: "/my-learning", label: "My Learning" },
                ]
                  .filter(Boolean)
                  .map(({ to, label }) => (
                    <SheetClose asChild key={to}>
                      <Link to={to} className="text-gray-800">
                        {label}
                      </Link>
                    </SheetClose>
                  ))}

                {user ? (
                  <Button
                    variant="ghost"
                    className="justify-start p-0 text-left text-red-600"
                    onClick={logoutHandler}
                  >
                    Log out
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="bg-sky-900 w-full"
                      onClick={() => navigate("/login")}
                    >
                      Signup
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
