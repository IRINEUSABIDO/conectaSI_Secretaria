import { createFileRoute } from "@tanstack/react-router";

import { FormButton } from "../components/Form/FormButton";
import { FormButtonPassword } from "../components/Form/FormButtonPassword";
import { FormButtonCPF } from "../components/Form/FormButtonCPF";
import { FormError } from "../components/Form/FormError";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { useRegister } from "../hooks/useRegister";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import pessoa from "../assets/icons/pessoa.png";
import telefone from "../assets/icons/telefone.png";
import credencias from "../assets/icons/credenciais.png";

import teclado from "../assets/icons/teclado.png";
import { Footer } from "../components/footer";
import { userRegisterSchema, userRegisterType } from "../services/zodSchemas";

export const Route = createFileRoute("/cadastro")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postError, onSubmit } = useRegister();

  const methods = useForm<userRegisterType>({
    resolver: zodResolver(userRegisterSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
  return (
    <>
      <div className="min-w-100">
        <Header title="CADASTRE-SE" />
        <div className="flex justify-center items-center bg-dark-gray text-light-gray h-screen min-h-200">
          <div className="columns-1">
            <Title />

            <main>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormButton title="Nome" src={pessoa} name="nome" />
                  {errors.nome && <FormError message={errors.nome.message} />}

                  <br />

                  <FormButton title="Telefone" src={telefone} name="telefone" />
                  {errors.telefone && (
                    <FormError message={errors.telefone.message} />
                  )}
                  <br />

                  <FormButtonCPF title="CPF" src={credencias} />
                  {errors.cpf && <FormError message={errors.cpf.message} />}
                  <br />

                  <FormButtonPassword
                    title="Senha"
                    hasPassword={true}
                    name="senha"
                  />
                  {errors.senha && <FormError message={errors.senha.message} />}
                  <br />

                  <FormButtonPassword
                    title="Confirmação da Senha"
                    hasPassword={false}
                    src={teclado}
                    name="confirmarSenha"
                  />
                  {errors.confirmarSenha && (
                    <FormError message={errors.confirmarSenha.message} />
                  )}

                  <div className="flex items-center justify-center flex-col">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className=" m-[20px] text-whitebor  bg-green-blue rounded-2xl disabled:bg-[#0e5e5e] "
                    >
                      {isSubmitting ? (
                        <h1 className="px-5.5 py-1.5 font-inter font-extrabold hover:cursor-crosshair">
                          Carregando..
                        </h1>
                      ) : (
                        <h1 className="px-5.5 py-1.5 font-inter font-extrabold hover:cursor-crosshair">
                          OK
                        </h1>
                      )}
                    </button>
                    {postError && <FormError message={postError} />}
                  </div>
                </form>
              </FormProvider>
            </main>
          </div>
        </div>
        <footer>
          <Footer hasLogo={true} />
        </footer>
      </div>
    </>
  );
}
