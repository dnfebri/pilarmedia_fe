import { DOMAIN_API, ENDPOINT } from "@/constants/api.endpoint";
import { ApiAxios, HeaderAuth } from "@/helpers/axios";
import { TMedia } from "@/types/media.type";
import { useState } from "react";

export const useDashboard = () => {
  const [isPosts, setIsPosts] = useState<TMedia[]>([]);

  const getAllPosts = async () => {
    try {
      const res = await ApiAxios.get(
        `${DOMAIN_API.domain}${ENDPOINT.post.all}`,
        HeaderAuth
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
