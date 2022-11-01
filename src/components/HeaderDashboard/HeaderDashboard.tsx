import logo from "../../assets/logo.png";
import userImg from "../../assets/user-image.jpg";

export const HeaderDashboard = () => {
  return (
    <>
      <header className="flex h-20 justify-around gap-40 items-center border-b-2 border-solid border-gray-900">
        <img src={logo} alt="shape-logo" className=" w-21 h-7" />
        <img
          src={userImg}
          alt="usuário-foto"
          className=" w-8 h-8 rounded-full border-2 border-solid border-button-gradient-1 cursor-pointer"
        />
      </header>
    </>
  );
};
