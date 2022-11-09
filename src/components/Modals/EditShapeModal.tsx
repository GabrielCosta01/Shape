import Modal from "react-modal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { librariesContainer } from "../../stores/libsData";
import { editShapeStore } from "../../stores/editShapeStore";
import { toastEditShapeStore } from "../../stores/toastEditShapeStore";

type IDateShapes = {
  command: string;
  language: string;
  libs: string[];
  package: string;
  tool: string;
  watch?: any;
};

export const EditShapeModal = () => {
  
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      outline: "none",
    },
  };

  const [selectLang, setSelectLang] = useState();
  const [editLibs, setEditLibs] = useState<string[]>([]);
  const [generateCommand, setGenerateCommand] = useState("");

  const [isModal, isCloseModal, handleClickCard] = editShapeStore((state) => [
    state.isModal,
    state.isCloseModal,
    state.handleClickCard,
  ]);
  const [toastCreate] = toastEditShapeStore((state) => [state.toastCreate]);
  const [listLibrarie] = librariesContainer((state) => [state.listLibraries]);

  const { register, handleSubmit, reset } = useForm<IDateShapes>();

  const handleLibs = (javascript: string) => {
    const select = editLibs.includes(javascript);
    if (!select) {
      setEditLibs([...editLibs, javascript]);
    } else {
      const newLibRemove = editLibs.filter((lib) => lib !== javascript);
      setEditLibs(newLibRemove);
    }
  };

  const handleLibsTs = (typescript: string) => {
    const select = editLibs.includes(typescript);
    if (!select) {
      setEditLibs([...editLibs, typescript]);
    } else {
      const newLibRemove = editLibs.filter((lib) => lib !== typescript);
      setEditLibs(newLibRemove);
    }
  };

  const closeModal = () => {
    isCloseModal();
    reset();
  };

  useEffect(() => {
    reset();
    setEditLibs(handleClickCard.libs);
  }, [isModal]);

  useEffect(() => {
    console.log(editLibs);
  }, [editLibs]);

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={isCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form className="flex flex-col p-8 gap-5 bg-bg-form rounded-md">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl text font-medium">
              Edite seu Shape
            </h3>
            <IoClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => closeModal()}
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
                defaultValue={handleClickCard.command}
                required
                className="text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
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
                defaultValue={handleClickCard.package}
                required
                {...register("package")}
                className={
                  "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
                }
              >
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
                htmlFor="tool"
                className="text-grey-5 text-base mb-2 ml-1 pr-2"
              >
                Qual ferramenta de construção?
              </label>
              <select
                id="tool"
                defaultValue={handleClickCard.tool}
                required
                {...register("tool")}
                className={
                  "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
                }
              >
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
                defaultValue={handleClickCard.language}
                required
                disabled
                className={
                  "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
                }
                {...register("language", {
                  onChange: (e) => setSelectLang(e.target.value),
                })}
              >
                <option value="javascript" className="bg-bg-form">
                  JavaScript
                </option>
                <option value="typescript" className="bg-bg-form">
                  TypeScript
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
                    className={
                      editLibs?.includes(javascript)
                        ? "text-base font-light text-purple-2 cursor-pointer mw-14 p-2"
                        : "text-base font-light text-grey-5 cursor-pointer mw-14 p-2"
                    }
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
                    className={
                      editLibs?.includes(typescript)
                        ? "text-base font-light text-purple-2 cursor-pointer mw-14 p-2"
                        : "text-base font-light text-grey-5 cursor-pointer mw-14 p-2"
                    }
                    key={typescript}
                  >
                    <p onClick={() => handleLibsTs(typescript)}>{name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-row justify-center gap-8">
            <button className="bg-button-register p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300">
              Editar
            </button>
            <button
              onClick={() => closeModal()}
              className="bg-grey-1 p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300"
            >
              Fechar
            </button>
          </div>
        </form>
      </motion.div>
    </Modal>
  );
};
