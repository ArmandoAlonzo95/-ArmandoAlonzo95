var size = 0;
var placement = 'point';
function categories_DIAADIACRUCEROSDL16_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'AFGANISTAN CRUZ CON AV. CARTAGENA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(88,202,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'ANTIGUO CAMINO A STO. DOMINGO CRUZ MEZQUITAL SANTA ROSA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(55,236,131,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Av. Concordia y camino a santa rosa':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(164,78,206,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Av. Concordia y E Sexta':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(211,61,31,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'CHOPO CRUZ CON CAMINO REAL SANTA ROSA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(24,44,218,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'CONCORDIA CRUZ CON METROPLEX':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(225,13,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'PINOS CRUZ CON AFGANISTAN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(45,190,219,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_DIAADIACRUCEROSDL16_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_DIAADIACRUCEROSDL16_11(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
