type ResultData = {
    key: string,
    value: string | boolean,
}

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

function prepareDataToArray(data: DataType) {
    let result:ResultData[] = [];
    for (let key in data) {
        result.push({
            key,
            value: data[key as keyof typeof data].value,
        })
    };
    return result;
};

export default prepareDataToArray;