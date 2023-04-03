import './index.scss';
import NavButton from './ui/navButton';
import Navbar from './ui/navbar';
import GetAllow from 'features/getAllow';

const Content = () => {
    return (
        <div className="container">
            <h1>GetWash</h1>
            <Navbar typeClass='desktop'/>
            <GetAllow typeClass='desktop'/>
            <NavButton action={function(){console.log('aa')}}/>
        </div>
    );
}

export default Content;