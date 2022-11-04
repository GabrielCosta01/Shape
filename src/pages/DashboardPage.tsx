import { useEffect } from "react";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { listShapesStore } from "../stores/listShapesStore";
import { createShapeContainer } from "../stores/createShapeStore";
import  Modal  from "react-modal";
import { useState } from "react";

export const DashboardPage = () => {
  const [ isOpenModal ,  isCloseModal] = createShapeContainer((state) => [
    state.isOpenModal,
    state.isCloseModal
])

  const customStyles = {
    overlay: {backgroundColor: "rgba(69, 67, 67, 0.6)"},
    content: {
      width: '65vw',
      height: '70vh',
      backgroundColor: '#09061E',
      display: 'flex',
      alignItems: 'center',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  const [ isModal, setIsModal ] = useState(false);
  const toglleModal = () => {!setIsModal}

  const [isLoading, shapes, list] = listShapesStore((state) => [
    state.isLoading,
    state.shapes,
    state.list,
  ]);

  useEffect(() => {
    list();
    console.log(shapes);
    console.log(isLoading);
  }, []);

  return (
    <>
      <HeaderDashboard />
      {isLoading ? (
        <AnimationLoading />
      ) : (
        <>
          <ContainerShapes>
            {shapes.length ? (
              shapes.map((element) => (
                // FAÇA A LOGICA PRA RENDERIZAR OS CARDS AQUI
                <h1 key={element.id} className="text-purple-1">
                  TENHO SHAPES
                </h1>
              ))
            ) : (
              <>
                <div className="mt-20">
                  <h3 className="text-purple-1 text-lg font-semibold text-center">
                    Shapes
                  </h3>
                  <p className="text-grey-1 text-center mt-4 font-medium">
                    Você ainda não criou nenhum shape
                  </p>
                </div>
                <AnimationNotShapes />
              </>
            )}
            <button onClick={toglleModal}></button>


            <Modal isOpen  style={customStyles}>
              <main className="w-full h-full flex flex-col justify-center gap-10 items-center">

              <h1 className="text-white text-2xl		">Crie seu shape</h1>

              <section className="w-full flex justify-center flex-wrap gap-3">
                
                <div className="w-5/12 gap-2 flex flex-col	items-center text-center">
                  <label className="text-white w-11/12">Qual o nome do comando?</label>
                  <input className="w-11/12 p-2 border-2  border-purple-1  rounded bg-inherit" placeholder="Nome do comando" type="text"/>
                  <p className="text-red-900"></p>
                </div>

                <div className="w-5/12 gap-2 flex flex-col	items-center ">
                  
                  <label className="text-white">Qual o gerenciador de pacotes?</label>
                  
                  <select className="p-2 rounded text-white border-2 border-purple-1 w-11/12  bg-footer-landing-2">
                    <option value="" disabled selected>NPM ou Yarn</option>
                    <option value="npm">NPM</option>
                    <option value="yarn">YARN</option>
                  </select>

                </div>

                <div className="w-5/12 gap-2 flex flex-col	items-center ">
                  <label className="text-white">Qual ferramenta de construção?</label>
                  <select className="p-2 rounded text-white border-2 border-purple-1 w-11/12  bg-footer-landing-2" placeholder="">
                    <option disabled selected>Create React App ou Vite</option>
                    <option value="create react-app">Create React App</option>
                    <option value="vite">Vite</option>
                  </select>
                </div>

                <div className="w-5/12 gap-2 flex flex-col	items-center ">
                  <label className="text-white">Qual linguagem de programação?</label>
                  <select className="p-2 rounded text-white border-2 border-purple-1 w-11/12  bg-footer-landing-2">
                    <option disabled selected>Javascript ou Typescript</option>
                    <option value="javascript">Javascript</option>
                    <option value="typescript">Typescript</option>
                  </select>
                </div>

              </section>

              <h4 className="text-white">Quais bibliotecas você deseja?</h4>

              <section className="w-full flex justify-center flex-wrap">
                <ul className="w-full flex justify-center">

                </ul>
              </section>

              <button className="font-medium bg-gradient-to-r from-button-gradient-2 to-button-gradient-1 shadow-md hover:ease-in duration-200 hover:shadow-purple-1/50 px-3 py-1 rounded-lg flex items-center">Criar Shape</button>
            
              </main>
            </Modal>




          </ContainerShapes>
          <ContainerShapes>
            <div className="mt-28 border-t-2 border-solid border-gray-900 w-full ">
              <h3 className="text-purple-1 text-lg font-semibold text-center mt-6 ">
                Suas bibliotecas mais utilizadas
              </h3>
            </div>
            <AnimationNotLib />
          </ContainerShapes>
        </>
      )}
    </>
  );
};


