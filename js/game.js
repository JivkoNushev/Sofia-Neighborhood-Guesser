let wrong_guesses = 0;
let correct_guesses = 0;
let districts_to_guess;
const districts = ['Район Панчарево', 'Район Овча купел', 'Район Нови Искър', 'Район Надежда', 'Район Люлин', 'Район Кремиковци', 'Район Искър', 
'Район Връбница', 'Район Витоша', 'Район Банкя', 'Южен парк', 'Северен парк', 'Резиденция Бояна', 'Парк Централни софийски гробища', 'Парк Малашевски гробища', 'Парк Западен парк', 
'Парк Заимов', 'Парк Гео Милев', 'Парк Въртопо', 'Парк Ботаническа градина', 'Парк Борисова градина', 'Парк Бакърени гробища', 'Ловен парк', 'Източен парк', 'Зоопарк', 
'с. Чепинци', 'с. Световрачене', 'с. Панчарево', 'с. Негован', 'с. Мрамор', 'с. Мировяне', 'с. Локорско', 'с. Кубратово', 
'с. Кривина', 'с. Кокаляне', 'с. Казичене', 'с. Иваняне', 'с. Герман', 'с. Волуяк', 'с. Владая', 'с. Бусманци', 'с. Бистрица', 'с. Балша', 'м-т Яладжа', 
'м-т Юбилейна гора', 'м-т Подлозище', 'м-т Мала кория', 'м-т Киноцентъра', 'м-т Камбаните', 'м-т Детски град', 'м-т Гърдова глава', 'м-т Батареята', 
'м-т Барите', 'ж.гр.Южен парк', 'ж.гр.Зоопарк', 'гр. Нови Искър', 'гр. Банкя', 'в.з.Черния кос', 'в.з.Симеоново - Драгалевци', 'в.з.Малинова долина - Герена', 
'в.з.Малинова долина', 'в.з.Люлин', 'в.з.Киноцентъра 3 част', 'в.з.Киноцентъра', 'в.з.Килиите', 'в.з.Горна баня', 'в.з.Врана - Лозен', 'в.з.Врана - Герман', 'в.з.Бункера', 
'в.з.Бояна', 'в.з.Беловодски път', 'в.з.Американски колеж', 'Яворов', 'Център', 'Христо Ботев', 'Хладилника', 'Хиподрума', 'Хаджи Димитър', 'Фондови жилища', 
'Филиповци', 'Факултета', 'Триъгълника', 'Требич', 'Толстой', 'Суходол', 'Сухата река', 'Студентски град', 'Стрелбище', 'Слатина', 'Славия', 'Симеоново', 'Сердика', 
'Свобода', 'Света Троица', 'СПЗ Слатина', 'СПЗ Модерно предградие', 'Република 2', 'Република', 'Редута', 'Разсадника', 'Полигона', 'Подуяне', 'Павлово', 'ПЗ Хладилника', 
'ПЗ Илиянци', 'Орландовци', 'Овча купел 2', 'Овча купел 1', 'Овча купел', 'Оборище', 'Обеля 2', 'Обеля 1', 'Обеля', 'Надежда 4', 'Надежда 3', 'Надежда 2', 'Надежда 1', 
'НПЗ Хаджи Димитър', 'НПЗ Средец', 'НПЗ Искър', 'НПЗ Изток', 'Мусагеница', 'Модерно предградие', 'Младост 4', 'Младост 3', 'Младост 2', 'Младост 1А', 'Младост 1', 
'Медицинска академия', 'Манастирски ливади', 'Малинова долина', 'Малашевци', 'Люлин 9', 'Люлин 8', 'Люлин 7', 'Люлин 6', 'Люлин 5', 'Люлин 4', 'Люлин 3', 'Люлин 2', 
'Люлин 10', 'Люлин 1', 'Люлин - център', 'Лозенец', 'Летище София', 'Левски Г', 'Левски В', 'Левски', 'Лагера', 'Кръстова вада', 'Красно село', 
'Красна поляна 3', 'Красна поляна 2', 'Красна поляна 1', 'Княжево', 'Карпузица', 'Илиянци', 'Илинден', 'Изток', 'Изгрев', 'Иван Вазов', 'Зона Б-5-3', 'Зона Б-5', 
'Зона Б-19', 'Зона Б-18', 'Захарна фабрика', 'Западен парк', 'Експериментален', 'Дървеница', 'Дружба 2', 'Дружба 1', 'Драгалевци', 'Докторски паметник', 
'Димитър Миленков', 'Дианабад', 'Гоце Делчев', 'Горубляне', 'Горна баня', 'Гео Милев', 'Гевгелийски', 'Връбница 2', 'Връбница 1', 'Враждебна', 'Военна рампа', 
'Витоша', 'Градина', 'Бъкстон', 'Бояна', 'Борово', 'Бенковски', 'Белите брези', 'Банишора', 'Абдовица', '7-ми 11-ти километър'];

