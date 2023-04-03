import './index.scss'

type Props = {
    action: Function,
}

const NavButton = ({action}: Props) => {
    return ( 
        <button className="navButton" onClick={() => action()}><p>|||</p></button>
     );
}
 
export default NavButton;