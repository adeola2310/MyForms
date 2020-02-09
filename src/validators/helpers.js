export const isEmailValid = (email) => {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase()) && email;
};

export const isOnlyText = (text) => {
    let regExp = /^[A-Za-z ]+$/;
    return regExp.test(String(text)) && text;
};

export const isGreaterThanTwo = (str) =>{
    return str.length >= 2;
}
export const isPassword = (password) => {
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    return regExp.test(String(password));
};
export const confirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const isNumber = (number) =>{
    let regExp = /^[0]\d{10}$/;
    return regExp.test(String(number)) && number;
}

export const isValid = (pin) =>{
    let regExp = /^\d{4}$/;
    return regExp.test(Number(pin)) && pin;
}

export const isDate = (date) =>{
    let regExp = /^(0[1-9]|1[012])\/\d{2}$/;
    return regExp.test(String(date)) && date;
}

export const formatCardNumber = value => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter(group => !!group).join(' ')
    )
}