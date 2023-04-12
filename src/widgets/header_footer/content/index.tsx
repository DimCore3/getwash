import { Link } from 'react-router-dom';
import './index.scss';
import NavButton from './ui/navButton';
import Navbar from './ui/navbar';
import GetAllow from 'features/getAllow';

const Content = () => {
    return (
        <div className="container">
            <Link to='/'><h1>GetWash</h1></Link>
            <Navbar typeClass='desktop'/>
            <GetAllow typeClass='desktop'/>
            <NavButton />
        </div>
    );
}

export default Content;