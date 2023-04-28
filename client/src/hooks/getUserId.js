import Cookies from "js-cookie";
import { getUser } from "../services/user-services/userServices";

export const useGetUserID = () => {
  const auth = Cookies.get("auth");
  if (auth) {
    getUser(auth).then((res) => Cookies.set("id", res._id));
  }

  return Cookies.get("id");
};
