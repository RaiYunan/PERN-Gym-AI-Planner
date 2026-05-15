import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border border-b-black backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">GymAI</span>
        </Link>
        <nav>
          <>
            <Link to="/auth/sign-in"><Button className="bg-white text-black">Sign in</Button></Link>
          </>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
