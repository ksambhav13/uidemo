import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
      // Redirect to /auth/login if user is not logged in
      if (!user) {
        router.push('/auth/login');
      }
    }, [user, router]);

    if (!user) {
      // You can also show a loading spinner here
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
