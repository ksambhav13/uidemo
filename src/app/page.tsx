"use client";
import { useAuth } from "@/AuthContext";
import withAuth from "@/withAuth";
import { Button } from "@radix-ui/themes";
import axios from "axios";

export default withAuth(function Home() {
  const { user, setUser } = useAuth();
  const logout = () => {
    axios.post("/api/auth/logout").then(() => {
      setUser(null);
    });
  };
  return (
    <main>
      Welcome {user?.username} to the app!
      <div>
        <Button onClick={logout}>Sign Out</Button>
      </div>
    </main>
  );
});
