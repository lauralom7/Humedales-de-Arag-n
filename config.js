var config = {
    style: 'mapbox://styles/lauralmom/cmcsyfhpx037701sd9oo4cjjs',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibGF1cmFsbW9tIiwiYSI6ImNtY3N5N212NjAxM2UycnM4ejdyNW51MjYifQ.jj7-2PuorkEhci4LwqjUnA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Humedales de Aragón',
    subtitle: 'Storymaps de los humedales de Aragón.',
    byline: 'Laura López',
    footer: 'Source: https://datos.gob.es/es/. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'la laguna de Gallocanta',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Laguna_de_Gallocanta%2C_Aragon%2C_Spain_-_endorheic_lake.jpg',
            description: 'La Laguna de Gallocanta se sitúa en un altiplano a casi 1.000 metros de altitud. Es uno de los humedales salinos más grandes e importantes de Europa occidental. Su carácter endorreico significa que no tiene salida a un río o al mar, y sus aguas son de elevada salinidad debido a la composición del suelo y la intensa evaporación.',
            location: {
                center: [-1.50224, 40.97082],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Saladas de Sastago-Bujaraloz',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/LAGUNA-DE-LA-PLAYA.jpg',
            description: 'Complejo endorreico de gran valor ecológico, ubicado en el sector más árido de la cuenca del Ebro. <br>  <br> El complejo está formado por 26 cubetas lagunares de diferentes tamaños y profundidades. Estas lagunas son de agua salada y de carácter temporal, lo que significa que retienen agua durante un corto periodo de tiempo (principalmente en invierno y primavera) y luego se desecan, precipitando cristales de minerales salinos. La laguna más grande es La Playa, con una superficie inundable de hasta 2 km²..',
            location: {
                center: [-0.18727, 41.41918],
                zoom: 11.73,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Saladas de Chiprana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paisaje_laguna_salada_de_Chiprana.png/500px-Paisaje_laguna_salada_de_Chiprana.png',
            description: 'Conjunto lagunar de excepcional valor ecológico, situado en el término municipal de Chiprana. <br>  <br> Única laguna endorreica salina de aguas permanentes y profundas en Europa Occidental. A diferencia de otras saladas que son temporales, la Salada Grande de Chiprana (la principal del complejo) mantiene un volumen de agua considerable durante todo el año, alcanzando profundidades de hasta 5,6 metros.',
            location: {
                center: [-0.15899, 41.24317],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Tremedales de Orihuela',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Rio_de_piedra_2.jpg',
            description: 'Los Tremedales de Orihuela, son turberas de alta montaña, únicas en ambientes mediterráneos. Destacan por su excepcional flora, que incluye plantas carnívoras como la Drosera, y la presencia de extensos "ríos de piedras" de origen periglaciar. ',
            location: {
                center: [-1.46648, 40.94698],
                zoom: 13.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
