export const DOMAIN_API = {
  domain: process.env.NEXT_PUBLIC_API_APP,
};

export const ENDPOINT = {
  auth: {
    login: "/api/v1/auth/user/login",
    register: "/api/v1/auth/user/register",
    logout: "/api/v1/auth/user/logout",
  },
  user: {
    DEFAULT: "/api/users",
  },
};
