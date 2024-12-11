import { Element } from "react-scroll"
import Project from "./project";

function Portfolio() {
  
  const tecnology=[
    {
      lable:'All',
    },
    {
      lable:'CSS',
    },
    {
      lable:'React',
    },
    {
      lable:'Laravel',
    },
  ];
  return (
    <Element name='project-section'>
      <div className='w-full bg-[#E9E9E9] py-8'>
        <div className='container text-center mx-auto '>
          <h2 className='font-medium text-3xl mb-2'>Recent Work</h2>
          <p className='mb-8'>My Portfolio </p>
          <div className=' mx-auto flex justify-between items-center gap-10  mb-20'>
            {tecnology.map((tecproject, projects) => (
              <div
                className='work-nev w-[22%] lg:w-[18%] xl:w-[18%] 2xl:w-[18%] mx-auto p-2 text-center bg-[#E9DED3] hover:bg-[#0B1536] hover:text-[#E9E9E9] transition-all rounded-xl  shadow-sm shadow-[#0B1536] cursor-pointer'
                key={projects}>
                <p>{tecproject.lable}</p>
              </div>
            ))}
          </div>
          <Project />
        </div>
      </div>
    </Element>
  );
}

export default Portfolio