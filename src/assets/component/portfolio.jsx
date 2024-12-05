import { Element } from "react-scroll"

function Portfolio() {
  return (
    <Element name='project-section'>
      <div className='w-full bg--[#E9DED3] py-8'>
        <div className='container text-center'>
          <h2>Recent Work</h2>
          <p>My Portfolio </p>
          <div className="flex">
            <div className="work-nev">
                <p>All</p>
            </div>
            <div className="work-nev">
                <p>All</p>
            </div>
            <div className="work-nev">
                <p>All</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Portfolio