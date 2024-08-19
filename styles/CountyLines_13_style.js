var size = 0;
var placement = 'point';

var style_CountyLines_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Helvetica\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("\"ALL DATA - KIDS Counties_Friendly Name\" || '\n' || \"ALL DATA - KIDS Counties_SED\" || '%'") !== null) {
        labelText = String(feature.get("\"ALL DATA - KIDS Counties_Friendly Name\" || '\n' || \"ALL DATA - KIDS Counties_SED\" || '%'"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(74,74,74,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
