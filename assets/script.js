var nineText = $('.nineText');
var tenText = $('.tenText');
var elevenText = $('.elevenText');
var twelveText = $('.twelveText');
var oneText = $('.oneText');
var twoText = $('.twoText');
var threeText = $('.threeText');
var fourText = $('.fourText');
var fiveText = $('.fiveText');

var textArea = $('<textarea>');

var nineBtn = $('.nineBtn');
var tenBtn = $('.tenBtn');
var elevenBtn = $('.elevenBtn');
var twelveBtn = $('.twelveBtn');
var oneBtn = $('.oneBtn');
var twoBtn = $('.twoBtn');
var threeBtn = $('.threeBtn');
var fourBtn = $('.fourBtn');
var fiveBtn = $('.fiveBtn');


var currentDay = $('#currentDay');

var today = moment().format("MMM Do, YYYY");
currentDay.text(today);


var hour = moment().format("kk");

var arrayHourText = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var arrayNumberText = [nineText, tenText, elevenText, twelveText, oneText, twoText, threeText, fourText, fiveText]

init();
hourTime();

nineBtn.on('click', function() {
    localStorage.setItem('nineText', nineText.val());
})

tenBtn.on('click', function() {
    localStorage.setItem('tenText', tenText.val());
})

elevenBtn.on('click', function() {
    localStorage.setItem('elevenText', elevenText.val());
})

twelveBtn.on('click', function() {
    localStorage.setItem('twelveText', twelveText.val());
})

oneBtn.on('click', function() {
    localStorage.setItem('oneText', oneText.val());
})

twoBtn.on('click', function() {
    localStorage.setItem('twoText', twoText.val());
})

threeBtn.on('click', function() {
    localStorage.setItem('threeText', threeText.val());
})

fourBtn.on('click', function() {
    localStorage.setItem('fourText', fourText.val());
})

fiveBtn.on('click', function() {
    localStorage.setItem('fiveText', fiveText.val());
})


function init() {
    var storedNineText = localStorage.getItem('nineText');
    var storedTenText = localStorage.getItem('tenText');
    var storedElevenText = localStorage.getItem('elevenText');
    var storedTwelveText = localStorage.getItem('twelveText');
    var storedOneText = localStorage.getItem('oneText');
    var storedTwoText = localStorage.getItem('twoText');
    var storedThreeText = localStorage.getItem('threeText');
    var storedFourText = localStorage.getItem('fourText');
    var storedFiveText = localStorage.getItem('fiveText');


        if (storedNineText !== null) {
            nineText.text(storedNineText);
        }
        if (storedTenText !== null) {
            tenText.text(storedTenText);
        }
        if (storedElevenText !== null) {
            elevenText.text(storedElevenText);
        }
        if (storedTwelveText !== null) {
            twelveText.text(storedTwelveText);
        }
        if (storedOneText !== null) {
            oneText.text(storedOneText);
        }
        if (storedTwoText !== null) {
            twoText.text(storedTwoText);
        }
        if (storedThreeText !== null) {
            threeText.text(storedThreeText);
        }
        if (storedFourText !== null) {
            fourText.text(storedFourText);
        }
        if (storedFiveText !== null) {
            fiveText.text(storedFiveText);
        }
        
        
}

function hourTime() {
    for (let i = 0; i < arrayHourText.length; i++) {
        if (Number(hour) > arrayHourText[i]) {
            arrayNumberText[i].addClass("past");
        }
        else if (Number(hour) === arrayHourText[i]) {
            arrayNumberText[i].addClass("present");
        }
        else {
            arrayNumberText[i].addClass("future");
        }
    }
}

