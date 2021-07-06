var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_DL7secciones_0 = new ol.format.GeoJSON();
var features_DL7secciones_0 = format_DL7secciones_0.readFeatures(json_DL7secciones_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DL7secciones_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DL7secciones_0.addFeatures(features_DL7secciones_0);var lyr_DL7secciones_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DL7secciones_0, 
                style: style_DL7secciones_0,
    title: 'DL 7 secciones<br />\
    <img src="styles/legend/DL7secciones_0_0.png" /> SECCION 0121<br />\
    <img src="styles/legend/DL7secciones_0_1.png" /> SECCION 0123<br />\
    <img src="styles/legend/DL7secciones_0_2.png" /> SECCION 0124<br />\
    <img src="styles/legend/DL7secciones_0_3.png" /> SECCION 0125<br />\
    <img src="styles/legend/DL7secciones_0_4.png" /> SECCION 0128<br />\
    <img src="styles/legend/DL7secciones_0_5.png" /> SECCION 0130<br />\
    <img src="styles/legend/DL7secciones_0_6.png" /> SECCION 0136<br />\
    <img src="styles/legend/DL7secciones_0_7.png" /> SECCION 0137<br />\
    <img src="styles/legend/DL7secciones_0_8.png" /> SECCION 0140<br />\
    <img src="styles/legend/DL7secciones_0_9.png" /> SECCION 2199<br />\
    <img src="styles/legend/DL7secciones_0_10.png" /> SECCION 2200<br />\
    <img src="styles/legend/DL7secciones_0_11.png" /> SECCION 2201<br />\
    <img src="styles/legend/DL7secciones_0_12.png" /> SECCION 2202<br />\
    <img src="styles/legend/DL7secciones_0_13.png" /> SECCION 2203<br />\
    <img src="styles/legend/DL7secciones_0_14.png" /> SECCION 2204<br />\
    <img src="styles/legend/DL7secciones_0_15.png" /> SECCION 2205<br />\
    <img src="styles/legend/DL7secciones_0_16.png" /> SECCION 2206<br />\
    <img src="styles/legend/DL7secciones_0_17.png" /> SECCION 2207<br />\
    <img src="styles/legend/DL7secciones_0_18.png" /> SECCION 2208<br />\
    <img src="styles/legend/DL7secciones_0_19.png" /> SECCION 2209<br />\
    <img src="styles/legend/DL7secciones_0_20.png" /> SECCION 2210<br />\
    <img src="styles/legend/DL7secciones_0_21.png" /> SECCION 2211<br />'
        });var format_DL16secciones_1 = new ol.format.GeoJSON();
var features_DL16secciones_1 = format_DL16secciones_1.readFeatures(json_DL16secciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DL16secciones_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DL16secciones_1.addFeatures(features_DL16secciones_1);var lyr_DL16secciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DL16secciones_1, 
                style: style_DL16secciones_1,
    title: 'DL 16 secciones<br />\
    <img src="styles/legend/DL16secciones_1_0.png" /> SECCION 0068<br />\
    <img src="styles/legend/DL16secciones_1_1.png" /> SECCION 0069<br />\
    <img src="styles/legend/DL16secciones_1_2.png" /> SECCION 0070<br />\
    <img src="styles/legend/DL16secciones_1_3.png" /> SECCION 0071<br />\
    <img src="styles/legend/DL16secciones_1_4.png" /> SECCION 0072<br />\
    <img src="styles/legend/DL16secciones_1_5.png" /> SECCION 0073<br />\
    <img src="styles/legend/DL16secciones_1_6.png" /> SECCION 0074<br />\
    <img src="styles/legend/DL16secciones_1_7.png" /> SECCION 0075<br />\
    <img src="styles/legend/DL16secciones_1_8.png" /> SECCION 0076<br />\
    <img src="styles/legend/DL16secciones_1_9.png" /> SECCION 0078<br />\
    <img src="styles/legend/DL16secciones_1_10.png" /> SECCION 0079<br />\
    <img src="styles/legend/DL16secciones_1_11.png" /> SECCION 0080<br />\
    <img src="styles/legend/DL16secciones_1_12.png" /> SECCION 0081<br />\
    <img src="styles/legend/DL16secciones_1_13.png" /> SECCION 0082<br />\
    <img src="styles/legend/DL16secciones_1_14.png" /> SECCION 0083<br />\
    <img src="styles/legend/DL16secciones_1_15.png" /> SECCION 0084<br />\
    <img src="styles/legend/DL16secciones_1_16.png" /> SECCION 0085<br />\
    <img src="styles/legend/DL16secciones_1_17.png" /> SECCION 0086<br />\
    <img src="styles/legend/DL16secciones_1_18.png" /> SECCION 0087<br />\
    <img src="styles/legend/DL16secciones_1_19.png" /> SECCION 0088<br />\
    <img src="styles/legend/DL16secciones_1_20.png" /> SECCION 0089<br />\
    <img src="styles/legend/DL16secciones_1_21.png" /> SECCION 0090<br />\
    <img src="styles/legend/DL16secciones_1_22.png" /> SECCION 0091<br />\
    <img src="styles/legend/DL16secciones_1_23.png" /> SECCION 0092<br />\
    <img src="styles/legend/DL16secciones_1_24.png" /> SECCION 0093<br />\
    <img src="styles/legend/DL16secciones_1_25.png" /> SECCION 0094<br />\
    <img src="styles/legend/DL16secciones_1_26.png" /> SECCION 0095<br />\
    <img src="styles/legend/DL16secciones_1_27.png" /> SECCION 0096<br />\
    <img src="styles/legend/DL16secciones_1_28.png" /> SECCION 0097<br />\
    <img src="styles/legend/DL16secciones_1_29.png" /> SECCION 0098<br />\
    <img src="styles/legend/DL16secciones_1_30.png" /> SECCION 0099<br />\
    <img src="styles/legend/DL16secciones_1_31.png" /> SECCION 0100<br />\
    <img src="styles/legend/DL16secciones_1_32.png" /> SECCION 0101<br />\
    <img src="styles/legend/DL16secciones_1_33.png" /> SECCION 0102<br />\
    <img src="styles/legend/DL16secciones_1_34.png" /> SECCION 2170<br />\
    <img src="styles/legend/DL16secciones_1_35.png" /> SECCION 2171<br />\
    <img src="styles/legend/DL16secciones_1_36.png" /> SECCION 2172<br />\
    <img src="styles/legend/DL16secciones_1_37.png" /> SECCION 2173<br />\
    <img src="styles/legend/DL16secciones_1_38.png" /> SECCION 2174<br />\
    <img src="styles/legend/DL16secciones_1_39.png" /> SECCION 2175<br />\
    <img src="styles/legend/DL16secciones_1_40.png" /> SECCION 2176<br />\
    <img src="styles/legend/DL16secciones_1_41.png" /> SECCION 2177<br />\
    <img src="styles/legend/DL16secciones_1_42.png" /> SECCION 2178<br />\
    <img src="styles/legend/DL16secciones_1_43.png" /> SECCION 2179<br />\
    <img src="styles/legend/DL16secciones_1_44.png" /> SECCION 2180<br />\
    <img src="styles/legend/DL16secciones_1_45.png" /> SECCION 2181<br />\
    <img src="styles/legend/DL16secciones_1_46.png" /> SECCION 2182<br />\
    <img src="styles/legend/DL16secciones_1_47.png" /> SECCION 2183<br />\
    <img src="styles/legend/DL16secciones_1_48.png" /> SECCION 2184<br />\
    <img src="styles/legend/DL16secciones_1_49.png" /> SECCION 2185<br />\
    <img src="styles/legend/DL16secciones_1_50.png" /> SECCION 2186<br />\
    <img src="styles/legend/DL16secciones_1_51.png" /> SECCION 2187<br />\
    <img src="styles/legend/DL16secciones_1_52.png" /> SECCION 2188<br />\
    <img src="styles/legend/DL16secciones_1_53.png" /> SECCION 2189<br />\
    <img src="styles/legend/DL16secciones_1_54.png" /> SECCION 2190<br />\
    <img src="styles/legend/DL16secciones_1_55.png" /> SECCION 2191<br />\
    <img src="styles/legend/DL16secciones_1_56.png" /> SECCION 2192<br />\
    <img src="styles/legend/DL16secciones_1_57.png" /> SECCION 2193<br />\
    <img src="styles/legend/DL16secciones_1_58.png" /> SECCION 2194<br />\
    <img src="styles/legend/DL16secciones_1_59.png" /> SECCION 2195<br />\
    <img src="styles/legend/DL16secciones_1_60.png" /> SECCION 2421<br />\
    <img src="styles/legend/DL16secciones_1_61.png" /> SECCION 2422<br />\
    <img src="styles/legend/DL16secciones_1_62.png" /> SECCION 2423<br />\
    <img src="styles/legend/DL16secciones_1_63.png" /> SECCION 2424<br />\
    <img src="styles/legend/DL16secciones_1_64.png" /> SECCION 2425<br />\
    <img src="styles/legend/DL16secciones_1_65.png" /> SECCION 2426<br />\
    <img src="styles/legend/DL16secciones_1_66.png" /> SECCION 2429<br />\
    <img src="styles/legend/DL16secciones_1_67.png" /> SECCION 2430<br />\
    <img src="styles/legend/DL16secciones_1_68.png" /> SECCION 2431<br />\
    <img src="styles/legend/DL16secciones_1_69.png" /> SECCION 2432<br />\
    <img src="styles/legend/DL16secciones_1_70.png" /> SECCION 2433<br />\
    <img src="styles/legend/DL16secciones_1_71.png" /> SECCION 2434<br />\
    <img src="styles/legend/DL16secciones_1_72.png" /> SECCION 2435<br />\
    <img src="styles/legend/DL16secciones_1_73.png" /> SECCION 2436<br />\
    <img src="styles/legend/DL16secciones_1_74.png" /> SECCION 2493<br />'
        });var format_DL5secciones_2 = new ol.format.GeoJSON();
