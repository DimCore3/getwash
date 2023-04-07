import GetAllow from 'features/getAllow';
import Navbar from '../../navbar';
import './index.scss';
import { MainButton } from 'shared/ui';

type Props = {
    isShow: Function;
}

const NavbarMobile = ({ isShow }: Props) => {
    return (
        <div className="navbar_mobile">
            <div onClick={() => isShow(false)}>
                <Navbar typeClass='navMobile' />
            </div>
            <div className="buttons_nav_mobile">
                <GetAllow typeClass='classic_button_get_allow' />
                <MainButton action={() => { console.log('Стать партнером') }}>Стать партнером</MainButton>
            </div>
        </div>
    );
}

export default NavbarMobile;