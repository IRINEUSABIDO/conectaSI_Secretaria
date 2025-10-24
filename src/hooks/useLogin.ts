import type { userLoginType } from "../services/zodSchemas";

import { login } from "../services/api/axios";
import Cookie from "../utils/Cookies.ts";

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const [postError, setPostError] = useState("");

  async function onSubmit(data: userLoginType) {
    await login
      .post("/login", data, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      .then(() => {
        setPostError("");
        Cookie.setCookie("login", "true", 1);
        navigate({ to: "/", replace: true });
      })
      .catch((error) => {
        const errorCode = error.response?.status;
        if (errorCode === 401) {
          setPostError("Usuário ou senha incorretos.");
        } else if (errorCode === 500) {
          setPostError("Erro interno no servidor, por favor tente mais tarde.");
        } else if (error.request) {
          setPostError("Sem conexão com o servidor.");
        } else {
          setPostError("Erro desconhecido.");
        }
      });
  }

  return { postError, onSubmit };
};
