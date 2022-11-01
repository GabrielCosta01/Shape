import { AnimationNotLib } from "../components/AnimationNotLib/AnimationNotLib";
import { AnimationNotShapes } from "../components/AnimationNotShapes/AnimationNotShapes";
import { ContainerShapes } from "../components/ContainerShapes/ContainerShapes";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";

export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <ContainerShapes>
        <div className="mt-20">
          <h3 className="text-purple-1 text-lg font-semibold text-center">
            Shapes
          </h3>
          <p className="text-grey-1 text-center mt-4 font-medium">
            Você ainda não criou nenhum shape
          </p>
        </div>
        <AnimationNotShapes />
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
  );
};
