let yearOfBirth = prompt("enter year of birth");
let selectedCity = prompt("What city do you live in?");
let selectedSport = prompt ("choose your favorite sport from the suggested: archery, football or basketball");          
let messageAboutCity;
let messageAboutSport;
let age;
switch (yearOfBirth) {
    case(null):
        age = "Шкода, що ви не захотіли вказати свій вік";
    break;
    default:
        age = 2023-parseInt(yearOfBirth, 10);
}

switch(selectedCity) {
    case "Київ":
    case "Kyiv":
    case "київ":
    case "kyiv":
        messageAboutCity = "Ти живеш у столиці України!";
        break;
    case "Вашингтон":
    case "Washington":
    case "вашингтон":
    case "washington":
        messageAboutCity = "Ти живеш у столиці Сполучених Штатів!";
        break;
    case "Лондон":
    case "London":
    case "лондон":
    case "london":
        messageAboutCity = "Ти живеш у столиці Англії!";
        break;
    case(null):
        messageAboutCity = "Шкода, що ви не захотіли вказати своє місто.";
        break;
    default:
        messageAboutCity = `Ти живеш у місті ${selectedCity}.`;
    }

switch(selectedSport) {
    case "football":
    case"футбол":
        messageAboutSport = "Круто! Хочеш стати як Ліонель Мессі?";
        break;
    case "basketball":
    case"баскетбол":
        messageAboutSport = "Круто! Хочеш стати як Майкл Джордан?";
        break;
    case "archery":
    case "стрільба":
        messageAboutSport = "Круто! Хочеш стати як Губерт ван Інніс?";
        break;
    case (null):
        messageAboutSport ="Шкода, що ви не захотіли вказати свій улюблений спорт.";
        break;
    default:
        messageAboutSport="Хороший вибір!";
    }

alert(`${age}. ${messageAboutCity} ${messageAboutSport}`);