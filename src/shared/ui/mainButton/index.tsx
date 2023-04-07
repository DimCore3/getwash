import './index.scss';

interface Props {
    children: string,
    action: any,
    typeClass?: string,
    disabled?: boolean,
} 

const MainButton = ({children, action, typeClass = '', disabled = false}: Props) => {
    return (
        <button onClick={e => action(e)} className={'mainButton ' + typeClass} disabled={disabled}>
            {children}
        </button>
    );
}

export default MainButton;