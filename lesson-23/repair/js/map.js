ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.61140907, 37.20112250],
            zoom: 16
        }),
    myPieChart = new ymaps.Placemark([
      55.61140907, 37.20112250
    ], {
        // Зададим произвольный макет метки.
        iconLayout: 'default#pieChart',
        // Радиус диаграммы в пикселях.
        iconPieChartRadius: 30,
        // Радиус центральной части макета.
        iconPieChartCoreRadius: 10,
        // Стиль заливки центральной части.
        iconPieChartCoreFillStyle: '#ffffff',
        // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeStyle: '#ffffff',
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeWidth: 3,
        // Максимальная ширина подписи метки.
        iconPieChartCaptionMaxWidth: 200
    }); 
    myMap.geoObjects
    .add(myPieChart)
    .add(new ymaps.Placemark([55.61140907, 37.20112250], {
        balloonContent: 'г. Москва, ул. Ленина, д. 10, корпус 2, оф. 308'
    }, {
        preset: 'islands#icon',
        iconColor: '#ffd200'
    }));
    myMap.behaviors.disable('scrollZoom');
};