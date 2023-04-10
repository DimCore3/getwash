import './index.scss';

interface Props {
    children: string,
    action: any,
    typeClass?: 'classic_button_get_allow' | 'button_send_form' | 'desktop' | '',
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