import './index.scss';
import Content from './content';

type Props = {
    type: 'header' | 'footer',
}

const HeaderFooter = ({ type }: Props) => {
    return (
        (type === 'header'
            ? <header>
                <Content />
            </header>

        : type === 'footer'
            ? <footer>
                <Content />
            </footer>
        
        : <div>
            <h1> Неверно указан тип для лэйаута </h1>
        </div>
        )
    );
}

export default HeaderFooter;