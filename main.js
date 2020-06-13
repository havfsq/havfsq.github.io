var word;
var words;

function run() {
    scorePersents = 0;
    wasWords = 0;
    // Получаем весь текст из поля "Настройки"
    var text = document.getElementById('alise').value.split('\n');

    words = new Array(text.length);

    // Разбиваем полученный текст..
    for (var i = 0, ln = text.length; i < ln; ++i) {
        words[i] = splitWords(text[i]);
    }
    console.log(words);

    // Выводим случайное русское слово..
    word = getRandomWord(words);
    output(word[0]);
}

// isFullUpdate - обносить или оставить предидущее слово
function update(isFullUpdate) {
    // Выводим случайное русское слово..
    if (isFullUpdate) {
        word = getRandomWord(words);
    }
    output(word[0]);
}

function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        check();
    }
}

function splitWords(str) {
    array = str.split(":");
    return array;
    console.log(array);
}

function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function output(word) {
    document.getElementById("output").value = word;
}

// ПРОВЕРКА И ОБНОВЛЕНИЕ ЦИКЛА!!!
function check(){
    var input = document.getElementById('input').value;
    input = input.replace(/\s+/g, '');

    for (var i = 1; i < word.length; i++) {
        word[1] = word[1].replace(/\s+/g, '');
    }
    
    var isRight = false;

    for (var i = 1; i < word.length; i++) {
        if (input.toLowerCase() == word[i].toLowerCase()) {
            console.log(word[1]);
            console.log(input);
            console.log("ture");
            isRight = history(input, word[0], true);
            break;
        }
    }
    if (!isRight) {
        console.log(word[1]);
        console.log(input);
        console.log("false");
        isRight = history(input, word[0], false);
    }
    /*
    if (input.toLowerCase() == word[1].toLowerCase()) {
        console.log(word[1]);
        console.log(input);
        console.log("ture");
        isRight = history(input, word[0], true);
    }
    else {
        console.log(word[1]);
        console.log(input);
        console.log("false");
        isRight = history(input, word[0], false);
    }
    */

    document.getElementById('input').value = ''
    update(isRight);
}

function history(uinput, word, isRight) {
    var newp = document.createElement('p');
    if (isRight) {
        newp.innerHTML += '<p class="correct">'+ uinput + ' = '+ word +'</p>';
    }
    else {
        newp.innerHTML += '<p class="wrong">'+ uinput + ' != '+ word +'</p>';
    }

    document.getElementById("history").prepend(newp);
    return isRight;
}