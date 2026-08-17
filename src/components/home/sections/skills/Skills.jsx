import SectionWrapper from "../../../UIs/sectionWrapper/SectionWrapper";
import technicalSupport from "../../../../assets/icons/ui/technical-support.png"
import onlineSupport from "../../../../assets/icons/ui/online-support.png"
import server from "../../../.././assets/icons/ui/server.png"
import algorithm from "../../../../assets/icons/ui/algorithm.png"
import ui from "../../../../assets/icons/ui/ui.png"
import consulting from "../../../../assets/icons/ui/consulting.png"
import languages from "../../../../assets/icons/ui/languages.png"
import positiveVibes from "../../../../assets/icons/ui/positive-vibes.png"

const Skills = () => {
  return (
    <SectionWrapper >   
        <article id="skillsBoxes" className="bgLevel3 skillsBoxes">

            <div id="skillArticle">
                <h2 id="skills" className="section-title"> Skills </h2>
            
                <p className='ratingLegend skillsLegend invisible'> 5x⭐ = "God like"<br /> 4x⭐ = "Senior level"<br /> 3x⭐ =
                    "Developer Level" <br />2x⭐ = "junior Level"<br /> 1x⭐ = "I have play with it" <br /> 0x⭐ = "Haven't
                    seen it yet"</p>
                <div className='skillBtns'>
                    <button className='toggleTextSkills appButton' id="skillModeBtn"> Toggle skills</button>
                    <button className='showSkillsLegend appButton invisible'>Show legend</button> 
                    <button className='showMoreSkills appButton invisible'>Show Weakest</button>
                </div>
                
                <div id="skillsText" className="">
                    <div className="txtSkills-section">
                        
                        <div className="txtSkills-subsection">

                            <h4 className="txtSkills-section-heading">IT-Support, Server & Cloud Management </h4>

                            <div className="txtSkills-subsection-content">
  
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={technicalSupport} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>Diagnosing and resolving hardware, software and networking IT issues</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={onlineSupport} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>Remote tools like TeamViewer, and Remote Desktop.</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={server} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>User management, cybersecurity, and  Windows Server administration.</p>
                                </div>

                            </div>

                        </div>

                        <div className="txtSkills-subsection">
                            <h4 className="txtSkills-section-heading">Coding, Scripting & Web/Software Developing </h4>

                            <div className="txtSkills-subsection-content">
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={algorithm} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>Strong understanding of algorithms</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={ui} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>Perfect understanding of the importance of UI/UX.</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={consulting} alt="skill-icon" classname="mid-img"/>
                                    </div>
                                    <p>...</p>
                                </div> 
                            </div>

                        </div>

                        <div className="txtSkills-subsection">

                            <h4 className="txtSkills-section-heading">Customer Service & Crisis Handling</h4>

                            <div className="txtSkills-subsection-content">
  
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={languages} alt="skill icon" classname="mid-img"/>
                                    </div>
                                    <p>Strong customer service abilities</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={positiveVibes} alt="skill icon" classname="mid-img"/>
                                    </div>
                                    <p>Clear in Spanish, Inglish and finnish</p>
                                </div>
                                <div className="skill-icon-card">
                                    <div className="icon-container">
                                        <img src={technicalSupport} alt="skill icon" classname="mid-img"/>
                                    </div>
                                    <p>I carry a steadfast and upbeat vibe</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div id="allSkills" className="invisible">

                    <div className="skillGroup primarySkillGroup" id='itSupport'>
                        <h3 className="skillGroupTitle">IT-Support:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='basicFrontend'>
                        <h3 className="skillGroupTitle">Basic Frontend:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='templating'>
                        <h3 className="skillGroupTitle">Templating Languages</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='frameworks'>
                        <h3 className="skillGroupTitle">JS Frameworks:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>

                    <div className="skillGroup primarySkillGroup" id='advanceFrontend'>
                        <h3 className="skillGroupTitle">Advance JS:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='advanceFrontend2'>
                        <h3 className="skillGroupTitle">CSS Frameworks:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='backendNode'>
                        <h3 className="skillGroupTitle">Backend Node:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup primarySkillGroup" id='backendPython'>
                        <h3 className="skillGroupTitle">Backend Python:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup secundarySkillGroup " id='backendPHP'>
                        <h3 className="skillGroupTitle">Backend PHP:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup secundarySkillGroup " id='cloudService'>
                        <h3 className="skillGroupTitle">Cloud Service:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>

                    <div className="skillGroup secundarySkillGroup " id='backendJava'>
                        <h3 className="skillGroupTitle">Backend Java:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div> 

                    <div className="skillGroup secundarySkillGroup " id='embedSystems'>
                        <h3 className="skillGroupTitle">Embed Systems:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>

                    <div className="skillGroup secundarySkillGroup " id='cms'>
                        <h3 className="skillGroupTitle">CMS's:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>
                    <div className="skillGroup secundarySkillGroup " id='cicd'>
                        <h3 className="skillGroupTitle">CI / CD:</h3>
                        <div className="subSkills"></div>
                        <div className="overall">😎</div>
                    </div>

                    <div className="skillGroup primarySkillGroup" id='otherSkills'>
                        <h3 className="skillGroupTitle">Others:</h3>
                        <div className="subSkills"></div>
                        <div>😎</div>
                    </div>
                </div>allSkill end
                
            </div>
        </article>
    </SectionWrapper>
    
  )
}

export default Skills;