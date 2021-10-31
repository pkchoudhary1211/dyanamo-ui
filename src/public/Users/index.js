import { getRequest } from "../APIRequest/index";
import { API_URLS } from "../../utils/api_urls";

export const getUsers = async (params = {}) => {
  const User = await getRequest(API_URLS.userList, params);
  return User;
};
