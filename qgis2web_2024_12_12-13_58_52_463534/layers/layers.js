var wms_layers = [];


        var lyr_Hybrid_google_Map_0 = new ol.layer.Tile({
            'title': 'Hybrid_google_Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_landuse_military_Brunei_1 = new ol.format.GeoJSON();
var features_landuse_military_Brunei_1 = format_landuse_military_Brunei_1.readFeatures(json_landuse_military_Brunei_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_military_Brunei_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_military_Brunei_1.addFeatures(features_landuse_military_Brunei_1);
var lyr_landuse_military_Brunei_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_military_Brunei_1, 
                style: style_landuse_military_Brunei_1,
                popuplayertitle: "landuse_military_Brunei",
                interactive: true,
                title: '<img src="styles/legend/landuse_military_Brunei_1.png" /> landuse_military_Brunei'
            });

lyr_Hybrid_google_Map_0.setVisible(true);lyr_landuse_military_Brunei_1.setVisible(true);
var layersList = [lyr_Hybrid_google_Map_0,lyr_landuse_military_Brunei_1];
lyr_landuse_military_Brunei_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'barrier': 'barrier', 'entrance': 'entrance', 'access': 'access', });
lyr_landuse_military_Brunei_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'entrance': 'TextEdit', 'access': 'TextEdit', });
lyr_landuse_military_Brunei_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'barrier': 'no label', 'entrance': 'no label', 'access': 'no label', });
lyr_landuse_military_Brunei_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});