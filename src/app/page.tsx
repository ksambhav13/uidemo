"use client";
import { useAuth } from "@/AuthContext";
import withAuth from "@/withAuth";
import { Button } from "@chakra-ui/react";
import axios from "axios";

export default withAuth(function Home() {
  const { user, setUser } = useAuth();
  const signOut = () => {
    axios.post("/api/auth/logout").then(() => {
      setUser(null);
    });
  };
  return (
    <main>
      Welcome {user?.username} to the app!
      <div>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </main>
  );
});
