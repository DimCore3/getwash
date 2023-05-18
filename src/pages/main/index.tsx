import './index.scss';
import GetAllow from "features/getAllow";
import { Arrow } from 'shared/ui/index';

const Main = () => {
    return (
        <div className='main_page_root'>
            <div className='main_page_content'>
                <div className='left_main_content'>
                    <div className='left_main_title'>
                        <span>
                            <p>
                                Поиск ближайшей свободной автомойки и бронирование на удобное время.
                            </p>
                            <Arrow />
                        </span>
                    </div>
                    <p>Мы поможем сохранить ваше время для более интересных занятий, чем стоять в очереди.</p>
                    <GetAllow typeClass="classic_button_get_allow" />
                </div>
                <div className="mainImg" />
            </div>
        </div>
    );
};

export default Main;