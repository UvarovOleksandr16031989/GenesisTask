$(document).ready(function() {
    var elem = document.getElementById('DaySelect');
    var i = 1;
    while (i < 32) {
        elem.innerHTML += `<option class="form__option">
            ${i}
        </option>`;
        i++;
    }
});

$(document).ready(function() {
    var mouth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var elem = document.getElementById("MonthSelect");
    var i = 0;
    while (i < 12) {
        elem.innerHTML += `<option class="form__option">
            ${mouth[i]}
        </option>`;
        i++;
    }
});

$(document).ready(function() {
    var elem = document.getElementById("yearSelect");
    var i = 1920;
    while (i < 2019) {
        elem.innerHTML += `<option class="form__option">
            ${i}
        </option>`;
        i++;
    }
});


//burger active and visibility nav
$('.burger,.nav').click(function () {
    $('.burger__item').toggleClass('active');
    $('.nav').toggleClass('visibility');
    $('.burger').toggleClass('fixed')

});

