import logo from './logo.svg';
import './App.css';
import './asset/css/bootswatch_minty.css';
import './asset/css/responsive.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import AboutMe from './components/AboutMe';
import NotFound from './NotFound';
import Award from './components/Award';
import Resume from './components/Resume';

function App() {
    return (
        <div className="App">
            <Navbar />

            <div className='main'>
                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/award' element={<Award />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
