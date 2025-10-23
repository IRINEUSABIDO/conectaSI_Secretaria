import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { register } from "../services/api/axios";
import { userRegisterType } from "../services/zodSchemas";

export const useRegister = () => {
  const navigate = useNavigate();
  const [postError, setPostError] = useState("");

  const onSubmit = async (data: userRegisterType) => {
    const dataSend = {
      cpf: data.cpf,
      nome: data.nome,
      telefone: data.telefone,
      senha: data.senha,
    };
    await register
      .post("/registro", dataSend, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      .then(() => {
        setPostError("");
        navigate({ to: "/login", replace: true });
      })
      .catch((error) => {
        const errorCode = error.response?.status;
        if (errorCode === 400) {
          setPostError("cpf ja cadastrado.");
        }
      });
  };
  return { postError, onSubmit };
};
