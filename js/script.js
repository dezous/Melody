$(document).ready(function () {

    var currentFloor = 2;
    var counterUp = $('.counter-btn--up'); // кнопка увеличения этажа
    var counterDown = $('.counter-btn--down'); // кнопка уменьшения этажа
    var floorPath =  $('.home-img path') // наши этажи SVG

    // При наведении мышкой на этаж 
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
        currentFloor = $(this).attr('data-floor'); // получаем текущей значение этажа
        $('.counter').text(currentFloor); // заносим текущий этаж в счетчик
    });

    // При нажатии на стрелку вверх
    counterUp.on('click', function () {
        if (currentFloor < 18 ) {
            currentFloor++; // увеличиваем этаж на 1
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, 
                useGrouping: false }); //  форматируем переменную с этажем, чтобы было 01, а не 1
            $('.counter').text(usCurrentFloor); // изменяем текущий счетчик
            floorPath.removeClass('current-floor'); // убираем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс текущему этажу
        }
    })
    // При нажатии на стрелку вниз
    counterDown.on('click', function () {
        if (currentFloor > 2 ) {
            currentFloor--; // уменьшаем этаж на 1
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, 
                useGrouping: false }); //  форматируем переменную с этажем, чтобы было 01, а не 1
            $('.counter').text(usCurrentFloor); // изменяем текущий счетчик
            floorPath.removeClass('current-floor'); // убираем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс текущему этажу
        }
    })
});