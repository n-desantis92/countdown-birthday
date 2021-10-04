const anno = nextYear();
const mese = month();
const correntMonth = (new Date().getMonth()) + 1;
const giorno = day();
var yearNow = new Date().getYear() + 1901;
var eta = '';
var battuta = '';
const strYear = String(yearNow);



const countdown = () => {
    const countDate = new Date(`${mese} ${giorno}, ${strYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    // differenza tra le date
    const gap = countDate - now;

    // definisco i tempi
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    // calcolo la differenza singola
    var textDay = Math.floor(gap / day);
    if (textDay >= 365) {
        textDay = textDay - 365;
        eta = (yearNow - anno) - 1 ;
    } else if (textDay < 365){
        eta = yearNow - anno;
    }
    if (eta <= 18) {
        battuta = 'ne hai di strada da fare giovane hobbit!'
    } else if (eta > 18 && eta <= 30 ){
        battuta = 'sei un giovane combattente non ti fermerai davanti a nulla!'
    } else if (eta > 30 && eta <= 40) {
        battuta = 'sei il comandante delle legioni felix condurrai il tuo esercito alla vittoria!'
    } else if (eta > 40 && eta <= 50) {
        battuta = 'comandante è ora di iniziare a pensare al ritiro dal campo di battaglia!'
    } else if (eta > 50) {
        battuta = 'è ora del pensionamento! perchè non ragioni sul prendere una casetta dove passare la vecchiaia a gioca a burraco?'
    }
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // inserisco i dati nell'html
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    document.querySelector('.anni').innerText = eta + ' anni';
    document.querySelector('.battuta').innerText = battuta;
};

// lancio la funzione ogni secondo con la setInterval

setInterval(countdown,1000)

function nextYear() {
    let ybirth = prompt('inserisci l\'anno di nascita');
    let year = Number(ybirth);
    
    if (year >= 1900 && year <= 2022) {
        return ybirth
    } else {
        this.nextYear();
    }
}

function day() {
    let day = prompt('inserisci il giorno di nascita');

    if (day >= 1 && day <= 31) {
        return day
    } else {
        this.day();
    }
}

function month() {
    let month = prompt('inserisci il numero del mese di nascita');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
    
    if (month >= 1 && month <= 12) {

        return months[(month - 1)]
    } else {
        this.month();
    }
}