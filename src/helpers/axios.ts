import { DOMAIN_API } from "@/constants/api.endpoint";
import { COOKIES } from "@/constants/common";
import axios from "axios";
import { getCookie } from "cookies-next";

export const ApiAxios = axios.create({
  baseURL: DOMAIN_API.domain,
});

export const HeaderAuth = {
  headers: {
    Authorization: `Bearer ${getCookie(COOKIES.tokenName)}`,
  },
};
