import useUserData from "../../hooks/useUserData";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Certs from "../Certs/Certs";

const Main = (props) => {
  const data = useUserData();
  return (
    <main>
      <Hero data={data.getHome()} />
      <About data={data} />
      <Projects data={data.getProjects()} />
      <Certs data={data.getCerts()} />
    </main>
  );
};

export default Main;