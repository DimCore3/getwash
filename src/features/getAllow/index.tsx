import { MainButton } from "shared/ui";

type Props = {
    typeClass: string,
}

const GetAllow = ({typeClass}: Props) => {
    return (
        <MainButton action={() => console.log('Получить доступ')} typeClass={"header_button " + typeClass} >Получить доступ</MainButton>
    );
}

export default GetAllow;