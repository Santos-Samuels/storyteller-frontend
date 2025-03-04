import {
  AuthLoginDTO,
  AuthRegisterDTO,
  AuthValidateTokenDTO,
  IAuthData,
} from "../interfaces/auth.entity";
import api from "./api";

const AuthService = {
  login: async (params: AuthLoginDTO) => {
    return api.post<IAuthData>("/auth/login", params);
  },
  register: async (params: AuthRegisterDTO) => {
    return api.post<IAuthData>(`/auth/register`, params);
  },
  validateToken: async (params: AuthValidateTokenDTO) => {
    return api.post<IAuthData>("/auth/validate-token", params);
  },
};

export default AuthService;
