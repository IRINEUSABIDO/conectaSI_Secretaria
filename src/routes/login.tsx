import { Footer } from "../components/footer.tsx";
import { Header } from "../components/header.tsx";
import { FormButtonCPF } from "../components/Form/FormButtonCPF.tsx";
import { FormButtonPassword } from "../components/Form/FormButtonPassword.tsx";
import { Title } from "../components/title.tsx";
import { FormError } from "../components/Form/FormError.tsx";

import type { userLoginType } from "../services/zodSchemas.ts";
import { userLoginSchema } from "../services/zodSchemas.ts";

import identify from "../assets/icons/credenciais.png";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useLogin } from "../hooks/useLogin.ts";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postError, onSubmit } = useLogin();

  const methods = useForm<userLoginType>({
    resolver: zodResolver(userLoginSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  // cpf da lenda: 093.426.767-09 :)
  // senha do legend: irineu13
  return (
    <>
      <div className="min-w-100">
        <Header title="LOGIN" />

        <main className="h-screen bg-dark-gray flex items-center justify-center min-h-200">
          <div className="columns-1">
            <div className="mb-[15%]">
            <Title />
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* form do cpf  */}
                <div>
                  <FormButtonCPF title="CPF" src={identify} />
                  {errors.cpf && <FormError message={errors.cpf.message} />}
                </div>

                <br />

                {/* form da senha  */}
                <FormButtonPassword
                  title="Senha"
                  hasPassword={true}
                  name="senha"
                />
                {errors.senha && <FormError message={errors.senha.message} />}
                {/* botao do cadastro */}
                <div className="text-header-blue font-inter font-semibold text-[15px] mt-[10px] mb-[25px]">
                  <h1>
                    NOVO NO CONECTA SEINFRA?{" "}
                    <Link
                      to="/cadastro"
                      className="hover:text-blue-800 underline"
                    >
                      CADASTRE-SE
                    </Link>
                  </h1>
                </div>
                {/* botao do submit */}
                <div className="flex flex-col items-center justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" m-[20px] text-whitebor  bg-green-blue rounded-2xl disabled:bg-[#0e5e5e] disabled:text-[#d0eaea] "
                  >
                    {isSubmitting ? (
                      <h1 className="px-5.5 py-1.5 font-inter font-extrabold hover:cursor-crosshair">
                        Carregando..
                      </h1>
                    ) : (
                      <h1 className="px-5.5 py-1.5 font-inter font-extrabold hover:cursor-crosshair">
                        ENTRAR
                      </h1>
                    )}
                  </button>
                  {/* mensagem de erro caso de ruim no login */}
                  {postError && <FormError message={postError} />}
                </div>
              </form>
            </FormProvider>
          </div>
        </main>
        <Footer hasLogo={true} />
      </div>
    </>
  );
}
