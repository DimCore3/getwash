import './index.scss';

interface Props {
    title: string,
    action: any,
    typeClass: string
} 

const MainButton = ({title, action, typeClass}: Props) => {
    return (
        <button onClick={action} className={'mainButton ' + typeClass}>
            {title}
        </button>
    );
}

export default MainButton;