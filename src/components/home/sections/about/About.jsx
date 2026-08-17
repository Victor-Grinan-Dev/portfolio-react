import SectionWrapper from "../../../UIs/sectionWrapper/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
       <div id="about" className="about"> 
                    <article id="aboutArticle" class="bgLevel1">
                    
            <h2 class="title"> About me </h2>

            <p class="about">
                <br />
                <br />
                I am a computers <b class="keyword">enthusiast</b>.
                <br />
                I started learning coding independently in 2019, and in June 2023 I graduated in Information and
                communication technologies from <a class="about-link"
                    href="https://en.bc.fi/qualifications/full-stack-web-developer-program/" target="blank">Helsinki
                    Business College (HBC)</a>, where I gained a solid understanding of programming, algorithms, and
                software design principles.
                <br />
                My background is in pedagogy and team leading. This has taught me to see the value of
                good <b class="keyword">group dynamics</b>. In my previous workplaces, I have quickly advanced to responsible
                positions. I am particularly good at problem solving and <b class="keyword">customer service</b>. My hobbies have taught me <b class="keyword">patience</b>
                and <b class="keyword">perseverance</b>. Now I'm studying to be <b class="keyword">IT-support</b> staff at <a class="about-link" href="https://www.taitotalo.fi/" target="blank">Taitotalo</a>.
                <br />
                "I am the missing link between IT and the user."
                
            </p>
            <br />
            <div class='cvBtns'>
                <p>
                    CV in PDF & Video:
                </p>
                <div>
                    <a href="./documents/cv_image.png" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </a>
                    <a href="./documents/CV_victor_grinan_2025_fi_en.pdf" target="_blank" download='CV_victor_grinan_2025_fi_en'>
                        <button class='appButton'>
                            <span class="material-symbols-outlined">download</span>
                        </button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=FXtfp2-87D8" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                play_circle
                            </span>
                        </button>
                    </a>
                    
                </div>
                <br />
                <p>
                    Articles:
                </p>
                <div>
                    <a href="https://www.hs.fi/kaupunki/art-2000008121681.html" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://www.hs.fi/ulkomaat/art-2000008119341.html" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://tutka.pro/yhteiskunta/totuus-turistiverhon-takana/" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://librodeinsidencias.blogspot.com/" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                <span class="material-symbols-outlined">
                                    ink_pen
                                </span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>

          
            <br />
            <h2 class="title"> About this page </h2>

            <p class="about">
                This is just a static but mobile-friendly page displaying some of the small projects that I have created
                as part of my web development learning journey. I started this portfolio when I was schooling and kept
                adding features and small improvements ever since, without changing much the <a class="about-link"
                    href="./documents/web_designs.jpg" target="_blank">original design.</a> made as a class assignment
                in the first weeks of <a class="about-link" href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
                    target="blank">HBC</a> 01/2022.
                <br />
                <a class="about-link" target="_blank" href="https://github.com/Victor-Grinan-Dev/Portfolio"> Source code in Github</a>
            </p>

        </article>
       </div>
    </SectionWrapper>
  )
}

export default About

/**
            <article id="aboutArticle" class="bgLevel1">
                    
            <h2 class="title"> About me </h2>

            <p class="about">
                <br />
                <br />
                I am a computers <b class="keyword">enthusiast</b>.
                <br />
                I started learning coding independently in 2019, and in June 2023 I graduated in Information and
                communication technologies from <a class="about-link"
                    href="https://en.bc.fi/qualifications/full-stack-web-developer-program/" target="blank">Helsinki
                    Business College (HBC)</a>, where I gained a solid understanding of programming, algorithms, and
                software design principles.
                <br />
                My background is in pedagogy and team leading. This has taught me to see the value of
                good <b class="keyword">group dynamics</b>. In my previous workplaces, I have quickly advanced to responsible
                positions. I am particularly good at problem solving and <b class="keyword">customer service</b>. My hobbies have taught me <b class="keyword">patience</b>
                and <b class="keyword">perseverance</b>. Now I'm studying to be <b class="keyword">IT-support</b> staff at <a class="about-link" href="https://www.taitotalo.fi/" target="blank">Taitotalo</a>.
                <br />
                "I am the missing link between IT and the user."
                
            </p>
            <br />
            <div class='cvBtns'>
                <p>
                    CV in PDF & Video:
                </p>
                <div>
                    <a href="./documents/cv_image.png" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </a>
                    <a href="./documents/CV_victor_grinan_2025_fi_en.pdf" target="_blank" download='CV_victor_grinan_2025_fi_en'>
                        <button class='appButton'>
                            <span class="material-symbols-outlined">download</span>
                        </button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=FXtfp2-87D8" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                play_circle
                            </span>
                        </button>
                    </a>
                    
                </div>
                <br />
                <p>
                    Articles:
                </p>
                <div>
                    <a href="https://www.hs.fi/kaupunki/art-2000008121681.html" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://www.hs.fi/ulkomaat/art-2000008119341.html" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://tutka.pro/yhteiskunta/totuus-turistiverhon-takana/" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                newspaper
                            </span>
                        </button>
                    </a>
                    <a href="https://librodeinsidencias.blogspot.com/" target="_blank">
                        <button class='appButton'>
                            <span class="material-symbols-outlined">
                                <span class="material-symbols-outlined">
                                    ink_pen
                                </span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>

          
            <br />
            <h2 class="title"> About this page </h2>

            <p class="about">
                This is just a static but mobile-friendly page displaying some of the small projects that I have created
                as part of my web development learning journey. I started this portfolio when I was schooling and kept
                adding features and small improvements ever since, without changing much the <a class="about-link"
                    href="./documents/web_designs.jpg" target="_blank">original design.</a> made as a class assignment
                in the first weeks of <a class="about-link" href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
                    target="blank">HBC</a> 01/2022.
                <br />
                <a class="about-link" target="_blank" href="https://github.com/Victor-Grinan-Dev/Portfolio"> Source code in Github</a>
            </p>

        </article>
 */