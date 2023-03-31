import { Link } from "react-router-dom";
import './index.scss';
import { MainButton } from "shared/ui";

const Header = () => {
    const textDecNone = { textDecoration: 'none' };

    return (
        <header>
            <div className="header_container">
                <h1>GetWash</h1>
                <div className="navbar">
                    <Link to='/how_use' style={textDecNone}><p>Как использовать</p></Link>
                    <Link to='/collegues' style={textDecNone}><p>Партнерам</p></Link>
                    <Link to='/download' style={textDecNone}><p>Скачать</p></Link>
                    <Link to='/comments' style={textDecNone}><p>Отзывы</p></Link>
                </div>
                <MainButton title="Получить доступ" action={()=> console.log('Получить доступ')} typeClass="header_button"/>
            </div>
        </header>
    );
}

export default Header;