import SectionWrapper from "../../UIs/sectionWrapper/SectionWrapper";
import hbc from '../../../assets/icons/hbc.png';
import taitotalo from '../../../assets/icons/taitotalo.jpeg';
import metropolia from '../../../assets/icons/metropolia.jpeg';


const HeroBanner = () => {
  return (
    <SectionWrapper sectionId="heroBanner"  background="">

            <div className='bannerContent'>
                <div id="intro" className="intro">
                    <h4 id="hi" className="hand-write hi">Hi, I'm</h4>
                    <h2 id="my-name" className="hand-write my-name">
                        <div id="victor" className="hand-write victor">Victor</div>
                        <div id="grinan" className="hand-write grinan"> Griñán</div>
                    </h2>
                    <h4 id="developer" className="hand-write"> an <span>IT specialist</span> and <span>web developer</span></h4>
                </div>
                        
                <div id="welcome" className="welcome">
                    <h4 id="welcome-to" className="flying1 hand-write welcome-to">Welcome to </h4>
                    <h1 id='portfolio-word' className="flying2 hand-write portfolio-word">"My 
                        <span className='portfolioWord'>
                            Portfolio
                        </span>"
                    </h1>
                 </div>

                 <div className="school-icons carruselle">
                    <div className="track">
                        <img src={hbc} alt="HBC" />
                        <img src={taitotalo} alt="Taitotalo" />
                        <img src={metropolia} alt="Metropolia" />
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