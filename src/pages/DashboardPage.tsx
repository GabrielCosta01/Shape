import { useEffect } from "react";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { listShapesStore } from "../stores/listShapesStore";
import { loginUserStore } from "../stores/loginUserStore";
import { IoMdAddCircleOutline } from "react-icons/io";
import { EditShapeModal } from "../components/Modals/EditShapeModal";
import { CardShapes } from "../components/CardShapes/CardShapes";

export const DashboardPage = () => {
  const [isLoading, shapes, list] = listShapesStore((state) => [
    state.isLoading,
    state.shapes,
    state.list,
  ]);

  const [user] = loginUserStore((state) => [state.user]);

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
              <ul className="mt-20 p-2 grid grid-cols-3 grid-flow-row gap-20 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md ">
                {shapes.map((element) => (
                  <CardShapes key={element.id} shape={element} />
                ))}
              </ul>
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
      <IoMdAddCircleOutline className="text-purple-1 hover:text-grey-3 duration-300 text-5xl absolute right-0 bottom-0 m-5 cursor-pointer " />
      <EditShapeModal />
    </>
  );
};
