import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  username: yup.string().required("Insira o usuario"),
  email: yup
    .string()
    .required("Insira o Email")
    .email("Insira um email válido"),
  image: yup.string().required("Insira a Imagem"),
  password: yup
    .string()
    .required("Cadastre a senha")
    .min(6, "Minimo 6 caracteres"),
});
