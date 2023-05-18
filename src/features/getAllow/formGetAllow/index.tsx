import './index.scss'
import { FormEvent, useEffect, useState } from 'react';
import { ButtonClose, InputText, InputCheckbox } from './ui';
import { isFieldsFilled, prepareDataToArray } from './helpers';
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
    
    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        setIsFilled(isFieldsFilled(data))
    }, [data]);   

    function setValue(name: string, value: string): void {
        let result = JSON.parse(JSON.stringify(data));
        result[name].value = value;
        setData({ ...result });
    };

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        const namePattern = /[a-zA-Z]{2,20}$/;
        const mailPattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
        const phonePattern = /^\d{8,12}$/;
        
        if (!namePattern.test(data.name.value)) {
            alert("Name requirements: [a-zA-Z] 2-20 characters");
            return;
        };
        
        if (!mailPattern.test(data.email.value)) {
            alert("Email is not correct");
            return;
        };

        if (!phonePattern.test(data.phone.value)) {
            alert("Phone number is not correct: There are should be only digit, 8-12 characters");
            return;
        };

        console.log(prepareDataToArray(data));
        setIsFormOpened(false);
    }

    return (
        <div className="form_get_allow">
            <div className='closeButtonDiv'>
                <ButtonClose isWindowOpened={setIsFormOpened}/>
            </div>
            <div className="form_title">
                <h2>Стань нашим партнером и начни зарабатывать: </h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputText name='name' data={data} setValue={setValue} />
                <InputText name='email' data={data} setValue={setValue} />
                <InputText name='phone' data={data} setValue={setValue} />
                <InputCheckbox name='mailSubscribe' data={data} setValue={setValue} />
                <InputCheckbox name='dataCollection' data={data} setValue={setValue} />
                <button className={'mainButton button_send_form'} disabled={!isFilled}>Получить доступ</button>
                <span>Нажимая кнопку Вы принимаете <Link onClick={() => setIsFormOpened(false)} to='policy'>политику конфиденциальности</Link></span>
            </form>
        </div >
    );
}

export default FormGetAllow;