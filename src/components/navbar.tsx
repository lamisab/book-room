import Logo from "src/assets/Logo/g10.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-screen absolute justify-center mobile:hidden">
      <div className="justify-center mobile:flex mx-auto">
        <img src={Logo} alt="logo" className="size-56 mobile:size-36" />
      </div>
    </nav>
  );
};

export default Navbar;
