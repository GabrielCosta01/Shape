import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "./components/ToastsComp/ToastContainer";
import { ToastContainerCreate } from "./components/ToastsComp/ToastContainerCreate";

function App() {
  return (
    <>
      <ToastContainerCreate />
      <ToastContainer />
      <RoutesMain />
    </>
  );
}

export default App;