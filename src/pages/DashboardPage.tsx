import { useEffect } from "react";
import { AnimationLoading } from "../components/AnimationLoading/AnimationLoading";
import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";
import { listShapesStore } from "../stores/listShapesStore";
import { loginUserStore } from "../stores/loginUserStore";

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
              shapes.map((element) => {
                return (
                  <div key={element.id}>
                    <h2>{element.command}</h2>
                    <p>{element.libs}</p>
                    <div>
                      <button>Detalhes</button>
                      <button>Deletar</button>
                    </div>
                  </div>
                );
              })
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
