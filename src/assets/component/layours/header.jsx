import {  useState } from "react";
import { Navbar } from "../navbar/navbar";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import Hero from "../hero";

function Header() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  }

  return (
    <section className={`dark:text-secondary ${theme && "dark"}`}>
      <div className=' w-full py-5 drop-shadow-md bg-primary  dark:bg-tertiary dark:shadow-secondary'>
        <div className='container flex justify-between items-center mx-auto '>
          <h2 className='font-medium text-[#0B1536] dark:text-secondary'>
            Meharaz
          </h2>
          <div className='flex gap-8 items-center'>
            <Navbar />
            <button onClick={() => toggleTheme()}>
              {theme ? (
                <FaSun className='text-quaternary' />
              ) : (
                <FaMoon className='text-tertiary' />
              )}
            </button>
          </div>
        </div>
      </div>
      <Hero/>
    </section>
  );
}

export default Header;
