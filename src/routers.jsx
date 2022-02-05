import {
    Routes,
    Route
} from 'react-router-dom'

// Pages 
import Home from './pages/Home'
import Spends from './pages/Spends'
import Networking from './pages/Networking'
import Projects from './pages/Projects';
import NewProject from './pages/Projects/NewProject'
import ProjectList from './pages/Projects/ProjectsList'
import AppSettings from './pages/AppSettings'
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
            <Route path="/settings" element={<AppSettings />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
}