var features_DL5secciones_2 = format_DL5secciones_2.readFeatures(json_DL5secciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DL5secciones_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DL5secciones_2.addFeatures(features_DL5secciones_2);var lyr_DL5secciones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DL5secciones_2, 
                style: style_DL5secciones_2,
    title: 'DL 5 secciones<br />\
    <img src="styles/legend/DL5secciones_2_0.png" /> SECCION 0063<br />\
    <img src="styles/legend/DL5secciones_2_1.png" /> SECCION 0066<br />\
    <img src="styles/legend/DL5secciones_2_2.png" /> SECCION 0103<br />\
    <img src="styles/legend/DL5secciones_2_3.png" /> SECCION 0104<br />\
    <img src="styles/legend/DL5secciones_2_4.png" /> SECCION 0105<br />\
    <img src="styles/legend/DL5secciones_2_5.png" /> SECCION 0106<br />\
    <img src="styles/legend/DL5secciones_2_6.png" /> SECCION 0107<br />\
    <img src="styles/legend/DL5secciones_2_7.png" /> SECCION 0108<br />\
    <img src="styles/legend/DL5secciones_2_8.png" /> SECCION 0109<br />\
    <img src="styles/legend/DL5secciones_2_9.png" /> SECCION 0110<br />\
    <img src="styles/legend/DL5secciones_2_10.png" /> SECCION 0111<br />\
    <img src="styles/legend/DL5secciones_2_11.png" /> SECCION 0112<br />\
    <img src="styles/legend/DL5secciones_2_12.png" /> SECCION 0113<br />\
    <img src="styles/legend/DL5secciones_2_13.png" /> SECCION 0114<br />\
    <img src="styles/legend/DL5secciones_2_14.png" /> SECCION 0115<br />\
    <img src="styles/legend/DL5secciones_2_15.png" /> SECCION 0116<br />\
    <img src="styles/legend/DL5secciones_2_16.png" /> SECCION 0117<br />\
    <img src="styles/legend/DL5secciones_2_17.png" /> SECCION 0118<br />\
    <img src="styles/legend/DL5secciones_2_18.png" /> SECCION 0119<br />\
    <img src="styles/legend/DL5secciones_2_19.png" /> SECCION 0120<br />\
    <img src="styles/legend/DL5secciones_2_20.png" /> SECCION 0122<br />\
    <img src="styles/legend/DL5secciones_2_21.png" /> SECCION 0126<br />\
    <img src="styles/legend/DL5secciones_2_22.png" /> SECCION 0127<br />\
    <img src="styles/legend/DL5secciones_2_23.png" /> SECCION 0131<br />\
    <img src="styles/legend/DL5secciones_2_24.png" /> SECCION 0132<br />\
    <img src="styles/legend/DL5secciones_2_25.png" /> SECCION 0133<br />\
    <img src="styles/legend/DL5secciones_2_26.png" /> SECCION 0134<br />\
    <img src="styles/legend/DL5secciones_2_27.png" /> SECCION 0135<br />\
    <img src="styles/legend/DL5secciones_2_28.png" /> SECCION 0138<br />\
    <img src="styles/legend/DL5secciones_2_29.png" /> SECCION 0139<br />\
    <img src="styles/legend/DL5secciones_2_30.png" /> SECCION 0150<br />\
    <img src="styles/legend/DL5secciones_2_31.png" /> SECCION 2166<br />\
    <img src="styles/legend/DL5secciones_2_32.png" /> SECCION 2167<br />\
    <img src="styles/legend/DL5secciones_2_33.png" /> SECCION 2168<br />\
    <img src="styles/legend/DL5secciones_2_34.png" /> SECCION 2169<br />\
    <img src="styles/legend/DL5secciones_2_35.png" /> SECCION 2196<br />\
    <img src="styles/legend/DL5secciones_2_36.png" /> SECCION 2197<br />\
    <img src="styles/legend/DL5secciones_2_37.png" /> SECCION 2198<br />\
    <img src="styles/legend/DL5secciones_2_38.png" /> SECCION 2416<br />\
    <img src="styles/legend/DL5secciones_2_39.png" /> SECCION 2417<br />\
    <img src="styles/legend/DL5secciones_2_40.png" /> SECCION 2418<br />\
    <img src="styles/legend/DL5secciones_2_41.png" /> SECCION 2419<br />\
    <img src="styles/legend/DL5secciones_2_42.png" /> SECCION 2420<br />\
    <img src="styles/legend/DL5secciones_2_43.png" /> SECCION 2427<br />\
    <img src="styles/legend/DL5secciones_2_44.png" /> SECCION 2428<br />\
    <img src="styles/legend/DL5secciones_2_45.png" /> SECCION 2438<br />\
    <img src="styles/legend/DL5secciones_2_46.png" /> SECCION 2439<br />\
    <img src="styles/legend/DL5secciones_2_47.png" /> SECCION 2440<br />\
    <img src="styles/legend/DL5secciones_2_48.png" /> SECCION 2441<br />\
    <img src="styles/legend/DL5secciones_2_49.png" /> SECCION 2442<br />\
    <img src="styles/legend/DL5secciones_2_50.png" /> SECCION 2443<br />\
    <img src="styles/legend/DL5secciones_2_51.png" /> SECCION 2444<br />\
    <img src="styles/legend/DL5secciones_2_52.png" /> SECCION 2445<br />\
    <img src="styles/legend/DL5secciones_2_53.png" /> SECCION 2446<br />\
    <img src="styles/legend/DL5secciones_2_54.png" /> SECCION 2447<br />\
    <img src="styles/legend/DL5secciones_2_55.png" /> SECCION 2448<br />\
    <img src="styles/legend/DL5secciones_2_56.png" /> SECCION 2449<br />\
    <img src="styles/legend/DL5secciones_2_57.png" /> SECCION 2450<br />\
    <img src="styles/legend/DL5secciones_2_58.png" /> SECCION 2452<br />\
    <img src="styles/legend/DL5secciones_2_59.png" /> SECCION 2453<br />\
    <img src="styles/legend/DL5secciones_2_60.png" /> SECCION 2454<br />\
    <img src="styles/legend/DL5secciones_2_61.png" /> SECCION 2455<br />\
    <img src="styles/legend/DL5secciones_2_62.png" /> SECCION 2456<br />\
    <img src="styles/legend/DL5secciones_2_63.png" /> SECCION 2457<br />\
    <img src="styles/legend/DL5secciones_2_64.png" /> SECCION 2458<br />\
    <img src="styles/legend/DL5secciones_2_65.png" /> SECCION 2459<br />\
    <img src="styles/legend/DL5secciones_2_66.png" /> SECCION 2460<br />\
    <img src="styles/legend/DL5secciones_2_67.png" /> SECCION 2461<br />\
    <img src="styles/legend/DL5secciones_2_68.png" /> SECCION 2462<br />\
    <img src="styles/legend/DL5secciones_2_69.png" /> SECCION 2463<br />\
    <img src="styles/legend/DL5secciones_2_70.png" /> SECCION 2464<br />\
    <img src="styles/legend/DL5secciones_2_71.png" /> SECCION 2465<br />\
    <img src="styles/legend/DL5secciones_2_72.png" /> SECCION 2466<br />\
    <img src="styles/legend/DL5secciones_2_73.png" /> SECCION 2467<br />\
    <img src="styles/legend/DL5secciones_2_74.png" /> SECCION 2468<br />\
    <img src="styles/legend/DL5secciones_2_75.png" /> SECCION 2469<br />\
    <img src="styles/legend/DL5secciones_2_76.png" /> SECCION 2470<br />\
    <img src="styles/legend/DL5secciones_2_77.png" /> SECCION 2471<br />\
    <img src="styles/legend/DL5secciones_2_78.png" /> SECCION 2472<br />\
    <img src="styles/legend/DL5secciones_2_79.png" /> SECCION 2473<br />\
    <img src="styles/legend/DL5secciones_2_80.png" /> SECCION 2474<br />\
    <img src="styles/legend/DL5secciones_2_81.png" /> SECCION 2475<br />\
    <img src="styles/legend/DL5secciones_2_82.png" /> SECCION 2476<br />\
    <img src="styles/legend/DL5secciones_2_83.png" /> SECCION 2477<br />\
    <img src="styles/legend/DL5secciones_2_84.png" /> SECCION 2478<br />\
    <img src="styles/legend/DL5secciones_2_85.png" /> SECCION 2479<br />\
    <img src="styles/legend/DL5secciones_2_86.png" /> SECCION 2480<br />\
    <img src="styles/legend/DL5secciones_2_87.png" /> SECCION 2481<br />\
    <img src="styles/legend/DL5secciones_2_88.png" /> SECCION 2482<br />\
    <img src="styles/legend/DL5secciones_2_89.png" /> SECCION 2483<br />\
    <img src="styles/legend/DL5secciones_2_90.png" /> SECCION 2484<br />\
    <img src="styles/legend/DL5secciones_2_91.png" /> SECCION 2485<br />\
    <img src="styles/legend/DL5secciones_2_92.png" /> SECCION 2486<br />\
    <img src="styles/legend/DL5secciones_2_93.png" /> SECCION 2487<br />\
    <img src="styles/legend/DL5secciones_2_94.png" /> SECCION 2488<br />\
    <img src="styles/legend/DL5secciones_2_95.png" /> SECCION 2489<br />\
    <img src="styles/legend/DL5secciones_2_96.png" /> SECCION 2490<br />\
    <img src="styles/legend/DL5secciones_2_97.png" /> SECCION 2491<br />\
    <img src="styles/legend/DL5secciones_2_98.png" /> SECCION 2492<br />\
    <img src="styles/legend/DL5secciones_2_99.png" /> SECCION 2494<br />\
    <img src="styles/legend/DL5secciones_2_100.png" /> SECCION 2495<br />\
    <img src="styles/legend/DL5secciones_2_101.png" /> SECCION 2496<br />\
    <img src="styles/legend/DL5secciones_2_102.png" /> SECCION 2497<br />\
    <img src="styles/legend/DL5secciones_2_103.png" /> SECCION 2498<br />\
    <img src="styles/legend/DL5secciones_2_104.png" /> SECCION 2499<br />\
    <img src="styles/legend/DL5secciones_2_105.png" /> SECCION 2500<br />\
    <img src="styles/legend/DL5secciones_2_106.png" /> SECCION 2501<br />\
    <img src="styles/legend/DL5secciones_2_107.png" /> SECCION 2502<br />\
    <img src="styles/legend/DL5secciones_2_108.png" /> SECCION 2503<br />\
    <img src="styles/legend/DL5secciones_2_109.png" /> SECCION 2504<br />\
    <img src="styles/legend/DL5secciones_2_110.png" /> SECCION 2505<br />\
    <img src="styles/legend/DL5secciones_2_111.png" /> SECCION 2506<br />\
    <img src="styles/legend/DL5secciones_2_112.png" /> SECCION 2507<br />\
    <img src="styles/legend/DL5secciones_2_113.png" /> SECCION 2508<br />\
    <img src="styles/legend/DL5secciones_2_114.png" /> SECCION 2509<br />\
    <img src="styles/legend/DL5secciones_2_115.png" /> SECCION 2510<br />\
    <img src="styles/legend/DL5secciones_2_116.png" /> SECCION 2511<br />\
    <img src="styles/legend/DL5secciones_2_117.png" /> SECCION 2512<br />\
    <img src="styles/legend/DL5secciones_2_118.png" /> SECCION 2513<br />\
    <img src="styles/legend/DL5secciones_2_119.png" /> SECCION 2514<br />\
    <img src="styles/legend/DL5secciones_2_120.png" /> SECCION 2711<br />\
    <img src="styles/legend/DL5secciones_2_121.png" /> SECCION 2712<br />\
    <img src="styles/legend/DL5secciones_2_122.png" /> SECCION 2713<br />\
    <img src="styles/legend/DL5secciones_2_123.png" /> SECCION 2714<br />\
    <img src="styles/legend/DL5secciones_2_124.png" /> SECCION 2721<br />\
    <img src="styles/legend/DL5secciones_2_125.png" /> SECCION 2734<br />\
    <img src="styles/legend/DL5secciones_2_126.png" /> SECCION 2737<br />\
    <img src="styles/legend/DL5secciones_2_127.png" /> SECION 2451<br />'
        });var format_DIAADIAREUNIONES_3 = new ol.format.GeoJSON();
