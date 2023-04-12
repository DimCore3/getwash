import './index.scss';
import { useState } from "react";

type CommentsType = {
    message: string,
    img: string,
    name: string,
    specialty: string,
}

const Comments = () => {
    const comments: CommentsType[] = [
        {
            message: 'Таким образом консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании модели развития.',
            img: 'ellipse',
            name: 'John Doe',
            specialty: 'Водитель',
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque facilis asperiores, repudiandae commodi iusto! Nam, molestiae harum quaerat deleniti assumenda perferendis consequuntur perspiciatis accusamus ea tenetur, ipsam corrupti veritatis!',
            img: 'profile1',
            name: 'Иван Иванов',
            specialty: 'Грузчик',
        },
        {
            message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, voluptatibus eligendi quas consectetur quae provident.',
            img: 'profile2',
            name: 'Кирилл',
            specialty: 'Механик',
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae mollitia magni, dolor atque, debitis ad voluptatum suscipit laboriosam inventore sit totam iusto?',
            img: 'profile3',
            name: 'Сергей',
            specialty: 'Водитель грузовой',
        },
    ];

    const [openedIndex, setOpenedIndex] = useState(0);

    function previous(): void {
        if (openedIndex === 0) {
            setOpenedIndex(comments.length - 1);
        } else {
            setOpenedIndex(openedIndex - 1);
        }
    };

    function next(): void {
        if (openedIndex >= (comments.length - 1)) {
            setOpenedIndex(0);
        } else {
            setOpenedIndex(openedIndex + 1);
        }
    };

    return (
        <div className="background_comments_page">
            <div className="content_comments_page">
                <div className="comment_box">
                    <h2>Отзывы о приложении</h2>
                    <div className="comment_text">
                        <p>{comments[openedIndex].message}</p>
                        <hr />
                        <div className='commentator'>
                            <img src={require('./img/' + comments[openedIndex].img + '.png')} alt='person' />
                            <div className="name_specialty">
                                <h3>{comments[openedIndex].name}</h3>
                                <p>{comments[openedIndex].specialty}</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="controller">
                    <div className="buttons_control">
                        <div onClick={previous} className="button_control previous_comment">
                            &#60;
                        </div>
                        <div onClick={next} className="button_control next_comment">
                            &#62;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;