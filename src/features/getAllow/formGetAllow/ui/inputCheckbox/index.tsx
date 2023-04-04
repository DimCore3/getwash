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

const InputCheckbox = ({name, data, setValue}: Props) => {
    return (
        <div className="checkboxDiv">
            <input onChange={e => setValue(name, e.target.checked)} type="checkbox" name={name} />
            <p>{data[name as keyof typeof data].text}</p>
        </div>
    );
}

export default InputCheckbox;