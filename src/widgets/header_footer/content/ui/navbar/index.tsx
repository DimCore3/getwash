import { Link } from "react-router-dom";
import './index.scss';

type Links = {
    title: string,
    url: string,
}

type Props = {
    typeClass: string,
}

const Navbar = ({typeClass}: Props) => {
    const links: Links[] = [
        { title: 'Как использовать', url: 'how_use' },
        { title: 'Партнерам', url: 'collegues' },
        { title: 'Скачать', url: 'download' },
        { title: 'Отзывы', url: 'comments' },
    ];

    return (
        <div className={"navbar " + typeClass}>
            {links.map(element =>
                <Link onClick={() => window.scrollTo(0,0)} to={'/' + element.url} style={{ textDecoration: 'none' }} key={element.url + '_key'}><p>{element.title}</p></Link>
            )}
        </div>
    );
}

export default Navbar;