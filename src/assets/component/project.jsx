import cssproject from "../image/CSS-Project.png";
import cssproject2 from "../image/css-Project-2.jpg";
import cssproject3 from "../image/css-3.png";
import cssproject4 from "../image/css-4.jpg";


function  Project() {
    const css = [
      {
        img: cssproject,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
      },
      {
        img: cssproject2,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
        info:[
"css","react",
        ],

      },
      {
        img: cssproject3,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
      },
      {
        img: cssproject4,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
      },
      {
        img: cssproject4,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
      },
      {
        img: cssproject4,
        live: "Live view",
        details: "Projects Details",
        github: "Github link",
      },
    ];
  return (
    <div className='container flex flex-wrap justify-between items-center '>
      {css.slice(0, 4).map((project, view) => (
        <div
          className='viewProject w-[100%] h-[22em] lg:h-[30em] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] xl:h-[30em] 2xl:h-[30em] rounded-[2em] shadow-sm shadow-[#0B1536] mb-8 overflow-hidden relative'
          key={view}>
          <img src={project.img} alt='Recent Work' />
          <div className='code w-full h-[5em] flex justify-around items-center bg-primary absolute bottom-0 left-0 invisible transition-all'>
            <p className='cursor-pointer text-[0.6em] md:text-[0.6em] lg:text-xl xl:text-xl 2xl:text-xl text-[#0b1536] hover:text-[#338189]'>
              {project.live}
            </p>
            <p className='cursor-pointer text-[0.6em] md:text-[0.6em] lg:text-xl xl:text-xl 2xl:text-xl text-[#0b1536] hover:text-[#338189]'>
              {project.details}
            </p>
            <p className='cursor-pointer text-[0.6em] md:text-[0.6em] lg:text-xl xl:text-xl 2xl:text-xl text-[#0b1536] hover:text-[#338189]'>
              {project.github}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default  Project