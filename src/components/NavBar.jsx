import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            {/* <FaGithub /> */}
            <a
        href="https://github.com/Nwaforce"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600"
      >
        <FaGithub />
      </a>
            <FaLinkedin />
            <FaSquareTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}
export default NavBar
