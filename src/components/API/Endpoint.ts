import axios from "axios";
import { log } from "console";
import { BusinessData } from "../AllInterface/Allinterface";

const localURl = "http://localhost:1234";

export const createBizUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: any) => {
  return await axios
    .post(`${localURl}/api/registerbusiness`, {
      name,
      email,
      password,
      confirmPassword,
    })
    .then((res) => {
      return res.data;
    });
};
export const LoginBizUser = async ({ email, password }: any) => {
  return await axios
    .post(`${localURl}/api/loginbusiness`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
