import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const {user} = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b  border-border backdrop-blur-md">
       <div className="flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="size-5 text-emerald-500" />
          <span className="font-medium">GymAI</span>
        </Link>

        <nav className="flex items-center gap-3">
          {user ? (
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="cursor-pointer py-5 px-4">My Plan</Button>
            </Link>
          ) : (
            <>
              <Link to="/auth/sign-in">
                <Button variant="ghost" size="sm" className="cursor-pointer py-5 px-4">Sign in</Button>
              </Link>
              <Link to="/auth/signup">
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer px-4 py-4">
                  Get started
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
