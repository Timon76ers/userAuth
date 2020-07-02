import * as regexp from './regexp';

export const mandatory = v => !!v || "Обязательно к заполнению!";
export const minLength = min => v => (!v || v.length >= min) || "Минимальное кол-во символов: " + min;
export const nameValid = v => !v || regexp.nameChars.test(v) || "Недопустимые символы!";
