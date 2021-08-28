$(document).ready(function () {

    var currentFloor = 2;
    var counterUp = $('.counter-btn--up'); // кнопка увеличения этажа
    var counterDown = $('.counter-btn--down'); // кнопка уменьшения этажа
    var floorPath = $('.home-img path') // наши этажи SVG
    var apartmentsPath = $('.flats path') // наши квартиры SVG
    var flats = $('.flats__link'); // наши квартиры
    var viewFlatsButton = $('.view-flats'); // кнопка "Смотреть  квартиры на этаже"
    var modal = $('.modal'); // модальное окно
    var modalClose = $('.modal__close'); // кнопка для закрытия модального окна

    floorPath.on('click', toggleModal) // при клике на этаж - открыть окно

    modalClose.on('click', toggleModal) // при клике на кнопку "закрыть" - убрать окно

    viewFlatsButton.on('click', toggleModal) // при клике на кнопку "Смотреть  квартиры на этаже" - открыть окно окно

    // При наведении мышкой на этаж 
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
        currentFloor = $(this).attr('data-floor'); // получаем текущей значение этажа
        $('.counter').text(currentFloor); // заносим текущий этаж в счетчик
    });

    // При нажатии на стрелку вверх
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++; // увеличиваем этаж на 1
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }); //  форматируем переменную с этажем, чтобы было 01, а не 1
            $('.counter').text(usCurrentFloor); // изменяем текущий счетчик
            floorPath.removeClass('current-floor'); // убираем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс текущему этажу
        }
    })
    // При нажатии на стрелку вниз
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--; // уменьшаем этаж на 1
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }); //  форматируем переменную с этажем, чтобы было 01, а не 1
            $('.counter').text(usCurrentFloor); // изменяем текущий счетчик
            floorPath.removeClass('current-floor'); // убираем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс текущему этажу
        }
    })

    // При наведении на квартиру на картинке
    apartmentsPath.on('mouseover', function () {
        var currentFlat = $(this).attr('data-apartments'); // берем текущий номер квартиры
        $(`[data-flat='${currentFlat}']`).addClass('active'); // ищем такой же в списке и даем активный класс
    });

    // При наведении на квартиру в списке
    flats.on('mouseover', function () {
        var currentFlat = $(this).attr('data-flat'); // берем текущий номер квартиры
        $(`[data-apartments='${currentFlat}']`).addClass('active'); // ищем такой же на картинке и даем активный класс
    });

    // При отведении мыши с квартиры на картинке
    apartmentsPath.on('mouseleave', function () {
        flats.removeClass('active'); // убираем активный класс у всех квартир в списке

    })

    // При отведении мыши с квартиры в списке
    flats.on('mouseleave', function () {
        apartmentsPath.removeClass('active'); // убираем активный класс у всех квартир на картинке
    })

    function toggleModal() {
        // функция открыть-закрыть окно
        modal.toggleClass('open');
    }
});