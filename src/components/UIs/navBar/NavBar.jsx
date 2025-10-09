import VG from "../VG/VG";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light" id="menuBar">

            <div className="container-fluid flex-corners">

                <VG />

                {/* hamburger menu: */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

               {/* menu bar: */}
                <div className="collapse navbar-collapse nav-tab" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item" id="aboutTab">
                            <a className="nav-link" aria-current="page" href="#aboutArticle">About</a>
                            <div className="indicator" id="aboutTabIndicator"></div>
                        </li>
                        <li className="nav-item" id="portfolioTab">
                            <a className="nav-link" href="#portfolio">Projects</a>
                            <div className="indicator" id="portfolioTabIndicator"></div>
                        </li>
                        <li className="nav-item" id="skillsTab">
                            <a className="nav-link" href="#skillsBoxes">Skills</a>
                            <div className="indicator" id="skillsTabIndicator"></div>
                        </li>
                        <li className="nav-item" id="certTab">
                            <a className="nav-link" href="#certificates">Certificates</a>
                            <div className="indicator" id="certTabIndicator"></div>
                        </li>
                        <li className="nav-item" id="contactTab">
                            <a className="nav-link" href="#contact">Conctact Me</a>
                            <div className="indicator" id="contactTabIndicator"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
                                target="blank">HBC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://https://www.taitotalo.fi/"
                                target="blank">Taitotalo</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
  )
}

export default NavBar;