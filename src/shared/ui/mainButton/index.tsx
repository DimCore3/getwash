import './index.scss';

interface Props {
    children: string,
    action: any,
    typeClass: string
} 

const MainButton = ({children, action, typeClass}: Props) => {
    return (
        <button onClick={action} className={'mainButton ' + typeClass}>
            {children}
        </button>
    );
}

export default MainButton;