var features_DIAADIAREUNIONES_3 = format_DIAADIAREUNIONES_3.readFeatures(json_DIAADIAREUNIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIAREUNIONES_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIAREUNIONES_3.addFeatures(features_DIAADIAREUNIONES_3);var lyr_DIAADIAREUNIONES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIAREUNIONES_3, 
                style: style_DIAADIAREUNIONES_3,
    title: 'DIA A DIA REUNIONES<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_0.png" /> 1- MISION SAN MARCOS 102<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_1.png" /> 10 - CONTIGO APRENDI #341<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_2.png" /> 11 - BENEMENTO #133<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_3.png" /> 12 - BARI #107<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_4.png" /> 13 - ALESSANDRIA #147<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_5.png" /> 14 - NAPOLES #227<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_6.png" /> 15 - COSENZA #422<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_7.png" /> 16 - LA MARTINA #579<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_8.png" /> 17 - RIO PASTASA # 836<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_9.png" /> 18 - ANDROMEDA #1228<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_10.png" /> 19 - DEL POMELO  #201<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_11.png" /> 2 - DAMASCO #434<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_12.png" /> 20 - JARDINES DEL ABETO #259<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_13.png" /> 21 - YUCA #803<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_14.png" /> 22 - MORELOS #106<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_15.png" /> 23 - DE LAS LILAS #900<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_16.png" /> 24 - JARILLA #614<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_17.png" /> 25 - RIO AZUL #602<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_18.png" /> 26 - TEOTIHUACAN #115<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_19.png" /> 27 - PASEO DEL NOGAL #311<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_20.png" /> 28 - CENTRAL #101<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_21.png" /> 29 - HIDALGO #449<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_22.png" /> 3 - SABINO #329<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_23.png" /> 30 - Maple #14<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_24.png" /> 31 - HACIENDA LA GUARDIA #536<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_25.png" /> 32 - AV. LOS FRESNOS #727<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_26.png" /> 33 - PRIVADA RIO LA SILLA #721<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_27.png" /> 34 - HIDALGO #449<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_28.png" /> 35 - CHAPALA #116<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_29.png" /> 36 - PORTUGAL #251<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_30.png" /> 37 - LAGUNA DE ZAMPOALA #306<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_31.png" /> 38 - FUENTE #213<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_32.png" /> 39 - SALTILLO #505<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_33.png" /> 4 - ALAMEDA #143<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_34.png" /> 40 - DEL OLIVO #419<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_35.png" /> 41 - 21 DE MARZO #136<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_36.png" /> 5 - MORA #760<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_37.png" /> 6 - ARGENTINA #230<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_38.png" /> 7 - BOLEVAR TORRE DE MAR #312<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_39.png" /> 8 - LA TERRAZA EVENTOS<br />\
    <img src="styles/legend/DIAADIAREUNIONES_3_40.png" /> 9 - BULEVARD JULIAN TREVIÑO #800<br />'
        });var format_DIAADIAdl5_4 = new ol.format.GeoJSON();
