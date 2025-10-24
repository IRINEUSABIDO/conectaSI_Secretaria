import { z } from "zod";

export const userLoginSchema = z.object({
  cpf: z
    .string()
    .max(14, { message: "CPF invalido" })
    .min(1, { message: "O campo precisa ser preenchido" })
    .min(14, { message: "CPF invalido" }),
  senha: z
    .string()
    .min(8, { message: "A senha deve conter no minimo 8 caracteres" })
    .min(1, { message: "O campo precisa ser preenchido" }),
});
export const userRegisterSchema = z
  .object({
    cpf: z
      .string()
      .max(14, { message: "CPF invalido" })
      .min(1, { message: "O campo precisa ser preenchido" })
      .min(14, { message: "CPF invalido" }),
    senha: z
      .string()
      .min(8, { message: "A senha deve conter no minimo 8 caracteres" })
      .min(1, { message: "O campo precisa ser preenchido" }),
    confirmarSenha: z
      .string()
      .min(1, { message: "O campo precisa ser preenchido" }),
    telefone: z.string().min(1, { message: "O campo precisa ser preenchido" }),
    nome: z.string().min(1, { message: "O campo precisa ser preenchido" }),
  })
  .superRefine(({ confirmarSenha, senha }, ctx) => {
    if (confirmarSenha !== senha) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais",
        path: ["confirmarSenha"],
      });
    }
  });

export const registrarOrdemSchema = z.object({
  categoria: z.enum(
    ["Iluminação", "Poda da Árvore", "Buraco na Pista", "Asfaltar", "Outros"],
    { message: "Selecione uma categoria" }
  ),
  bairro: z.string().min(1, { message: "Informe o bairro" }),
  rua: z.string().min(1, { message: "Informe a rua" }),
  pontoReferencia: z
    .string()
    .min(1, { message: "Informe um ponto de referência" }),
  descricao: z.string().min(1, "Informe uma descrição"),
});
export type userLoginType = z.infer<typeof userLoginSchema>;
export type userRegisterType = z.infer<typeof userRegisterSchema>;
export type registrarOrdemSchemaType = z.infer<typeof registrarOrdemSchema>;
