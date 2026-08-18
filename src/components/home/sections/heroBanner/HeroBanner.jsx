import SectionWrapper from "../../../UIs/sectionWrapper/SectionWrapper";
import hbc from '../../../../assets/icons/hbc.png';
import taitotalo from '../../../../assets/icons/taitotalo.jpeg';
import sda from '../../../../assets/icons/sda.png';
import meLogo from '../../../../assets/icons/meLogo.png';


const HeroBanner = () => {
  return (
    <SectionWrapper sectionId="heroBanner" className="centered bgLevel0">

            <div className="bgLevel0 bannerContent">
                <div className="text-intro">
                    <div id="intro" className="intro">
                        <h4 id="hi" className="hand-write hi">Hi, I'm</h4>
                        <h1 id="my-name" className="hand-write my-name">
                            <div id="victor" className="hand-write victor">Victor</div>
                            <div id="grinan" className="hand-write grinan"> Griñán</div>
                        </h1>
                        <h4 id="developer" className="hand-write"> a <span>web developer</span> and <span>IT specialist</span></h4>
                    </div>
                            
                    <div id="welcome" className="welcome">
                        <h4 id="welcome-to" className="flying1 hand-write welcome-to">Welcome to </h4>
                        <h1 id='portfolio-word' className="flying2 hand-write portfolio-word">"My 
                            <span className='portfolioWord'>
                                Portfolio
                            </span>"
                        </h1>
                    </div>
                </div>

                 <div className="me-logo">
                    <img src={meLogo} alt="melogo" />
                 </div>

                 <div className="school-icons">
                    <div className="track">
                        <a href="https://sdaproject.se/" target="_blank" rel="noopener noreferrer"><img src={sda} alt="SDA" className="school-icon SDA"/></a>
                        <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/" target="_blank" rel="noopener noreferrer"><img src={hbc} alt="HBC" className="school-icon HBC"/></a>
                        <a href="https://www.taitotalo.fi/" target="_blank" rel="noopener noreferrer"><img src={taitotalo} alt="Taitotalo" className="school-icon taitotalo"/></a>
                        {/* duplicate for seamless loop */}
                        {/* <img src={hbc} alt="" aria-hidden="true" />
                        <img src={taitotalo} alt="" aria-hidden="true" />
                        <img src={metropolia} alt="" aria-hidden="true" /> */}
                    </div>
                 </div>
 
                 
                
            </div>
    </SectionWrapper>
    
  )
}

export default HeroBanner