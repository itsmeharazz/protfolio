import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-scroll";
function AddSocal() {
  const socal=[
   { lable:FaFacebookF,
    href:"",
  },
   { lable:FaInstagram,
    href:"",
  },
   { lable:FaLinkedinIn,
    href:"",
  },
  ]
  return(
   <div className="">
    {socal.map((socallink)=>(
      <Link
      className="cursor-pointer transition hover:text-[#E9E9E9]"
      key={socallink.href}
      to={socallink.href}
      >
      {socallink.lable}
      </Link>
    ))}
   </div>
  )
}

export default AddSocal