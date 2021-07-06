var size = 0;
var placement = 'point';
function categories_CasillasDL7Casillas_DL7Point_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'B':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(76,141,226,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B, C1':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(201,58,217,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B, C1, C2':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(78,210,197,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B, C1, C2, C3':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(34,218,77,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B, C1, C2, C3, C4, C5':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(201,140,120,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'B, C1, C2, C3, C4, C5, C6, C7, C8, C9':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(204,194,79,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'C1':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,85,208,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'C2':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 5,
            radius2: 4.0, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(158,216,113,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_CasillasDL7Casillas_DL7Point_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("casilla");
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
    
var style = categories_CasillasDL7Casillas_DL7Point_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