var features_DIAADIAdl5_4 = format_DIAADIAdl5_4.readFeatures(json_DIAADIAdl5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIAdl5_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIAdl5_4.addFeatures(features_DIAADIAdl5_4);var lyr_DIAADIAdl5_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIAdl5_4, 
                style: style_DIAADIAdl5_4,
    title: 'DIA A DIA dl5<br />\
    <img src="styles/legend/DIAADIAdl5_4_0.png" /> 1 - Portal de Santa Rosa<br />\
    <img src="styles/legend/DIAADIAdl5_4_1.png" /> 100 - EBANOS V<br />\
    <img src="styles/legend/DIAADIAdl5_4_2.png" /> 101-  PUEBLO NUEVO<br />\
    <img src="styles/legend/DIAADIAdl5_4_3.png" /> 102 - PRADOS DEL VIRREY<br />\
    <img src="styles/legend/DIAADIAdl5_4_4.png" /> 105 - CABECERA MUNICIPAL<br />\
    <img src="styles/legend/DIAADIAdl5_4_5.png" /> 106 - LOMAS DE SAN MARTIN<br />\
    <img src="styles/legend/DIAADIAdl5_4_6.png" /> 107 -  SAN JUAN, ZUAZUA N.L.<br />\
    <img src="styles/legend/DIAADIAdl5_4_7.png" /> 13 - Cosmopolis<br />\
    <img src="styles/legend/DIAADIAdl5_4_8.png" /> 15 - Paseo de las flores<br />\
    <img src="styles/legend/DIAADIAdl5_4_9.png" /> 22 - Cosmopolis<br />\
    <img src="styles/legend/DIAADIAdl5_4_10.png" /> 23 - El mezquital<br />\
    <img src="styles/legend/DIAADIAdl5_4_11.png" /> 24 - Valle de salduero<br />\
    <img src="styles/legend/DIAADIAdl5_4_12.png" /> 25 - Renaceres<br />\
    <img src="styles/legend/DIAADIAdl5_4_13.png" /> 28 -  Moises Saenz<br />\
    <img src="styles/legend/DIAADIAdl5_4_14.png" /> 35 - Balcones de Santa Rosa<br />\
    <img src="styles/legend/DIAADIAdl5_4_15.png" /> 36 - Los amarantos<br />\
    <img src="styles/legend/DIAADIAdl5_4_16.png" /> 39 - Artemio Treviño<br />\
    <img src="styles/legend/DIAADIAdl5_4_17.png" /> 4 - TREBOLES<br />\
    <img src="styles/legend/DIAADIAdl5_4_18.png" /> 40 - Moises Saenz<br />\
    <img src="styles/legend/DIAADIAdl5_4_19.png" /> 42 - cantoral 1 er sector<br />\
    <img src="styles/legend/DIAADIAdl5_4_20.png" /> 44 - LOMAS DE SAN MARTIN<br />\
    <img src="styles/legend/DIAADIAdl5_4_21.png" /> 45 - Arboledas  de Santa Rosa<br />\
    <img src="styles/legend/DIAADIAdl5_4_22.png" /> 47 - Ciudad Natura<br />\
    <img src="styles/legend/DIAADIAdl5_4_23.png" /> 48 - Valle de San Andres<br />\
    <img src="styles/legend/DIAADIAdl5_4_24.png" /> 5 - TREBOLES<br />\
    <img src="styles/legend/DIAADIAdl5_4_25.png" /> 55 - Ex hacienda Santa Francisco<br />\
    <img src="styles/legend/DIAADIAdl5_4_26.png" /> 57 - Ex Hacienda Santa Rosa<br />\
    <img src="styles/legend/DIAADIAdl5_4_27.png" /> 58 - Jardines de monterrey<br />\
    <img src="styles/legend/DIAADIAdl5_4_28.png" /> 6 - Pueblo Nuevo 4To sector<br />\
    <img src="styles/legend/DIAADIAdl5_4_29.png" /> 61 - Casas Reales<br />\
    <img src="styles/legend/DIAADIAdl5_4_30.png" /> 69 - EX HACIENDA SANTA ROSA<br />\
    <img src="styles/legend/DIAADIAdl5_4_31.png" /> 70 - CANTORAL 2<br />\
    <img src="styles/legend/DIAADIAdl5_4_32.png" /> 71 - VALLES DE HUINALA III<br />\
    <img src="styles/legend/DIAADIAdl5_4_33.png" /> 73 - CANTOREAL SEGUNDO SECTOR<br />\
    <img src="styles/legend/DIAADIAdl5_4_34.png" /> 74 -  INDEPENDENCIA<br />\
    <img src="styles/legend/DIAADIAdl5_4_35.png" /> 76 - CANTOREAL 2 Y 3 SECTOR<br />\
    <img src="styles/legend/DIAADIAdl5_4_36.png" /> 78 - COSMOPLOLIS 8<br />\
    <img src="styles/legend/DIAADIAdl5_4_37.png" /> 80- PASEO DE LAS FLORES<br />\
    <img src="styles/legend/DIAADIAdl5_4_38.png" /> 81 - CANTORAL SEGUNDO SECTOR<br />\
    <img src="styles/legend/DIAADIAdl5_4_39.png" /> 82 -ARBOLEDAS DE SANTA ROSA<br />\
    <img src="styles/legend/DIAADIAdl5_4_40.png" /> 83 - PORTAL Y RINCON DE SANTA ROSA<br />\
    <img src="styles/legend/DIAADIAdl5_4_41.png" /> 86 - MOISES SAENZ<br />\
    <img src="styles/legend/DIAADIAdl5_4_42.png" /> 88 - RESIDENCIAL APODACA<br />\
    <img src="styles/legend/DIAADIAdl5_4_43.png" /> 88- RESIDENCIAL APODACA<br />\
    <img src="styles/legend/DIAADIAdl5_4_44.png" /> 89 - CANTORAL PESQUERIA<br />\
    <img src="styles/legend/DIAADIAdl5_4_45.png" /> 91 - LOMAS DE SAN MARTIN<br />\
    <img src="styles/legend/DIAADIAdl5_4_46.png" /> 93 - TREBOLES<br />\
    <img src="styles/legend/DIAADIAdl5_4_47.png" /> 94 - LOMAS DE SAN MARTIN<br />\
    <img src="styles/legend/DIAADIAdl5_4_48.png" /> 95 - PUEBLO NUEVO<br />\
    <img src="styles/legend/DIAADIAdl5_4_49.png" /> 96 - VALLES DE HUINALA<br />'
        });var format_DIAADIAdl16_5 = new ol.format.GeoJSON();
