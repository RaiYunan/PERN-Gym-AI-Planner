import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b  border-border backdrop-blur-md bg bg-black">
      <div className="max-w-full px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg text-accent-hover">GymAI</span>
        </Link>
        <nav className="gap-2 flex ">
          <>
            <Link to="/auth/sign-in">
              <Button className="text-white px-6 py-4" variant="ghost" >Sign in</Button>
            </Link>
             <Link to="/auth/signup">
              <Button className="text-black bg-accent-hover px-3 py-4">Sign up</Button>
            </Link>
          </>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
