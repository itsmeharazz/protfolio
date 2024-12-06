import { Element } from "react-scroll"
function WorkProcess() {
    const process = [
      {
        number: 1,
        titel: "Research",
        des: "This is how everything starts. Gathering information about the project to understand the problem space and identifying the pain points to outline the scope and better identify the requirements. Finding the problem. ",
      },
      {
        number: 2,
        titel: "Strategy",
        des: "Planning in the right direction after the identification of the problem space and stitching the right solution according to that is very crucial. Strategizing and exploring possible solutions. ",
      },
      {
        number: 3,
        titel: "Design",
        des: "After the end of this phase, you will have pixel perfect designs for your mobile/ web application. Stimulating interactions, robust design systems, I have done it all for my various freelance clients before. Design to awe your audience. ",
      },
      {
        number: 4,
        titel: "Development",
        des: "This is how everything starts. Gathering informatioAt this point, I will convert all pages UI designed files into HTML, CSS, JavaScript, Tailwind, React, depending on the complexity of the designs. Crafting an optimized clean code structured website development is my objective at this stage.n about the project to understand the problem space and identifying the pain points to outline the scope and better identify the requirements. Finding the problem.  ",
      },
      {
        number: 5,
        titel: "Testing",
        des: "Conducting usability tests to ensure the credibility of the solution designed according to the problem statements discovered. Aligning the target audiences feedback with the proposed solution for pragmatic & feedback oriented results. ",
      },
      {
        number: 6,
        titel: "Launch",
        des: "After confirmation a final approval, I will upload all files on the server to go live. This step includes SEO optimization for search engines plays a vital role because it ensures that the created website is visible to people and they can easily find it. ",
      },
    ];
  return (
    <Element>
      <div className='w-full bg-primary pb-8'>
        <div className='container text-center text-tertiary'>
          <h2 className='font-medium text-3xl mb-2 text-tertiary'>
            WORK PROCESS
          </h2>
          <p className='mb-8 text-tertiary'>
            Reach your business goals with excellent user experience
          </p>
          <div className='flex flex-wrap justify-around text-start '>
            {process.map((works, proces) => (
              <div
                className='w-[30%]  bg-secondary rounded-xl  shadow-2xl hover:border hover:border-tertiary p-4 mb-8'
                key={proces}>
                <div className='flex gap-3 items-center'>
                  <p className='text-[4em] font-semibold text-number'>
                    {works.number}
                  </p>
                  <h2 className='text-3xl font-semibold text-tertiary'>
                    {works.titel}
                  </h2>
                </div>
                <p className='text-tertiary'>{works.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default WorkProcess