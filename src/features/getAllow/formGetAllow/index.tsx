import { MainButton } from 'shared/ui';
import './index.scss'
import { useState } from 'react';
import InputText from './ui/inputText';
import InputCheckbox from './ui/inputCheckbox';
import { PrepareDataToArray } from './helpers';
import { Link } from 'react-router-dom';

type Props = {
    setIsFormOpened: Function,
}

const FormGetAllow = ({ setIsFormOpened }: Props) => {
    const [data, setData] = useState({
        name: {
            img: 'name.svg',
            placeholder: 'Введите имя',
            value: '',
        },
        email: {
            img: 'email.svg',
            placeholder: 'E-mail',
            value: '',
        },
        phone: {
            img: 'phone.svg',
            placeholder: 'Номер телефона',
            value: '',
        },
        mailSubscribe: {
            text: 'Я хочу получать новости на почтовый адрес',
            value: false,
        },
        dataCollection: {
            text: 'Я согласен участвовать в сборе данных',
            value: false,
        },
    })

    function setValue(name: string, value: string): void {
        let result = JSON.parse(JSON.stringify(data));
        result[name].value = value;
        setData({ ...result });
    };

    function click(e: Event): void {
        e.preventDefault();
        console.log(PrepareDataToArray(data));
        setIsFormOpened(false);
    };

    return (
        <div className="form_get_allow">
            <div className='closeButtonDiv'>
                <button onClick={() => setIsFormOpened(false)}>X</button>
            </div>
            <div className="form_title">
                <h2>Стань нашим партнером и начни зарабатывать: </h2>
            </div>
            <form>
                <InputText name='name' data={data} setValue={setValue} />
                <InputText name='email' data={data} setValue={setValue} />
                <InputText name='phone' data={data} setValue={setValue} />
                <InputCheckbox name='mailSubscribe' data={data} setValue={setValue} />
                <InputCheckbox name='dataCollection' data={data} setValue={setValue} />
                <MainButton action={click} typeClass='button_send_form' disabled={true}>Получить доступ</MainButton>
                <span>Нажимая кнопку Вы принимаете <Link onClick={() => setIsFormOpened(false)} to='policy'>политику конфиденциальности</Link></span>
        </form>
        </div >
    );
}

export default FormGetAllow;