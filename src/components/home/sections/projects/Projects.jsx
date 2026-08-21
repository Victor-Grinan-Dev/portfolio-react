import SectionWrapper from "../../../UIs/sectionWrapper/SectionWrapper";
import react from "../../../../assets/icons/react.png";
import tailwind from "../../../../assets/icons/tailwind.png";
import sass from "../../../../assets/icons/sass.png";
import vue from "../../../../assets/icons/vue.png";

const Projects = () => {
  return (
      <SectionWrapper>
        <article id="portfolio" className="project-gradient centered">

            <h2 id="project_title" className="title section-title">Projects:</h2>

            <h3 className="accordion" id='school_proj'>
              <a href="#project_title" className="portfolio-link">School Projects</a>
            </h3>
            <div id="schoolProjects" className='schoolProjects panel'>
            </div>

            <h3 className="accordion" id='Silly Games'> <a href="#project_title" className="portfolio-link"> Silly Games
                    </a>
            </h3>
            <div id="sillyGames" className='personalProjects panel'>
            </div>

            <h3 className="accordion" id='Personal'> <a href="#project_title" className="portfolio-link"> Personal
                    Projects
                    </a></h3>
            <div id="personalProjects" className='personalProjects panel'>
            </div>

            <h3 className="accordion" id='Freelancer jobs'> <a href="#project_title" className="portfolio-link"> Freelancer jobs
                    
                </a></h3>
            <div id="freelancer" className='freelancer panel'></div>

            <h3 className="accordion" id='Other Internet'> 
              <a href="#project_title" className="portfolio-link"> 
                Other Internet Projects
              </a>
              </h3>
            <div id="internet" className='panel '>  
                <div className='internet-filters'>

                    <span className='filter-item'>
                        <label htmlFor="react">All</label>
                        <input
                            type="radio"
                            className="tech_filter"
                            name="tech_filter"
                            value="all"
                            checked={true}
                          />
                    </span>
                    <span className='filter-item'>
                        <img src={react} alt="filter-img" className='tiny-img'></img>
                        <label htmlFor="react">React</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='react'></input>
                    </span>
                    <span className='filter-item'>
                        <img src={tailwind} alt="filter-img" className='tiny-img'></img>
                        <label htmlFor="tailwind">Tailwind</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='tailwind'></input>
                    </span>
                    <span className='filter-item'>
                        <img src={sass} alt="filter-img" className='tiny-img'></img>
                        <label htmlFor="scss">SCSS</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='sass'></input>
                    </span>
                    <span className='filter-item'>
                        <img src={vue} alt="filter-img" className='tiny-img'></img>
                        <label htmlFor="vue">Vue</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='vue'></input>
                    </span>

                </div>
                <div id="internetProjects" className='internet'>
                    {/* INTERNET PROJECTS  */}
                </div>
            </div>

        </article>
      </SectionWrapper>
  )
}

export default Projects

/**
        <article id="portfolio" className="bgLevel2">

            <h2 id="project_title" className="title section-title">Projects</h2>

            <h3 className="accordion" id='school_proj'> <a href="#project_title" className="portfolio-link">School Projects
                    ></a>
            </h3>
            <div id="schoolProjects" className='schoolProjects panel'>
            </div>

            <h3 className="accordion" id='Silly Games'> <a href="#project_title" className="portfolio-link"> Silly Games
                    ></a>
            </h3>
            <div id="sillyGames" className='personalProjects panel'>
            </div>

            <h3 className="accordion" id='Personal'> <a href="#project_title" className="portfolio-link"> Personal
                    Projects
                    ></a></h3>
            <div id="personalProjects" className='personalProjects panel'>
            </div>

            <h3 className="accordion" id='Freelancer jobs'> <a href="#project_title" className="portfolio-link"> Freelancer jobs
                    >
                </a></h3>
            <div id="freelancer" className='freelancer panel'></div>

            <h3 className="accordion" id='Other Internet'> <a href="#project_title" className="portfolio-link"> Other Internet
                    Projects > </a> </h3>
            <div id="internet" className='panel '>
                <div className='internet-filters'>

                    <span className='filter-item'>
                        <label htmlFor="react">All</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='all' checked>
                    </span>
                    <span className='filter-item'>
                        <img src="./icons/react.png" alt="filter-img" className='tiny-img'>
                        <label htmlFor="react">React</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='react'>
                    </span>
                    <span className='filter-item'>
                        <img src="./icons/tailwind.png" alt="filter-img" className='tiny-img'>
                        <label htmlFor="tailwind">Tailwind</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='tailwind'>
                    </span>
                    <span className='filter-item'>
                        <img src="./icons/sass.png" alt="filter-img" className='tiny-img'>
                        <label htmlFor="scss">SCSS</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='sass'>
                    </span>
                    <span className='filter-item'>
                        <img src="./icons/vue.png" alt="filter-img" className='tiny-img'>
                        <label htmlFor="vue">Vue</label>
                        <input type="radio" className='tech_filter' name='tech_filter' value='vue'>
                    </span>

                </div>
                <div id="internetProjects" className='internet'>
                    <!-- INTERNET PROJECTS -->
                </div>
            </div>

        </article>
 */