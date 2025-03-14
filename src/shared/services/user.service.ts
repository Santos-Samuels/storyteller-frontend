import { IUser } from "../interfaces/user.entity";
import api from "./api";

const UserService = {
  getById: async (id: IUser["id"]) => {
    return api.get<IUser>(`/user/${id}`);
  },
};

export default UserService;
