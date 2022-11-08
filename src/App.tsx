import { ToastContainer } from "./components/ToastContainer/ToastContainer";
import { ToastContainerCreate } from "./components/ToastContainer/ToastContainerCreate";
import RoutesMain from "./routes/RoutesMain";

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
