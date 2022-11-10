import Modal from "react-modal";
import { createShapeStore } from "../../stores/createShapeStore";
import { toastCreateShapeStore } from "../../stores/toastCreateShapeStore";
import { librariesContainer } from "../../stores/libsData";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { listShapesStore } from "../../stores/listShapesStore";
import { motion } from "framer-motion";

type IDateShapes = {
  command: string;
  language: string;
  libs: string[];
  package: string;
  tool: string;
  watch?: any;
  projectName: string;
};

export const CreateShapeModal = () => {
  const [selectLang, setSelectLang] = useState();
  const [selectLibs, setSelectLibs] = useState<string[]>([]);
  const [generateCommand, setGenerateCommand] = useState("");
  const [shapeData, setShapeData] = useState(null);

  const [isModal, isCloseModal] = createShapeStore((state) => [
    state.isModal,
    state.isCloseModal,
  ]);

  const [listLibrarie] = librariesContainer((state) => [state.listLibraries]);
  const [toastCreate] = toastCreateShapeStore((state) => [state.toastCreate]);
  const [setShapes, shapes] = listShapesStore((state) => [
    state.setShapes,
    state.shapes,
  ]);

  const customStyles = {
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
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
      outline: "none",
    },
  };

  const { watch, register, handleSubmit, reset } = useForm<IDateShapes>();

  const handleLibs = (javascript: string) => {
    const select = selectLibs.includes(javascript);
    if (!select) {
      setSelectLibs([...selectLibs, javascript]);
    } else {
      const newLibRemove = selectLibs.filter((lib) => lib !== javascript);
      setSelectLibs(newLibRemove);
    }
  };

  const treatCode = (data: IDateShapes) => {
    const treatLibs = data.libs.join(" ");
    const treatNameComand = data.command.replaceAll(" ", "").trim();
    const treatNameProject = data.projectName.replaceAll(" ", "").trim();

    const comandoYarnViteJS = `alias ${treatNameComand}="${data.package} create vite ${treatNameProject} --template react && cd ${treatNameProject} && ${data.package} && ${data.package} add ${treatLibs} && code . && ${data.package} dev"`;
    const comandoYarnViteTS = `alias ${treatNameComand}="${data.package} create vite ${treatNameProject} --template react-ts && cd ${treatNameProject} && ${data.package} && ${data.package} add ${treatLibs} && code . && ${data.package} dev"`;

    const comandoNPMViteJS = `alias ${treatNameComand}="${data.package} create vite@latest ${treatNameProject} -- --template react && cd ${treatNameProject} && ${data.package} install && ${data.package} i ${treatLibs} && code . && ${data.package} run dev"`;
    const comandoNPMViteTS = `alias ${treatNameComand}="${data.package} create vite@latest ${treatNameProject} -- --template react-ts && cd ${treatNameProject} && ${data.package} install && ${data.package} i ${treatLibs} && code . && ${data.package} run dev"`;

    const comandoYarnCRAJS = `alias ${treatNameComand}="${data.package} create react-app ${treatNameProject} && cd ${treatNameProject} && ${data.package} && ${data.package} add ${treatLibs} && code . && ${data.package} start"`;
    const comandoYarnCRATS = `alias ${treatNameComand}="${data.package} create react-app ${treatNameProject} --template typescript && cd ${treatNameProject} && ${data.package} && ${data.package} add ${treatLibs} && code . && ${data.package} start"`;

    const comandoNPMCRAJS = `alias ${treatNameComand}="${data.package} init react-app ${treatNameProject} && cd ${treatNameProject} && ${data.package} run build && ${data.package} i ${treatLibs} && code . && ${data.package} start"`;
    const comandoNPMCRATS = `alias ${treatNameComand}="${data.package} init react-app ${treatNameProject} --template typescript && cd ${treatNameProject} && ${data.package} run build && ${data.package} i ${treatLibs} && code . && ${data.package} start"`;

    if (
      data.package === "yarn" &&
      data.tool === "create-react-app" &&
      data.language === "javascript"
    ) {
      setGenerateCommand(comandoYarnCRAJS.replaceAll(",", ""));
    } else if (
      data.package === "yarn" &&
      data.tool === "create-react-app" &&
      data.language === "typescript"
    ) {
      setGenerateCommand(comandoYarnCRATS.replaceAll(",", ""));
    } else if (
      data.package === "yarn" &&
      data.tool === "vite" &&
      data.language === "javascript"
    ) {
      setGenerateCommand(comandoYarnViteJS.replaceAll(",", ""));
    } else if (
      data.package === "yarn" &&
      data.tool === "vite" &&
      data.language === "typescript"
    ) {
      setGenerateCommand(comandoYarnViteTS.replaceAll(",", ""));
    } else if (
      data.package === "npm" &&
      data.tool === "vite" &&
      data.language === "javascript"
    ) {
      setGenerateCommand(comandoNPMViteJS.replaceAll(",", ""));
    } else if (
      data.package === "npm" &&
      data.tool === "vite" &&
      data.language === "typescript"
    ) {
      setGenerateCommand(comandoNPMViteTS.replaceAll(",", ""));
    } else if (
      data.package === "npm" &&
      data.tool === "create-react-app" &&
      data.language === "javascript"
    ) {
      setGenerateCommand(comandoNPMCRAJS.replaceAll(",", ""));
    } else if (
      data.package === "npm" &&
      data.tool === "create-react-app" &&
      data.language === "typescript"
    ) {
      setGenerateCommand(comandoNPMCRATS.replaceAll(",", ""));
    }
  };

  const createShape = async () => {
    const data = watch({
      ...register("libs", { value: selectLibs }),
    } as any);

    treatCode(data);
    setShapeData(data);
  };

  useEffect(() => {
    handleRequest(shapeData);
    reset();
    setSelectLibs([]);
  }, [shapeData]);

  const handleRequest = async (data: any) => {
    try {
      if (shapeData) {
        const userId = localStorage.getItem("@shape:userId");
        const { data: shape } = await api.post(
          `/600/users/${userId}/shapes`,
          data
        );

        toastCreate(generateCommand);
        isCloseModal();
        createdFilteredShapes(shape);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createdFilteredShapes = (shape: IDateShapes) => {
    setShapes([...shapes, shape]);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <form
          className="flex flex-col  p-8 gap-5 bg-bg-form rounded-md w-full"
          onSubmit={handleSubmit(createShape)}
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
                className="text-grey-5 text-base mb-2 ml-1 pr-20"
              >
                Qual o nome do shape?
              </label>
              <input
                type="text"
                id="command"
                required
                className="text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-purple-1 hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
                placeholder="Shape"
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
                Qual ferramenta de construção?
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

          <div className="flex items-center justify-center flex-row gap-20 mt-8">
            <div className="flex flex-col">
              <label
                htmlFor="projectName"
                className="text-grey-5 text-base mb-2 ml-1"
              >
                Qual o nome do seu projeto?
              </label>
              <input
                type="text"
                id="projectName"
                required
                className="text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-purple-1 hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
                placeholder="Nome do projeto"
                {...register("projectName")}
              />
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
                    key={javascript}
                    className={
                      selectLibs.includes(javascript)
                        ? "text-base font-light text-purple-2 cursor-pointer mw-14 p-2"
                        : "text-base text-grey-5 font-light cursor-pointer mw-14 p-2"
                    }
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
                      selectLibs.includes(typescript)
                        ? "text-base font-light text-purple-2 cursor-pointer mw-14 p-2"
                        : "text-base font-light text-grey-5 cursor-pointer mw-14 p-2"
                    }
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
              className="bg-grey-1 p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-btn-del/100 duration-300"
            >
              Fechar
            </button>
          </div>
        </form>
      </motion.div>
    </Modal>
  );
};
