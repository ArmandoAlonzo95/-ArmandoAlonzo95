var size = 0;
var placement = 'point';
function categories_DIAADIAdl7_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '11 - Noria norte':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,158,88,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '18 - Pueblo nuevo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,203,173,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '19 - Noria':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(89,43,206,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '2 - Pueblo Nuevo 5TO SECTOR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,204,65,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '32 - San Isidro y Milenium':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,62,237,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '33 - San Andres':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,114,176,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '34 - Mision de Huinala':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,201,31,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '41 - pueblo nuevo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,125,207,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '65 - MISION DE HUINALA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,126,213,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '66 - NORIA SUR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,19,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '68 - NORIA NORTE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,203,40,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '75 - ALAMOS Y SAN IGNACIO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,137,118,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '8 - Jardines del Virrey':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,203,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '87 - MILENIUM RECIDENCIAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,184,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '98 - PORTAL DE HUINALA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,39,216,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_DIAADIAdl7_9 = function(feature, resolution){
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
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_DIAADIAdl7_9(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
