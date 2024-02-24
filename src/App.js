import Navbar from './navbar';

import Home from './Home';
import About from './about';
import Skill from './skill';
import Internships from './internships';
import Projects from './projects';
import Contact from './contact';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <Internships></Internships>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  );
}

export default App;
