const DATE = "20220228"; // дата у форматі YYYYMMDD
const baseUrl = "https://bank.gov.ua/";
const url = new URL(baseUrl);
url.pathname = "/NBUStatService/v1/statdirectory/res"; // Встановлюємо шлях
url.searchParams.append("date", DATE);
url.searchParams.append("json", ""); // Додаємо параметр "json" без значення, як у прикладі
console.log(url.toString());