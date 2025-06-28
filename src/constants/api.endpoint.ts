export const DOMAIN_API = {
  domain: process.env.NEXT_PUBLIC_API_APP,
};

export const ENDPOINT = {
  auth: {
    login: "/api/v1/auth/user/login",
    register: "/api/v1/auth/user/register",
    logout: "/api/v1/auth/user/logout",
  },
  post: {
    DEFAULT: "/api/v1/post",
    all: "/api/v1/post/all",
  },
  user: {
    DEFAULT: "/api/users",
  },
};