var features_DIAADIAdl16_5 = format_DIAADIAdl16_5.readFeatures(json_DIAADIAdl16_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIAdl16_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIAdl16_5.addFeatures(features_DIAADIAdl16_5);var lyr_DIAADIAdl16_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIAdl16_5, 
                style: style_DIAADIAdl16_5,
    title: 'DIA A DIA dl16<br />\
    <img src="styles/legend/DIAADIAdl16_5_0.png" /> 10 - Nuevo Amanecer<br />\
    <img src="styles/legend/DIAADIAdl16_5_1.png" /> 103 - NUEVO LAS PUENTES<br />\
    <img src="styles/legend/DIAADIAdl16_5_2.png" /> 104 - METROPLEX<br />\
    <img src="styles/legend/DIAADIAdl16_5_3.png" /> 12 - Metroplex<br />\
    <img src="styles/legend/DIAADIAdl16_5_4.png" /> 14 - Nuevo Amanecer<br />\
    <img src="styles/legend/DIAADIAdl16_5_5.png" /> 16 - Ebanos<br />\
    <img src="styles/legend/DIAADIAdl16_5_6.png" /> 17 - Metroplex<br />\
    <img src="styles/legend/DIAADIAdl16_5_7.png" /> 20 - Los Fresnos<br />\
    <img src="styles/legend/DIAADIAdl16_5_8.png" /> 21 - Mujeres ilustres<br />\
    <img src="styles/legend/DIAADIAdl16_5_9.png" /> 26 - Enrramada<br />\
    <img src="styles/legend/DIAADIAdl16_5_10.png" /> 27 - Prados de la Cieneguita<br />\
    <img src="styles/legend/DIAADIAdl16_5_11.png" /> 29 - Santa Cecilia<br />\
    <img src="styles/legend/DIAADIAdl16_5_12.png" /> 3 - FRESNOS 1<br />\
    <img src="styles/legend/DIAADIAdl16_5_13.png" /> 30 - MUJERES ILUSTRES<br />\
    <img src="styles/legend/DIAADIAdl16_5_14.png" /> 31 - Praderas<br />\
    <img src="styles/legend/DIAADIAdl16_5_15.png" /> 37 -  Valle de las palmas<br />\
    <img src="styles/legend/DIAADIAdl16_5_16.png" /> 38 - Bosque real<br />\
    <img src="styles/legend/DIAADIAdl16_5_17.png" /> 43 - Ebanos<br />\
    <img src="styles/legend/DIAADIAdl16_5_18.png" /> 46 - Prados de la Cieneguita<br />\
    <img src="styles/legend/DIAADIAdl16_5_19.png" /> 49 - Ebanos<br />\
    <img src="styles/legend/DIAADIAdl16_5_20.png" /> 50 - Nueva Democracia<br />\
    <img src="styles/legend/DIAADIAdl16_5_21.png" /> 51 - Metroplex<br />\
    <img src="styles/legend/DIAADIAdl16_5_22.png" /> 52 - Ebanos<br />\
    <img src="styles/legend/DIAADIAdl16_5_23.png" /> 53 - Jardines de los Pinos<br />\
    <img src="styles/legend/DIAADIAdl16_5_24.png" /> 54 - Los Robles<br />\
    <img src="styles/legend/DIAADIAdl16_5_25.png" /> 56 - Nuevo Amanecer<br />\
    <img src="styles/legend/DIAADIAdl16_5_26.png" /> 59 - Enramada 6<br />\
    <img src="styles/legend/DIAADIAdl16_5_27.png" /> 60 - Nueva las puentes<br />\
    <img src="styles/legend/DIAADIAdl16_5_28.png" /> 62 - Villa luz<br />\
    <img src="styles/legend/DIAADIAdl16_5_29.png" /> 63 - Santa Cecilia<br />\
    <img src="styles/legend/DIAADIAdl16_5_30.png" /> 64 - METROPLEX<br />\
    <img src="styles/legend/DIAADIAdl16_5_31.png" /> 67 - NUEVO AMANECER 2DE<br />\
    <img src="styles/legend/DIAADIAdl16_5_32.png" /> 7 - Enrramada<br />\
    <img src="styles/legend/DIAADIAdl16_5_33.png" /> 72 - BOSQUE REAL<br />\
    <img src="styles/legend/DIAADIAdl16_5_34.png" /> 77 - PRADOS DE LA CIENEGUITA Y ROBLES<br />\
    <img src="styles/legend/DIAADIAdl16_5_35.png" /> 79 - PRADERAS Y ENRAMADA<br />\
    <img src="styles/legend/DIAADIAdl16_5_36.png" /> 84 - PASEO DE LAS PALMAS<br />\
    <img src="styles/legend/DIAADIAdl16_5_37.png" /> 85 - FRESNOS II<br />\
    <img src="styles/legend/DIAADIAdl16_5_38.png" /> 9 - Hacienda los pinos<br />\
    <img src="styles/legend/DIAADIAdl16_5_39.png" /> 90 - LOS PINOS<br />\
    <img src="styles/legend/DIAADIAdl16_5_40.png" /> 92 - LOS FRESNOS X<br />\
    <img src="styles/legend/DIAADIAdl16_5_41.png" /> 99 - VALLE DE APODACA<br />'
        });var format_CasillasDL16Casillas_DL16Point_6 = new ol.format.GeoJSON();
