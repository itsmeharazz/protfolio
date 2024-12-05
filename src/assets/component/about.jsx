import about from "../image/8313.jpg";
import { Element } from "react-scroll";
function About() {
  return (
    <Element name='about-section'>
      <div className='w-full bg-[#E9DED3]'>
        <div className='container mx-auto text-center pt-10 text-[#0B1536]'>
          <h2 className='font-medium text-3xl mb-2'>About</h2>
          <p> my Intro</p>
          <div className='flex gap-20 items-center mt-10 '>
            <div className='intro-left'>
              <img src={about} alt={about} className='w-[30em] aspect-auto' />
            </div>
            <div className='intro-right text-left text-[#0B1536]'>
              <div className='flex gap-5 align-middle mb-8'>
                <div className='project w-[30%] bg-[#E9DED3] rounded-xl hover:bg-[#E9E9E9] drop-shadow-md shadow-[#0B1536] text-center py-8'>
                  <p>
                    Completed <br />
                    10+ Projects
                  </p>
                </div>
                <div className='project w-[30%] bg-[#E9DED3] rounded-xl hover:bg-[#E9E9E9] drop-shadow-md shadow-[#0B1536] text-center py-8'>
                  <p>
                    Support <br />
                    24/7
                  </p>
                </div>
              </div>
              <p className='text-left text-[#0B1536]'>
                I am a front-end web developer skilled in HTML5, CSS3,
                Bootstrap, Tailwind, JavaScript and React. I specialize in
                building robust web applications design, and dynamic websites,
                offering end-to-end development solutions across multiple
                platforms.
              </p>
              <button className='bg-[#0B1536] text-[#e9e9e9] rounded-3xl px-8 py-3 hover:bg-[#E9E9E9] hover:text-[#0B1536] hover:drop-shadow-md hover:shadow-[#0B1536] transition-all mt-8'>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
