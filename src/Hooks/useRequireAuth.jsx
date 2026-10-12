import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

import useAuth from "@/Hooks/useAuth";

const useRequireAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const requireAuth = (action, message = "ابتدا وارد حساب کاربری خود شوید") => {
    if (isLoading) return;

    if (!isAuthenticated) {
      toast.error(message);
      navigate("/auth", { state: { from: pathname } });
      return;
    }

    action();
  };

  return { user, isAuthenticated, requireAuth };
};

export default useRequireAuth;
