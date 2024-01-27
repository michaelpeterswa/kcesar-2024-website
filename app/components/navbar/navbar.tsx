import Dropdown from "./dropdown";
import Links from "./links";
import EndButtons from "./end-buttons";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 text-slate-50">
      <div className="navbar-start">
        <Dropdown />
        <Logo />
      </div>
      <Links />
      <div className="navbar-end">
        <EndButtons />
      </div>
    </div>
  );
}
