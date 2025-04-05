import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/AboutMe/Education';
import Experience from './components/AboutMe/Experience';
import Skill from './components/AboutMe/Skill';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App w-screen h-screen">
            <Navbar />

            <AboutMe />

            <div className='w-full 2xl:px-64 xl:px-36 lg:px-20 px-5 bg-gradient-to-r from-sky-50'>
                <Skill />

                <Experience />
                <Education />
            </div>
        </div>
    );
}

export default App;