function shuffleArray(array) {
    let shuffledArray = array.slice(0);
    
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function getDistrict() {
    const shuffledDistricts = JSON.parse(localStorage.getItem("districts_to_guess"));
    return shuffledDistricts[0];
}

function getNumberOfDistrictsGuessed() {
    return JSON.parse(localStorage.getItem("correct_guesses"));
}

function startGame() {
    districts_to_guess = shuffleArray(districts);
    // districts_to_guess = districts.slice(0,2);
    localStorage.setItem("districts_to_guess", JSON.stringify(districts_to_guess));
    localStorage.setItem("wrong_guesses", JSON.stringify(wrong_guesses));
    localStorage.setItem("correct_guesses", JSON.stringify(correct_guesses));
    console.log(districts_to_guess);
}

function checkIfGameIsOver() {
    if (districts_to_guess.length == 0) {
        alert("Game over!");
    }
}

function guessDistrictNormal(name) {
    const shuffledDistricts = JSON.parse(localStorage.getItem("districts_to_guess"));
    const corr_guesses = JSON.parse(localStorage.getItem("correct_guesses"));
    districts_to_guess = shuffledDistricts;
    
    const clickedDistrict = document.getElementById(name);

    console.log(districts_to_guess[0]);
    console.log(districts_to_guess.length);

    if (name == districts_to_guess[0]) {
        localStorage.setItem("correct_guesses", JSON.stringify(corr_guesses + 1));
        clickedDistrict.style.fill = "#00FF55";
        districts_to_guess.shift();
        checkIfGameIsOver();
    } else if (districts_to_guess.includes(name)){
        // clickedDistrict.style.fill = "red";
    }

    localStorage.setItem("districts_to_guess", JSON.stringify(districts_to_guess));

    const districtToBeGuessed = document.getElementById("districtToBeGuessed");
    const district = getDistrict();

    // Set the text content of the paragraph element
    districtToBeGuessed.textContent = district;
    numberOfGuessed.textContent = getNumberOfDistrictsGuessed() + "/" + districts.length;
}

function guessDistrictHard(name) {
    const shuffledDistricts = JSON.parse(localStorage.getItem("districts_to_guess"));
    const corr_guesses = JSON.parse(localStorage.getItem("correct_guesses"));
    districts_to_guess = shuffledDistricts;
    
    const clickedDistrict = document.getElementById(name);

    console.log(districts_to_guess[0]);
    console.log(districts_to_guess.length);

    if (name == districts_to_guess[0]) {
        localStorage.setItem("correct_guesses", JSON.stringify(corr_guesses + 1));
        clickedDistrict.style.fill = "#00FF55";
        districts_to_guess.shift();
        checkIfGameIsOver();
    } else if (districts_to_guess.includes(name)){
        document.getElementById(districts_to_guess[0]).style.fill = "#000055";
        // clickedDistrict.style.fill = "red";
        districts_to_guess.length = 0;
        alert("Game over!");
    }

    localStorage.setItem("districts_to_guess", JSON.stringify(districts_to_guess));

    const districtToBeGuessed = document.getElementById("districtToBeGuessed");
    const district = getDistrict();

    if (district != null) {
        // Set the text content of the paragraph element
        districtToBeGuessed.textContent = district;
        numberOfGuessed.textContent = getNumberOfDistrictsGuessed() + "/" + districts.length;
    }
}

function guessDistrictEasy(name) {
    const shuffledDistricts = JSON.parse(localStorage.getItem("districts_to_guess"));
    const curr_guesses = JSON.parse(localStorage.getItem("wrong_guesses"));
    const corr_guesses = JSON.parse(localStorage.getItem("correct_guesses"));
    districts_to_guess = shuffledDistricts;
    wrong_guesses = curr_guesses;

    const clickedDistrict = document.getElementById(name);

    console.log(districts_to_guess[0]);
    console.log(districts_to_guess.length);

    if (name == districts_to_guess[0]) {
        localStorage.setItem("correct_guesses", JSON.stringify(corr_guesses + 1));
        wrong_guesses = 0;
        clickedDistrict.style.fill = "#00FF55";
        districts_to_guess.shift();
        checkIfGameIsOver();
    } else if (districts_to_guess.includes(name)){
        // clickedDistrict.style.fill = "red";
        wrong_guesses += 1;
        if (wrong_guesses == 3) {
            localStorage.setItem("correct_guesses", JSON.stringify(corr_guesses + 1));
            wrong_guesses = 0;
            // style the correct district green
            const correctDistrict = document.getElementById(districts_to_guess[0]);
            correctDistrict.style.fill = "#00FF55";
            districts_to_guess.shift();
            checkIfGameIsOver();
        }
    }

    localStorage.setItem("wrong_guesses", JSON.stringify(wrong_guesses));
    localStorage.setItem("districts_to_guess", JSON.stringify(districts_to_guess));

    const districtToBeGuessed = document.getElementById("districtToBeGuessed");
    const district = getDistrict();

    // Set the text content of the paragraph element
    districtToBeGuessed.textContent = district;
    numberOfGuessed.textContent = getNumberOfDistrictsGuessed() + "/" + districts.length;
}


document.addEventListener("DOMContentLoaded", function () {
    const districtToBeGuessed = document.getElementById("districtToBeGuessed");
    const numberOfGuessed = document.getElementById("numberOfGuessed");
    const district = getDistrict();

    // Set the text content of the paragraph element
    districtToBeGuessed.textContent = district;
    numberOfGuessed.textContent = getNumberOfDistrictsGuessed() + "/" + districts.length;


    const timer = document.getElementById("timer");
    let remainingTime = 60 * 20; // 20 minutes

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        remainingTime--;
        timer.textContent = Math.floor(remainingTime / 60) + ":" + remainingTime % 60;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            timer.textContent = "Time's up!";
            localStorage.setItem("districts_to_guess", JSON.stringify(0));
            alert("Game over!");
        }

        let districts_to_guess = JSON.parse(localStorage.getItem("districts_to_guess"));
        if (districts_to_guess.length == 0) {
            clearInterval(countdownInterval);
        }
        
    }, 1000); // 1 second
});

