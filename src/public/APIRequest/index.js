import axios from "axios";
import { API_END_POINT } from "../../utils/const";
const instanceAxios = axios.create({
  baseURL: API_END_POINT,
  //   headers: { "X-Custom-Header": "foobar" },
});
export const getRequest = async (url,params) => {
  try {
    const response = await instanceAxios
      .get(url,{params:params})
      .catch((e) => console.log("Error: ", e.message));
    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log("something went wrong", e);
  }
};
