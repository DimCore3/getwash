import './index.scss'

type DataProps = {
    text: string,
    value: boolean,
}

type Props = {
    name: string,
    data: {
        mailSubscribe: DataProps,
        dataCollection: DataProps,
    },
    setValue: Function,
};

const InputCheckbox = ({ name, data, setValue }: Props) => {
    let value = data[name as keyof typeof data].value;

    return (
        <div onClick={() => setValue(name, !value)} className="checkboxDiv">
            <input checked={value} type="checkbox" readOnly />
            <p> {data[name as keyof typeof data].text}</p>
        </div>
    );
}

export default InputCheckbox;