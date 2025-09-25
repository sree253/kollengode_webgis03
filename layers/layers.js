var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_klngdpanchayat_1 = new ol.format.GeoJSON();
var features_klngdpanchayat_1 = format_klngdpanchayat_1.readFeatures(json_klngdpanchayat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_klngdpanchayat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_klngdpanchayat_1.addFeatures(features_klngdpanchayat_1);
var lyr_klngdpanchayat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_klngdpanchayat_1, 
                style: style_klngdpanchayat_1,
                popuplayertitle: "klngd panchayat",
                interactive: true,
    title: 'klngd panchayat<br />\
    <img src="styles/legend/klngdpanchayat_1_0.png" /> ACHANAMCODE<br />\
    <img src="styles/legend/klngdpanchayat_1_1.png" /> ANAMARI<br />\
    <img src="styles/legend/klngdpanchayat_1_2.png" /> ARUVANOORPARAMBU<br />\
    <img src="styles/legend/klngdpanchayat_1_3.png" /> CHEERANI<br />\
    <img src="styles/legend/klngdpanchayat_1_4.png" /> CHIKKANAMPARA<br />\
    <img src="styles/legend/klngdpanchayat_1_5.png" /> EDACHIRA<br />\
    <img src="styles/legend/klngdpanchayat_1_6.png" /> KACHAMKKURRISSI<br />\
    <img src="styles/legend/klngdpanchayat_1_7.png" /> KOLLENGODE TOWN<br />\
    <img src="styles/legend/klngdpanchayat_1_8.png" /> KONGANCHATHI<br />\
    <img src="styles/legend/klngdpanchayat_1_9.png" /> MANALIPPADAM<br />\
    <img src="styles/legend/klngdpanchayat_1_10.png" /> NEDUMANI<br />\
    <img src="styles/legend/klngdpanchayat_1_11.png" /> NENMENI<br />\
    <img src="styles/legend/klngdpanchayat_1_12.png" /> P.K.VILLAGE<br />\
    <img src="styles/legend/klngdpanchayat_1_13.png" /> PAYYALORE<br />\
    <img src="styles/legend/klngdpanchayat_1_14.png" /> PAZHAYANGADI<br />\
    <img src="styles/legend/klngdpanchayat_1_15.png" /> PUZHAKKALTHARA<br />\
    <img src="styles/legend/klngdpanchayat_1_16.png" /> S.V.STREET<br />\
    <img src="styles/legend/klngdpanchayat_1_17.png" /> THACHAKORA<br />\
    <img src="styles/legend/klngdpanchayat_1_18.png" /> THADANARA<br />\
    <img src="styles/legend/klngdpanchayat_1_19.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_klngdpanchayat_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_klngdpanchayat_1];
lyr_klngdpanchayat_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_klngdpanchayat_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_klngdpanchayat_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'inline label - always visible', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_klngdpanchayat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});