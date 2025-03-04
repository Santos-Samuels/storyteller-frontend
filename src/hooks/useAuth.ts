import Cookies from "js-cookie";
import { useMemo } from "react";

interface CredentialsProps {
  userName: string;
  userId: string;
  token: string;
}

const useAuth = () => {
  const saveCredentials = (credentials: CredentialsProps) => {
    Cookies.set("auth", JSON.stringify(credentials));
  };

  const getCredentials = () => {
    const cookie = Cookies.get("auth");

    if (cookie) {
      return JSON.parse(cookie);
    }

    return null;
  };

  const removeCredentials = () => {
    Cookies.remove("auth");
  };

  const credentials: CredentialsProps = useMemo(() => getCredentials(), []);

  return {
    saveCredentials,
    removeCredentials,
    getCredentials,
    credentials,
  };
};

export default useAuth;
