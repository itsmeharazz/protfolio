import { Navbar } from "../navbar/navbar";

function Header() {
  return (
    <section className='w-full bg-[#E9DED3] py-5 drop-shadow-md'>
      <div className='container flex justify-between items-center mx-auto '>
        <h2 className='font-medium text-[#0B1536]'>Meharaz</h2>
        <Navbar />
      </div>
    </section>
  );
}

export default Header;
