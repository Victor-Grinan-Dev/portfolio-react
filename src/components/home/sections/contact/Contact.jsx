import SectionWrapper from "../../../UIs/sectionWrapper/SectionWrapper"
import email from "../../../../assets/icons/email_color.png"
import gitlab from "../../../../assets/icons/gitLab.png"
import github from "../../../../assets/icons/github_circle_white_border.png"
import Linkedin from "../../../../assets/icons/Linkedin-logo-transparent-PNG.png"
import Instagram from "../../../../assets/icons/instagram_color.png"
import Twitter from "../../../../assets/icons/Twitter-X.png"
import youtube from "../../../../assets/icons/youtube.png"


const Contact = () => {
  return (
    <SectionWrapper>
        <article id="contactArticle" className="contactArticle contact-gradient">

        <h4 id='contact' className=" section-title centered">Conctact me:</h4>

        <div className="email">

            <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                <img src={email} id="email" className="icon small-img"></img>
            </a>

            <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                <p id="emailActual"> victorgrinan@gmail.com </p>
            </a>
        </div>

        <div id="some">
            <a href="https://gitlab.com/VictorGrinan" target="blank">
                <img src={gitlab} alt="GitLab" className="icon small-img"></img>
            </a>
            <a href="https://github.com/Victor-Grinan-Dev" target="blank">
                <img src={github} alt="GitHub" className="icon small-img"></img>
            </a>

            <a href="https://www.linkedin.com/in/victor-gri%C3%B1an-892a741b7/" target="blank">
                <img src={Linkedin} className="icon small-img"></img>
            </a>

            <a href="https://www.instagram.com/victor_grinan_dev/" target="blank">
                <img src={Instagram} className="icon small-img"></img>
            </a>

            <a href="https://twitter.com/GrinanVictor" target="blank">
                <img src={Twitter} alt="Twitter" className="icon small-img"></img>
            </a>
            <a href='https://www.youtube.com/'>
                <img src={youtube} className="icon small-img"></img>
            </a>
        </div>

        {/* <p>This page <a href="https://github.com/Victor-Grinan-Dev/Portfolio">source code</a> is accesible from my
            Github account.</p> */}
        <section id="licenseSection">
            <p id="copyRight" className="copyRight">Copyrights &copy; <span className="year"></span></p>
            <p id="love">Made with ❤️ from Finland</p>
        </section>

        <button id="scrollUp appButton" className="scrollUp invisible">
          <span className="material-symbols-outlined">
                arrow_upward
            </span></button>
        </article>
    </SectionWrapper>
  )
}

export default Contact