var features_CasillasDL16Casillas_DL16Point_6 = format_CasillasDL16Casillas_DL16Point_6.readFeatures(json_CasillasDL16Casillas_DL16Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasillasDL16Casillas_DL16Point_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CasillasDL16Casillas_DL16Point_6.addFeatures(features_CasillasDL16Casillas_DL16Point_6);var lyr_CasillasDL16Casillas_DL16Point_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasillasDL16Casillas_DL16Point_6, 
                style: style_CasillasDL16Casillas_DL16Point_6,
    title: 'Casillas DL16 Casillas_DL16 Point<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_0.png" /> B<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_1.png" /> B, C1<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_2.png" /> B, C1, C2<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_3.png" /> B, C1, C2, C3<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_4.png" /> B, C1, C2, C3, C4, C5<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_5.png" /> B, C1, C2, C3, C4, C5, C6<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_6.png" /> B, C1, C2, C3, C4, C5, C6, C7, C8<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_7.png" /> B, C1, C2, C3, C4, C5, C6, C7, C8, C9<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_8.png" /> C1<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_9.png" /> C2<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_10.png" /> C3<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_11.png" /> E1, E1C1, E1C2, E1C3, E1C4, E1C5, E1C6<br />\
    <img src="styles/legend/CasillasDL16Casillas_DL16Point_6_12.png" /> E1, E1C1, E1C2, E1C3, E1C4, E1C5, E1C6, E1C7, E1C8<br />'
        });var format_CasillasDL7Casillas_DL7Point_7 = new ol.format.GeoJSON();
var features_CasillasDL7Casillas_DL7Point_7 = format_CasillasDL7Casillas_DL7Point_7.readFeatures(json_CasillasDL7Casillas_DL7Point_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasillasDL7Casillas_DL7Point_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CasillasDL7Casillas_DL7Point_7.addFeatures(features_CasillasDL7Casillas_DL7Point_7);var lyr_CasillasDL7Casillas_DL7Point_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasillasDL7Casillas_DL7Point_7, 
                style: style_CasillasDL7Casillas_DL7Point_7,
    title: 'Casillas DL7 Casillas_DL7 Point<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_0.png" /> B<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_1.png" /> B, C1<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_2.png" /> B, C1, C2<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_3.png" /> B, C1, C2, C3<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_4.png" /> B, C1, C2, C3, C4, C5<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_5.png" /> B, C1, C2, C3, C4, C5, C6, C7, C8, C9<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_6.png" /> C1<br />\
    <img src="styles/legend/CasillasDL7Casillas_DL7Point_7_7.png" /> C2<br />'
        });var format_CasillasDL5Casillas_DL5Point_8 = new ol.format.GeoJSON();
var features_CasillasDL5Casillas_DL5Point_8 = format_CasillasDL5Casillas_DL5Point_8.readFeatures(json_CasillasDL5Casillas_DL5Point_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasillasDL5Casillas_DL5Point_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CasillasDL5Casillas_DL5Point_8.addFeatures(features_CasillasDL5Casillas_DL5Point_8);var lyr_CasillasDL5Casillas_DL5Point_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasillasDL5Casillas_DL5Point_8, 
                style: style_CasillasDL5Casillas_DL5Point_8,
    title: 'Casillas DL5 Casillas_DL5 Point<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_0.png" /> B<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_1.png" /> B, C1<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_2.png" /> B, C1, C2<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_3.png" /> B, C1, C2, C3<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_4.png" /> B, C1, C2, C3, C4<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_5.png" /> B, C1, C2, C3, C4, C5<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_6.png" /> B, C1, C2, C3, C4, C5, C6, C7, C8<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_7.png" /> C1<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_8.png" /> C2<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_9.png" /> C3<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_10.png" /> E1, E1C1, E1C2<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_11.png" /> E1, E1C1, E1C2, E1C3<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_12.png" /> E1, E1C1, E1C2, E1C3, E1C4, E1C5, E1C6<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_13.png" /> S1<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_14.png" /> S2<br />\
    <img src="styles/legend/CasillasDL5Casillas_DL5Point_8_15.png" /> S3<br />'
        });var format_DIAADIAdl7_9 = new ol.format.GeoJSON();
