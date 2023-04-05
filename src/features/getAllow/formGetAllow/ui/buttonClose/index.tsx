import './index.scss';

type Props = {
    isWindowOpened: Function,
}

const ButtonClose = ({ isWindowOpened }: Props) => {
    return (
        <button onClick={() => isWindowOpened(false)} className="button_close">
            x
        </button>
    );
}

export default ButtonClose;