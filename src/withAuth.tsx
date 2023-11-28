import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
      // Redirect to /auth/login if user is not logged in
      console.log("!user && !loading", !user && !loading);
      console.log(user);
      console.log(loading);
      if (!user && !loading) {
        router.push("/auth/login");
      }
    }, [user, router, loading]);

    if (loading) return <div>Loading...</div>;

    if (!user) {
      // You can also show a loading spinner here
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
