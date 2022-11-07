import Modal from "react-modal";
import { createShapeContainer } from "../../stores/createShapeStore";
import { librariesContainer } from "../../stores/libsData";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const CreateShapeModal = () => {
  const [selectLang, setSelectLang] = useState();
  const [selectLibs, setSelectLibs] = useState([]);

  const [isModal, isOpenModal, isCloseModal] = createShapeContainer((state) => [
    state.isModal,
    state.isOpenModal,
    state.isCloseModal,
  ]);

  const [listLibrarie] = librariesContainer((state) => [state.listLibraries]);

  const customStyles = {
    overlay: { backgroundColor: "rgba(69, 67, 67, 0.6)" },
    content: {
      backgroundColor: "#09061E",
      display: "flex",
      alignItems: "center",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const { register, handleSubmit, formState } = useForm();

  const handleLibs = (javascript: string) => {
    !selectLibs.includes(javascript)
      ? setSelectLibs([...selectLibs, javascript])
      : console.log("Tecnologia já adicionada");
    console.log(selectLibs);
  };

  const date = async (data: object) => {
    register("libs", { value: selectLibs });
    try {
      const userId = localStorage.getItem("@shape:userId");

      const request = await api.post(`/600/users/${userId}/shapes`, data);

      console.log(request);
    } catch (error) {
      console.log(error);
    }

    register("libs", { value: selectLibs });
    console.log(data);
  };

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={isCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <form
        className="flex flex-col p-8 gap-5 bg-bg-form rounded-md w-full"
        onSubmit={handleSubmit(date)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-white text-2xl text font-medium">
            Crie seu Shape
          </h3>
          <IoClose
            onClick={isCloseModal}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
        <div className="flex items-center flex-row gap-20 mt-8">
          <div className="flex flex-col">
            <label
              htmlFor="command"
              className="text-grey-5 text-base mb-2 ml-1"
            >
              Qual comando você deseja usar?
            </label>
            <input
              type="text"
              id="command"
              required
              className="text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-purple-1 hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              placeholder="Comando"
              {...register("command")}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="package"
              className="text-grey-5 text-base mb-2 ml-1 pr-9"
            >
              Qual gerenciador de pacote?
            </label>
            <select
              id="package"
              defaultValue={"bothOptions"}
              required
              {...register("package")}
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
            >
              <option disabled value="bothOptions" className="bg-bg-form">
                Yarn ou NPM
              </option>
              <option value="npm" className="bg-bg-form">
                NPM
              </option>
              <option value="yarn" className="bg-bg-form">
                Yarn
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center flex-row gap-20 mt-8">
          <div className="flex flex-col">
            <label
              htmlFor="pack"
              className="text-grey-5 text-base mb-2 ml-1 pr-2"
            >
              Qual ferramente de construção?
            </label>
            <select
              id="pack"
              defaultValue={"bothOptions"}
              required
              {...register("tool")}
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
            >
              <option disabled value="bothOptions" className="bg-bg-form">
                Vite ou Create-React-App
              </option>
              <option value="create-react-app" className="bg-bg-form">
                Create React App
              </option>
              <option value="vite" className="bg-bg-form">
                Vite
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="language"
              className="text-grey-5 text-base mb-2 ml-1 "
            >
              Qual linguagem de programação?
            </label>
            <select
              id="language"
              defaultValue={"bothOptions"}
              required
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
              {...register("language", {
                onChange: (e) => setSelectLang(e.target.value),
              })}
            >
              <option disabled value="bothOptions" className="bg-bg-form">
                Typescript ou Javascript
              </option>
              <option value="javascript" className="bg-bg-form">
                Javascript
              </option>
              <option value="typescript" className="bg-bg-form">
                Typescript
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-grey-5 text-base">
            Quais bibliotecas você deseja?
          </h3>

          {selectLang === "javascript" ? (
            <ul className="grid grid-rows-2 grid-flow-col gap-4 mt-6 overflow-x-auto max-w-xl p-2 text-center scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md ">
              {listLibrarie.map(({ name, javascript }) => (
                <li
                  className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14 p-2"
                  key={javascript}
                >
                  <p onClick={() => handleLibs(javascript)}>{name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid grid-rows-2 grid-flow-col gap-4 mt-6 overflow-x-auto max-w-xl p-2 text-center scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md ">
              {listLibrarie.map(({ name, typescript }) => (
                <li
                  className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14 p-2"
                  key={typescript}
                >
                  <p onClick={() => handleLibs(typescript)}>{name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-row justify-center gap-8">
          <button className="bg-button-register p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300">
            Criar
          </button>
          <button
            onClick={isCloseModal}
            className="bg-grey-1 p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
          >
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
};
