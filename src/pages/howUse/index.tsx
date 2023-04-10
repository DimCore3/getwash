import './index.scss'

type ContentType = {
    img: string,
    title: string,
    text: string,
};

const HowUse = () => {
    const content: ContentType[] = [
        {
            img: 'download',
            title: 'Скачай и зарегистрируйся',
            text: 'Наше приложение доступно в Apple Store и Google Play',
        },
        {
            img: 'map',
            title: 'Выбери ближайшую автомойку',
            text: 'Из свободных поблизости или оставь заказ на удобное время',
        },
        {
            img: 'settings',
            title: 'Выбери дополнительные услуги',
            text: 'Можешь их добавить к своему основному заказу',
        },
        {
            img: 'wallet',
            title: 'Оплати внутри приложения ',
            text: 'Бесконтактная оплата внутри приложения и прозрачные цены',
        },
    ];

    return (
        <div className="howUse_page_root">
            <div className="howUse_content">
                <img className='howUse_img_content' src={require('./img/mockup21.png')} alt="" />
                <div className='howUse_right_content'>
                    <h2>Быстрый старт:</h2>
                    {
                        content.map(element =>
                            <div className="content_howUse_row">
                                <div className='img_container'>
                                    <img src={require('./img/icons/' + element.img + '.svg')} alt={element.title} />
                                </div>
                                <div className='howUse_content_text'>
                                    <h3>{element.title}</h3>
                                    <p>{element.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HowUse;