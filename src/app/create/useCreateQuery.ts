import { DOMAIN_API, ENDPOINT } from "@/constants/api.endpoint";
import { ROUTES } from "@/constants/routes";
import { ApiAxios, HeaderAuth } from "@/helpers/axios";
import { useLayout } from "@/hooks/layout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface ICreatePostPayloadProps {
  title: string;
  content: string;
  tags: string[];
}

export const useCreateQuery = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setToast } = useLayout();

  const createPost = async (payload: ICreatePostPayloadProps) => {
    setIsLoading(true);
    try {
      const res = await ApiAxios.post(
        `${DOMAIN_API.domain}${ENDPOINT.post.DEFAULT}`,
        { ...payload },
        HeaderAuth
      );
      const data = await res.data.data;
      setToast({
        success: true,
        massage: "Create Post " + data.title + " Success",
      });
      router.push(ROUTES.DASHBOARD);
    } catch (error: any) {
      console.log("Login", error);
      setToast({ error: true, massage: error.response.data.message });
    } finally {
      setIsLoading(false);
    }
  };
  return { createPost, isLoading };
};
