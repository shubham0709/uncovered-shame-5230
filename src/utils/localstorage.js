export const saveDataToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getDatafromLocalStorage = (key) => {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}