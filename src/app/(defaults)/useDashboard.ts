import { DOMAIN_API, ENDPOINT } from "@/constants/api.endpoint";
import { COOKIES } from "@/constants/common";
import { ApiAxios } from "@/helpers/axios";
import { TMedia } from "@/types/media.type";
import { getCookie } from "cookies-next";
import { useState } from "react";

export const useDashboard = () => {
  const [isPosts, setIsPosts] = useState<TMedia[]>([]);

  const getAllPosts = async () => {
    try {
      const res = await ApiAxios.get(
        `${DOMAIN_API.domain}${ENDPOINT.post.all}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie(COOKIES.tokenName)}`,
          },
        }
      );
      const data = await res.data.data;
      setIsPosts(data);
    } catch (error) {
      console.log("getAllPosts", error);
    }
  };

  return {
    getAllPosts,
    isPosts,
  };
};
