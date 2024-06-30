import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-blue-600 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DRF Auth
        </Link>
        <MainNav />
      </div>
    </div>
  );
};

export default Header;
