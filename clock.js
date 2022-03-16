function startClock() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    document.getElementById("clock").innerHTML = h + ":" + m;

    let weekday = {weekday: "long"}
    let lang = document.documentElement.lang;
    document.getElementById("weekday").innerHTML = time.toLocaleDateString(lang, weekday);
    document.getElementById("date").innerHTML = time.toLocaleDateString(lang);
    setTimeout(startClock, 1000);
}