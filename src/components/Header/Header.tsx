import logo from "../../assets/logo.png";
import userImg from "../../assets/user-image.jpg";

export const Header = () => {
  return (
    <header className="flex bg-cyan-500">
      <img src={logo} alt="shape-logo" />
      <img src={userImg} alt="user-image" />
    </header>
  );
};
