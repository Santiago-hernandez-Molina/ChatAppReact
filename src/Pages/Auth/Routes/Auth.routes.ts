import { RouteObject } from "react-router-dom";

export const LoginRoutes: RouteObject = {
  path: "auth",
  children: [
    {
      id: "Login",
      path: "login",
      async lazy() {
        let { LoginIndex } = await import("../LoginIndex.tsx");
        return { Component: LoginIndex };
      },
    },
  ],
};
