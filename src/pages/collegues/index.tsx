import { MainButton } from 'shared/ui';
import './index.scss';

type ContentType = {
    img: string,
    text: string    
};

const Collegues = () => {
    let content: ContentType[] = [
        {
            img: 'story',
            text: 'Просмотривайте историю заказа',
        },
        {
            img: 'calendar',
            text: 'Создание отчета неделя/месяц/год',
        },
        {
            img: 'feedback',
            text: 'Обратная связь от клиентов',
        },
        {
            img: 'quality',
            text: 'Контроль качества работы сотрудников',
        },
        {
            img: 'wallet',
            text: 'Бесконтактная оплата работы',
        },
    ];
    
    return (
        <div className='collegues_app_page_background'>
            <div className='collegues_app_page'>
                <h2>Стань нашим партнером и начни зарабатывать: </h2>
                <p>Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, что бы получать новых клиентов и распределить нагрузку равномерно на весь день. Мы предоставляем удобные инструменты для формирования отчетов в несколько кликов и многое другое. </p>
                <div className='all_content'>
                    {
                        content.map((element, index) => 
                            <div className='content_element' key={'content_element_' + index}>
                                <div className='content_icon'>
                                    <img src={require('./img/icons/' + element.img + '.svg')} alt={element.text} />
                                </div>
                                <div className="content_text">
                                    <p>
                                        {element.text}
                                    </p>
                                </div>
                            </div>    
                        )
                    }
                </div>
                <MainButton action={() => console.log('aa')} typeClass='classic_button_get_allow'>Стать партнером</MainButton>
            </div>
        </div>
    );
}

export default Collegues;