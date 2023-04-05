import './index.scss';

type DataProps = {
    img: string,
    placeholder: string,
    value: string,
};

type Props = {
    name: string,
    data: {
        name: DataProps,
        email: DataProps,
        phone: DataProps,

    }
    setValue: Function,
};

const InputText = ({ name, data, setValue }: Props) => {
    return (
        <div className="input_text_div">
            <div className='img_div'>
                <img src={require('./images/' + data[name as keyof typeof data].img)} alt={data[name as keyof typeof data].placeholder} />
            </div>
            <input
                type='text'
                placeholder={data[name as keyof typeof data].placeholder}
                onChange={e => setValue(name, e.target.value)}
            />
        </div>
    );
}

export default InputText;