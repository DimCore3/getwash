import { MainButton } from "shared/ui";
import { useState } from 'react'
import FormGetAllow from "./formGetAllow";

type Props = {
    typeClass: string,
}

const GetAllow = ({ typeClass }: Props) => {
    const [isFormOpened, setIsFormOpened] = useState(false);

    return (
        <>
            <MainButton action={() => setIsFormOpened(!isFormOpened)} typeClass={typeClass}>Получить доступ</MainButton>
            {
                isFormOpened &&
                <FormGetAllow setIsFormOpened={setIsFormOpened}/>
            }
        </>
    );
}

export default GetAllow;