import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Header() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="Logotipo" />
            </div>
            <div className="middleSide">
                <nav className="navMenu">
                    <a href="/menu">portfólio</a>
                    <a href="/menu">repositório</a>
                    <a href="/menu">currículo</a>
                </nav>
            </div>
            <div className="rightSide">
                <nav className="navIcons">
                    <a href="https://www.linkedin.com/in/muriloramosoficial/"><AiFillLinkedin /></a>
                    <a href="https://github.com/muriloramosoficial"><AiFillGithub /></a>
                </nav>
            </div>
        </div>
    );
}

export default Header