export const excelDateToJSDate = (serial) => {
    var utc_days = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;
    var date_info = new Date(utc_value * 1000);
    return new Date(date_info.getFullYear(), date_info.getDate() - 1, date_info.getMonth() + 1);
}