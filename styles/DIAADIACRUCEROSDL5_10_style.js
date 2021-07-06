var size = 0;
var placement = 'point';
function categories_DIAADIACRUCEROSDL5_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Av. concordia y Miguel Aleman':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(169,229,94,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'BLVD CARLOS SALINAS DE GORTARI Y AV. CONCORDIA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(20,126,207,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'CONCORDIA CRUZ CON MIGUEL ALEMAN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(223,185,61,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'E SEXTA CRUZ ESTELARIS':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(135,124,228,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Gral. Ignacio Zaragoza cruz con Oaxaca':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(231,39,148,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'HUMBERTO RAMOS CRUZ CON CARRETERA MEZQUITAL SANTA ROSA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(220,71,55,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'RIO PILON Y APODACA A JUAREZ':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(210,138,231,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'ZARAGOZA CRUZ CON MIGUEL ALEMAN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(117,229,203,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_DIAADIACRUCEROSDL5_10 = function(feature, resolution){
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
    
var style = categories_DIAADIACRUCEROSDL5_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