var features_DIAADIAdl7_9 = format_DIAADIAdl7_9.readFeatures(json_DIAADIAdl7_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIAdl7_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIAdl7_9.addFeatures(features_DIAADIAdl7_9);var lyr_DIAADIAdl7_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIAdl7_9, 
                style: style_DIAADIAdl7_9,
    title: 'DIA A DIA dl 7<br />\
    <img src="styles/legend/DIAADIAdl7_9_0.png" /> 11 - Noria norte<br />\
    <img src="styles/legend/DIAADIAdl7_9_1.png" /> 18 - Pueblo nuevo<br />\
    <img src="styles/legend/DIAADIAdl7_9_2.png" /> 19 - Noria<br />\
    <img src="styles/legend/DIAADIAdl7_9_3.png" /> 2 - Pueblo Nuevo 5TO SECTOR<br />\
    <img src="styles/legend/DIAADIAdl7_9_4.png" /> 32 - San Isidro y Milenium<br />\
    <img src="styles/legend/DIAADIAdl7_9_5.png" /> 33 - San Andres<br />\
    <img src="styles/legend/DIAADIAdl7_9_6.png" /> 34 - Mision de Huinala<br />\
    <img src="styles/legend/DIAADIAdl7_9_7.png" /> 41 - pueblo nuevo<br />\
    <img src="styles/legend/DIAADIAdl7_9_8.png" /> 65 - MISION DE HUINALA<br />\
    <img src="styles/legend/DIAADIAdl7_9_9.png" /> 66 - NORIA SUR<br />\
    <img src="styles/legend/DIAADIAdl7_9_10.png" /> 68 - NORIA NORTE<br />\
    <img src="styles/legend/DIAADIAdl7_9_11.png" /> 75 - ALAMOS Y SAN IGNACIO<br />\
    <img src="styles/legend/DIAADIAdl7_9_12.png" /> 8 - Jardines del Virrey<br />\
    <img src="styles/legend/DIAADIAdl7_9_13.png" /> 87 - MILENIUM RECIDENCIAL<br />\
    <img src="styles/legend/DIAADIAdl7_9_14.png" /> 98 - PORTAL DE HUINALA<br />'
        });var format_DIAADIACRUCEROSDL5_10 = new ol.format.GeoJSON();
var features_DIAADIACRUCEROSDL5_10 = format_DIAADIACRUCEROSDL5_10.readFeatures(json_DIAADIACRUCEROSDL5_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIACRUCEROSDL5_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIACRUCEROSDL5_10.addFeatures(features_DIAADIACRUCEROSDL5_10);var lyr_DIAADIACRUCEROSDL5_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIACRUCEROSDL5_10, 
                style: style_DIAADIACRUCEROSDL5_10,
    title: 'DIA A DIA CRUCEROS DL 5<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_0.png" /> Av. concordia y Miguel Aleman<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_1.png" /> BLVD CARLOS SALINAS DE GORTARI Y AV. CONCORDIA<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_2.png" /> CONCORDIA CRUZ CON MIGUEL ALEMAN<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_3.png" /> E SEXTA CRUZ ESTELARIS<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_4.png" /> Gral. Ignacio Zaragoza cruz con Oaxaca<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_5.png" /> HUMBERTO RAMOS CRUZ CON CARRETERA MEZQUITAL SANTA ROSA<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_6.png" /> RIO PILON Y APODACA A JUAREZ<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL5_10_7.png" /> ZARAGOZA CRUZ CON MIGUEL ALEMAN<br />'
        });var format_DIAADIACRUCEROSDL16_11 = new ol.format.GeoJSON();
var features_DIAADIACRUCEROSDL16_11 = format_DIAADIACRUCEROSDL16_11.readFeatures(json_DIAADIACRUCEROSDL16_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIAADIACRUCEROSDL16_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DIAADIACRUCEROSDL16_11.addFeatures(features_DIAADIACRUCEROSDL16_11);var lyr_DIAADIACRUCEROSDL16_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIAADIACRUCEROSDL16_11, 
                style: style_DIAADIACRUCEROSDL16_11,
    title: 'DIA A DIA CRUCEROS DL 16<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_0.png" /> AFGANISTAN CRUZ CON AV. CARTAGENA<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_1.png" /> ANTIGUO CAMINO A STO. DOMINGO CRUZ MEZQUITAL SANTA ROSA<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_2.png" /> Av. Concordia y camino a santa rosa<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_3.png" /> Av. Concordia y E Sexta<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_4.png" /> CHOPO CRUZ CON CAMINO REAL SANTA ROSA<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_5.png" /> CONCORDIA CRUZ CON METROPLEX<br />\
    <img src="styles/legend/DIAADIACRUCEROSDL16_11_6.png" /> PINOS CRUZ CON AFGANISTAN<br />'
        });

