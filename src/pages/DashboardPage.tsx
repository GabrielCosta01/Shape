import { useEffect } from "react";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { listShapesStore } from "../stores/listShapesStore";
import { IoMdAddCircleOutline } from "react-icons/io";
import { EditShapeModal } from "../components/Modals/EditShapeModal";
import { createShapeContainer } from "../stores/createShapeStore";
import { CreateShapeModal } from "../components/Modals/CreateShape";
import { CardShapes } from "../components/CardShapes/CardShapes";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";

export const DashboardPage = () => {
  const [isOpenModal, isCloseModal] = createShapeContainer((state) => [
    state.isOpenModal,
    state.isCloseModal,
  ]);

  const [isLoading, shapes, list] = listShapesStore((state) => [
    state.isLoading,
    state.shapes,
    state.list,
  ]);

  useEffect(() => {
    list();
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
              <AnimateSharedLayout>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  className="mt-20 p-2 grid grid-cols-3 grid-flow-row gap-20 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md "
                >
                  {shapes.map((element) => (
                    <CardShapes
                      key={element.id}
                      shape={element}
                      layoutId={element.id}
                    />
                  ))}
                </motion.ul>
              </AnimateSharedLayout>
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
          </ContainerShapes>
          <ContainerShapes>
            <div className="mt-28 border-t-2 border-solid border-gray-900 w-full absolute bottom-0">
              <h3 className="text-purple-1 text-lg font-semibold text-center mt-6 ">
                Suas bibliotecas mais utilizadas
              </h3>
              <AnimationNotLib />
            </div>
          </ContainerShapes>
        </>
      )}
      <IoMdAddCircleOutline
        onClick={isOpenModal}
        className="text-purple-1 hover:text-grey-3 duration-300 text-5xl absolute right-0 bottom-0 m-5 cursor-pointer "
      />
      <CreateShapeModal />
      <EditShapeModal />
    </>
  );
};
