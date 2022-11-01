import { useEffect } from "react";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { listShapesStore } from "../stores/listShapesStore";

export const DashboardPage = () => {
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
