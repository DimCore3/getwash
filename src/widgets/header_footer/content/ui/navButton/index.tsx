import NavbarMobile from './navbarMobile';
import './index.scss'
import { useState } from 'react';

type Props = {
    action: Function,
}

const NavButton = ({ action }: Props) => {
    const [isShowNavbar, setIsShowNavbar] = useState(false);

    return (
        <>
            <button className="navButton" onClick={() => setIsShowNavbar(!isShowNavbar)}><p>|||</p></button>
            {isShowNavbar &&
                <NavbarMobile isShow={setIsShowNavbar} />
            }
        </>
    );
}

export default NavButton;