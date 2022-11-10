import { ToastContainer } from "./components/ToastContainer/ToastContainer";
import { ToastContainerCreate } from "./components/ToastContainer/ToastContainerCreate";
import { ToastContainerEdit } from "./components/ToastContainer/ToastContainerEdit";
import RoutesMain from "./routes/RoutesMain";

function App() {
  return (
    <>
      <ToastContainerCreate />
      <ToastContainer />
      <ToastContainerEdit />
      <RoutesMain />
    </>
  );
}

export default App;
