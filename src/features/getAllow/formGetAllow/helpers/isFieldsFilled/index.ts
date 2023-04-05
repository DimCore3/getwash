import { prepareDataToArray } from ".."

type InputText = {
    img: string,
    placeholder: string,
    value: string,
}

type InputCheckbox = {
    text: string,
    value: boolean,
}

type DataType = {
    name: InputText,
    email: InputText,
    phone: InputText,
    mailSubscribe: InputCheckbox,
    dataCollection: InputCheckbox,
}

export default function isFieldsFilled(data: DataType) {
    let result = prepareDataToArray(data);
    for (let element of result) {
        if (element.value === '' || element.value === false) {
            return false;
        }
    }
    return true;
}