lyr_DL7secciones_0.setVisible(true);lyr_DL16secciones_1.setVisible(true);lyr_DL5secciones_2.setVisible(true);lyr_DIAADIAREUNIONES_3.setVisible(true);lyr_DIAADIAdl5_4.setVisible(true);lyr_DIAADIAdl16_5.setVisible(true);lyr_CasillasDL16Casillas_DL16Point_6.setVisible(true);lyr_CasillasDL7Casillas_DL7Point_7.setVisible(true);lyr_CasillasDL5Casillas_DL5Point_8.setVisible(true);lyr_DIAADIAdl7_9.setVisible(true);lyr_DIAADIACRUCEROSDL5_10.setVisible(true);lyr_DIAADIACRUCEROSDL16_11.setVisible(true);
var layersList = [baseLayer,lyr_DL7secciones_0,lyr_DL16secciones_1,lyr_DL5secciones_2,lyr_DIAADIAREUNIONES_3,lyr_DIAADIAdl5_4,lyr_DIAADIAdl16_5,lyr_CasillasDL16Casillas_DL16Point_6,lyr_CasillasDL7Casillas_DL7Point_7,lyr_CasillasDL5Casillas_DL5Point_8,lyr_DIAADIAdl7_9,lyr_DIAADIACRUCEROSDL5_10,lyr_DIAADIACRUCEROSDL16_11];
lyr_DL7secciones_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DL16secciones_1.set('fieldAliases', {'Name': 'Name', 'ESTADO': 'ESTADO', });
lyr_DL5secciones_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DIAADIAREUNIONES_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DIAADIAdl5_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DIAADIAdl16_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CasillasDL16Casillas_DL16Point_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'timestamp_1': 'timestamp_1', 'begin_1': 'begin_1', 'end_1': 'end_1', 'altitudeMode_1': 'altitudeMode_1', 'tessellate_1': 'tessellate_1', 'extrude_1': 'extrude_1', 'visibility_1': 'visibility_1', 'drawOrder_1': 'drawOrder_1', 'icon_1': 'icon_1', 'ID': 'ID', 'entidad': 'entidad', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'casilla': 'casilla', 'domicilio': 'domicilio', 'ubicacion': 'ubicacion', 'referencia': 'referencia', 'control': 'control', 'Geometry_s': 'Geometry_s', 'GMRotation': 'GMRotation', });
lyr_CasillasDL7Casillas_DL7Point_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'timestamp_1': 'timestamp_1', 'begin_1': 'begin_1', 'end_1': 'end_1', 'altitudeMode_1': 'altitudeMode_1', 'tessellate_1': 'tessellate_1', 'extrude_1': 'extrude_1', 'visibility_1': 'visibility_1', 'drawOrder_1': 'drawOrder_1', 'icon_1': 'icon_1', 'ID': 'ID', 'entidad': 'entidad', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'casilla': 'casilla', 'domicilio': 'domicilio', 'ubicacion': 'ubicacion', 'referencia': 'referencia', 'control': 'control', 'Geometry_s': 'Geometry_s', 'GMRotation': 'GMRotation', });
lyr_CasillasDL5Casillas_DL5Point_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'timestamp_1': 'timestamp_1', 'begin_1': 'begin_1', 'end_1': 'end_1', 'altitudeMode_1': 'altitudeMode_1', 'tessellate_1': 'tessellate_1', 'extrude_1': 'extrude_1', 'visibility_1': 'visibility_1', 'drawOrder_1': 'drawOrder_1', 'icon_1': 'icon_1', 'ID': 'ID', 'entidad': 'entidad', 'seccion': 'seccion', 'localidad': 'localidad', 'manzana': 'manzana', 'casilla': 'casilla', 'domicilio': 'domicilio', 'ubicacion': 'ubicacion', 'referencia': 'referencia', 'control': 'control', 'Geometry_s': 'Geometry_s', 'GMRotation': 'GMRotation', });
lyr_DIAADIAdl7_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DIAADIACRUCEROSDL5_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id_2': 'id_2', 'x': 'x', 'y': 'y', 'ubicaci_': 'ubicaci_', 'No__De_cal': 'No__De_cal', });
lyr_DIAADIACRUCEROSDL16_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id_2': 'id_2', 'x': 'x', 'y': 'y', 'ubicaci_': 'ubicaci_', 'No__De_cal': 'No__De_cal', });
lyr_DL7secciones_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_DL16secciones_1.set('fieldImages', {'Name': 'TextEdit', 'ESTADO': 'Hidden', });
lyr_DL5secciones_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_DIAADIAREUNIONES_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_DIAADIAdl5_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_DIAADIAdl16_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CasillasDL16Casillas_DL16Point_6.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'timestamp_1': 'Hidden', 'begin_1': 'Hidden', 'end_1': 'Hidden', 'altitudeMode_1': 'Hidden', 'tessellate_1': 'Hidden', 'extrude_1': 'Hidden', 'visibility_1': 'Hidden', 'drawOrder_1': 'Hidden', 'icon_1': 'Hidden', 'ID': 'Hidden', 'entidad': 'Hidden', 'seccion': 'Hidden', 'localidad': 'Hidden', 'manzana': 'Hidden', 'casilla': 'TextEdit', 'domicilio': 'Hidden', 'ubicacion': 'Hidden', 'referencia': 'Hidden', 'control': 'Hidden', 'Geometry_s': 'Hidden', 'GMRotation': 'Hidden', });
lyr_CasillasDL7Casillas_DL7Point_7.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'timestamp_1': 'Hidden', 'begin_1': 'Hidden', 'end_1': 'Hidden', 'altitudeMode_1': 'Hidden', 'tessellate_1': 'Hidden', 'extrude_1': 'Hidden', 'visibility_1': 'Hidden', 'drawOrder_1': 'Hidden', 'icon_1': 'Hidden', 'ID': 'Hidden', 'entidad': 'Hidden', 'seccion': 'Hidden', 'localidad': 'Hidden', 'manzana': 'Hidden', 'casilla': 'TextEdit', 'domicilio': 'Hidden', 'ubicacion': 'Hidden', 'referencia': 'Hidden', 'control': 'Hidden', 'Geometry_s': 'Hidden', 'GMRotation': 'Hidden', });
lyr_CasillasDL5Casillas_DL5Point_8.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'timestamp_1': 'Hidden', 'begin_1': 'Hidden', 'end_1': 'Hidden', 'altitudeMode_1': 'Hidden', 'tessellate_1': 'Hidden', 'extrude_1': 'Hidden', 'visibility_1': 'Hidden', 'drawOrder_1': 'Hidden', 'icon_1': 'Hidden', 'ID': 'Hidden', 'entidad': 'Hidden', 'seccion': 'Hidden', 'localidad': 'Hidden', 'manzana': 'Hidden', 'casilla': 'TextEdit', 'domicilio': 'Hidden', 'ubicacion': 'Hidden', 'referencia': 'Hidden', 'control': 'Hidden', 'Geometry_s': 'Hidden', 'GMRotation': 'Hidden', });
lyr_DIAADIAdl7_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_DIAADIACRUCEROSDL5_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'id_2': 'Hidden', 'x': 'Hidden', 'y': 'Hidden', 'ubicaci_': 'Hidden', 'No__De_cal': 'Hidden', });
lyr_DIAADIACRUCEROSDL16_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'id_2': 'Hidden', 'x': 'Hidden', 'y': 'Hidden', 'ubicaci_': 'Hidden', 'No__De_cal': 'Hidden', });
lyr_DL7secciones_0.set('fieldLabels', {'Name': 'no label', });
lyr_DL16secciones_1.set('fieldLabels', {'Name': 'no label', });
lyr_DL5secciones_2.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIAREUNIONES_3.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIAdl5_4.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIAdl16_5.set('fieldLabels', {'Name': 'no label', });
lyr_CasillasDL16Casillas_DL16Point_6.set('fieldLabels', {'casilla': 'no label', });
lyr_CasillasDL7Casillas_DL7Point_7.set('fieldLabels', {'casilla': 'no label', });
lyr_CasillasDL5Casillas_DL5Point_8.set('fieldLabels', {'casilla': 'no label', });
lyr_DIAADIAdl7_9.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIACRUCEROSDL5_10.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIACRUCEROSDL16_11.set('fieldLabels', {'Name': 'no label', });
lyr_DIAADIACRUCEROSDL16_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});