import "./about.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import anna1 from "../../../public/main/anna1.png";
import anna2 from "../../../public/main/anna2.png";

function About() {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"} role="main">
        <div className="about">
          <div className="split">
            <div className="text">
              <h1>About Me</h1>
              <p>
                Hi, I’m a junior at Brown University studying Computer Science
                and Business Economics on the side. My interests lie at the
                intersection of design and tech, primarily through front end
                development, user experience, and product design.
              </p>
              <p>
                I’m always open to new opportunities— feel free to reach out at
                anna_wang@brown.edu!
              </p>
            </div>
            <img className="pic" src={anna1} loading="lazy" />
          </div>
          <div className="split">
            <img className="pic" src={anna2} loading="lazy" />
            <div className="text"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
