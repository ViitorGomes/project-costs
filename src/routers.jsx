import {
    Routes,
    Route
} from 'react-router-dom'

// Pages 
import Home from './pages/Home'
import Spends from './pages/Spends'
import Networking from './pages/Networking'
import Projects from './pages/Projects';
import NewProject from './pages/NewProject'
import ProjectList from './pages/ProjectsList'
import NotFound from './pages/NotFound';

export default function index() {
    return <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects/*" element={<Projects/>}>
                <Route path="" element={<ProjectList/>} />
                <Route path="new-project" element={<NewProject />} />
            </Route>
            <Route path="/spends" element={<Spends />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
}