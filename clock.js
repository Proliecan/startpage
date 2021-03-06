function startClock() {
    const time = new Date();
    let h = twoDigit(time.getHours());
    let m = twoDigit(time.getMinutes());
    document.getElementById("clock").innerHTML = h + ":" + m;

    let weekday = {weekday: "long"}
    let date = {day: "2-digit", month: "2-digit", year: "numeric"}
    let lang = document.documentElement.lang;
    document.getElementById("weekday").innerHTML = time.toLocaleDateString(lang, weekday);
    document.getElementById("date").innerHTML = time.toLocaleDateString(lang, date);
    setTimeout(startClock, 1000);
}

function twoDigit(num){
    if (num < 10){ num = ("0" + num)};
    return num;
}