import { Link } from "react-scroll";
import { navlink } from "./nav";
export const Navbar = () => {
  return (
    <ul className='flex items-center gap-8'>
      {navlink.map((link) => (
        <Link
          activeClass='text-[#0B1536]'
          className='text-[0B1536] hover:text-[#0b1536a8] transition-all cursor-pointer'
          key={link.href}
          to={link.href}
          smooth>
          {link.lable}
        </Link>
      ))}
    </ul>
  );
};
