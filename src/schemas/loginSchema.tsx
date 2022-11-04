import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Insira o Email")
    .email("Insira um email válido"),
  password: yup
    .string()
    .required("Cadastre a senha")
    .min(6, "Minimo 6 caracteres"),
});
