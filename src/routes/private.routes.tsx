import useAuth from "@/hooks/useAuth";
import { IAuthData } from "@/shared/interfaces/auth.entity";
import AuthService from "@/shared/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect, useMemo } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  const navigate = useNavigate();
  const { getCredentials, removeCredentials } = useAuth();
  const credentials = useMemo(() => getCredentials(), []);

  const onSuccess = (data: AxiosResponse<IAuthData>) => {
    if (data.data.token) return;

    removeCredentials();
    navigate("/unauthorized");
  };

  const mutation = useMutation({
    mutationKey: ["validateToken"],
    mutationFn: AuthService.validateToken,
    onSuccess: onSuccess,
  });

  useEffect(() => {
    if (credentials)
      mutation.mutate({
        token: credentials.token,
        userId: credentials.userId,
      });
  }, [credentials]);

  if (!credentials) return <Navigate replace to="/auth/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
