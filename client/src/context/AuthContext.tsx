import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { authClient } from "@/lib/auth";

interface AuthContextType {
  user: Awaited<ReturnType<typeof authClient.getSession>>["data"]["user"] | null;
  isLoading:boolean;
}


const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeonUser] = useState<Awaited<ReturnType<typeof authClient.getSession>>["data"]["user"] | null>(null);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const result = await authClient.getSession();
        if (result && result.data?.user) {
          setNeonUser(result.data?.user);
        } else {
          setNeonUser(null);
        }
      } catch (err) {
        console.log(err);
        setNeonUser(null);
      }finally{
        setIsLoading(false)
      }
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser,isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}