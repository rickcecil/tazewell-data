var wms_layers = [];

var format_02_0 = new ol.format.GeoJSON();
var features_02_0 = format_02_0.readFeatures(json_02_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_0.addFeatures(features_02_0);
var lyr_02_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_0, 
                style: style_02_0,
                popuplayertitle: "02",
                interactive: true,
                title: '<img src="styles/legend/02_0.png" /> 02'
            });
var format_03_1 = new ol.format.GeoJSON();
var features_03_1 = format_03_1.readFeatures(json_03_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_1.addFeatures(features_03_1);
var lyr_03_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_1, 
                style: style_03_1,
                popuplayertitle: "03",
                interactive: true,
                title: '<img src="styles/legend/03_1.png" /> 03'
            });
var format_04_2 = new ol.format.GeoJSON();
var features_04_2 = format_04_2.readFeatures(json_04_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_2.addFeatures(features_04_2);
var lyr_04_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_2, 
                style: style_04_2,
                popuplayertitle: "04",
                interactive: true,
                title: '<img src="styles/legend/04_2.png" /> 04'
            });
var format_05_3 = new ol.format.GeoJSON();
var features_05_3 = format_05_3.readFeatures(json_05_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_3.addFeatures(features_05_3);
var lyr_05_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_3, 
                style: style_05_3,
                popuplayertitle: "05",
                interactive: true,
                title: '<img src="styles/legend/05_3.png" /> 05'
            });
var format_06_4 = new ol.format.GeoJSON();
var features_06_4 = format_06_4.readFeatures(json_06_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_4.addFeatures(features_06_4);
var lyr_06_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_4, 
                style: style_06_4,
                popuplayertitle: "06",
                interactive: true,
                title: '<img src="styles/legend/06_4.png" /> 06'
            });
var format_07_5 = new ol.format.GeoJSON();
var features_07_5 = format_07_5.readFeatures(json_07_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_5.addFeatures(features_07_5);
var lyr_07_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_5, 
                style: style_07_5,
                popuplayertitle: "07",
                interactive: true,
                title: '<img src="styles/legend/07_5.png" /> 07'
            });
var format_08_6 = new ol.format.GeoJSON();
var features_08_6 = format_08_6.readFeatures(json_08_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_6.addFeatures(features_08_6);
var lyr_08_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_6, 
                style: style_08_6,
                popuplayertitle: "08",
                interactive: true,
                title: '<img src="styles/legend/08_6.png" /> 08'
            });
var format_09_7 = new ol.format.GeoJSON();
var features_09_7 = format_09_7.readFeatures(json_09_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_7.addFeatures(features_09_7);
var lyr_09_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_7, 
                style: style_09_7,
                popuplayertitle: "09",
                interactive: true,
                title: '<img src="styles/legend/09_7.png" /> 09'
            });
var format_10_8 = new ol.format.GeoJSON();
var features_10_8 = format_10_8.readFeatures(json_10_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_8.addFeatures(features_10_8);
var lyr_10_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10_8, 
                style: style_10_8,
                popuplayertitle: "10",
                interactive: true,
                title: '<img src="styles/legend/10_8.png" /> 10'
            });
var format_tl_2022_17_unsdWEB_9 = new ol.format.GeoJSON();
var features_tl_2022_17_unsdWEB_9 = format_tl_2022_17_unsdWEB_9.readFeatures(json_tl_2022_17_unsdWEB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2022_17_unsdWEB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2022_17_unsdWEB_9.addFeatures(features_tl_2022_17_unsdWEB_9);
var lyr_tl_2022_17_unsdWEB_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2022_17_unsdWEB_9, 
                style: style_tl_2022_17_unsdWEB_9,
                popuplayertitle: "tl_2022_17_unsd WEB",
                interactive: true,
                title: '<img src="styles/legend/tl_2022_17_unsdWEB_9.png" /> tl_2022_17_unsd WEB'
            });
var format_tl_2022_17_elsdWEB_10 = new ol.format.GeoJSON();
var features_tl_2022_17_elsdWEB_10 = format_tl_2022_17_elsdWEB_10.readFeatures(json_tl_2022_17_elsdWEB_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2022_17_elsdWEB_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2022_17_elsdWEB_10.addFeatures(features_tl_2022_17_elsdWEB_10);
var lyr_tl_2022_17_elsdWEB_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2022_17_elsdWEB_10, 
                style: style_tl_2022_17_elsdWEB_10,
                popuplayertitle: "tl_2022_17_elsd WEB",
                interactive: true,
                title: '<img src="styles/legend/tl_2022_17_elsdWEB_10.png" /> tl_2022_17_elsd WEB'
            });
var format_partnerorganizations_11 = new ol.format.GeoJSON();
var features_partnerorganizations_11 = format_partnerorganizations_11.readFeatures(json_partnerorganizations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_partnerorganizations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_partnerorganizations_11.addFeatures(features_partnerorganizations_11);
var lyr_partnerorganizations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_partnerorganizations_11, 
                style: style_partnerorganizations_11,
                popuplayertitle: "partner-organizations",
                interactive: true,
                title: '<img src="styles/legend/partnerorganizations_11.png" /> partner-organizations'
            });
var format_headstart_12 = new ol.format.GeoJSON();
var features_headstart_12 = format_headstart_12.readFeatures(json_headstart_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_headstart_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_headstart_12.addFeatures(features_headstart_12);
var lyr_headstart_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_headstart_12, 
                style: style_headstart_12,
                popuplayertitle: "head-start",
                interactive: true,
                title: '<img src="styles/legend/headstart_12.png" /> head-start'
            });
var format_licensedchildcare_13 = new ol.format.GeoJSON();
var features_licensedchildcare_13 = format_licensedchildcare_13.readFeatures(json_licensedchildcare_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_licensedchildcare_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_licensedchildcare_13.addFeatures(features_licensedchildcare_13);
var lyr_licensedchildcare_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_licensedchildcare_13, 
                style: style_licensedchildcare_13,
                popuplayertitle: "licensed-childcare",
                interactive: true,
                title: '<img src="styles/legend/licensedchildcare_13.png" /> licensed-childcare'
            });
var format_tl_2022_us_county_14 = new ol.format.GeoJSON();
var features_tl_2022_us_county_14 = format_tl_2022_us_county_14.readFeatures(json_tl_2022_us_county_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2022_us_county_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2022_us_county_14.addFeatures(features_tl_2022_us_county_14);
var lyr_tl_2022_us_county_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tl_2022_us_county_14, 
                style: style_tl_2022_us_county_14,
                popuplayertitle: "tl_2022_us_county",
                interactive: true,
                title: '<img src="styles/legend/tl_2022_us_county_14.png" /> tl_2022_us_county'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_02_0,lyr_03_1,lyr_04_2,lyr_05_3,lyr_06_4,lyr_07_5,lyr_08_6,lyr_09_7,lyr_10_8,],
                                fold: "open",
                                title: "group1"});

lyr_02_0.setVisible(true);lyr_03_1.setVisible(true);lyr_04_2.setVisible(true);lyr_05_3.setVisible(true);lyr_06_4.setVisible(true);lyr_07_5.setVisible(true);lyr_08_6.setVisible(true);lyr_09_7.setVisible(true);lyr_10_8.setVisible(true);lyr_tl_2022_17_unsdWEB_9.setVisible(true);lyr_tl_2022_17_elsdWEB_10.setVisible(true);lyr_partnerorganizations_11.setVisible(true);lyr_headstart_12.setVisible(true);lyr_licensedchildcare_13.setVisible(true);lyr_tl_2022_us_county_14.setVisible(true);
var layersList = [group_group1,lyr_tl_2022_17_unsdWEB_9,lyr_tl_2022_17_elsdWEB_10,lyr_partnerorganizations_11,lyr_headstart_12,lyr_licensedchildcare_13,lyr_tl_2022_us_county_14];
lyr_02_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_03_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_04_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_05_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_06_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_07_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_08_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_09_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_10_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_tl_2022_17_unsdWEB_9.set('fieldAliases', {'STATEFP': 'STATEFP', 'UNSDLEA': 'UNSDLEA', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'MTFCC': 'MTFCC', 'SDTYP': 'SDTYP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA - KIDS Counties_RCDT': 'ALL DATA - KIDS Counties_RCDT', 'ALL DATA - KIDS Counties_District Name': 'ALL DATA - KIDS Counties_District Name', 'ALL DATA - KIDS Counties_Friendly Name': 'ALL DATA - KIDS Counties_Friendly Name', 'ALL DATA - KIDS Counties_District #': 'ALL DATA - KIDS Counties_District #', 'ALL DATA - KIDS Counties_District City': 'ALL DATA - KIDS Counties_District City', 'ALL DATA - KIDS Counties_Rated': 'ALL DATA - KIDS Counties_Rated', 'ALL DATA - KIDS Counties_0': 'ALL DATA - KIDS Counties_0', 'ALL DATA - KIDS Counties_1': 'ALL DATA - KIDS Counties_1', 'ALL DATA - KIDS Counties_2': 'ALL DATA - KIDS Counties_2', 'ALL DATA - KIDS Counties_3%': 'ALL DATA - KIDS Counties_3%', 'ALL DATA - KIDS Counties_SED': 'ALL DATA - KIDS Counties_SED', 'ALL DATA - KIDS Counties_LLD': 'ALL DATA - KIDS Counties_LLD', 'ALL DATA - KIDS Counties_Math': 'ALL DATA - KIDS Counties_Math', 'ALL DATA - KIDS Counties_Native Americans': 'ALL DATA - KIDS Counties_Native Americans', 'ALL DATA - KIDS Counties_Asian': 'ALL DATA - KIDS Counties_Asian', 'ALL DATA - KIDS Counties_Black': 'ALL DATA - KIDS Counties_Black', 'ALL DATA - KIDS Counties_Hispanic': 'ALL DATA - KIDS Counties_Hispanic', 'ALL DATA - KIDS Counties_Hawaiian': 'ALL DATA - KIDS Counties_Hawaiian', 'ALL DATA - KIDS Counties_Multiracial': 'ALL DATA - KIDS Counties_Multiracial', 'ALL DATA - KIDS Counties_White': 'ALL DATA - KIDS Counties_White', 'ALL DATA - KIDS Counties_English Learners': 'ALL DATA - KIDS Counties_English Learners', 'ALL DATA - KIDS Counties_NOT English Learners': 'ALL DATA - KIDS Counties_NOT English Learners', 'ALL DATA - KIDS Counties_IEP': 'ALL DATA - KIDS Counties_IEP', 'ALL DATA - KIDS Counties_No IEP': 'ALL DATA - KIDS Counties_No IEP', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'ALL DATA - KIDS Counties_Free/Reduced Lunch', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch', });
lyr_tl_2022_17_elsdWEB_10.set('fieldAliases', {'STATEFP': 'STATEFP', 'ELSDLEA': 'ELSDLEA', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'MTFCC': 'MTFCC', 'SDTYP': 'SDTYP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA - KIDS Counties_RCDT': 'ALL DATA - KIDS Counties_RCDT', 'ALL DATA - KIDS Counties_District Name': 'ALL DATA - KIDS Counties_District Name', 'ALL DATA - KIDS Counties_Friendly Name': 'ALL DATA - KIDS Counties_Friendly Name', 'ALL DATA - KIDS Counties_District #': 'ALL DATA - KIDS Counties_District #', 'ALL DATA - KIDS Counties_District City': 'ALL DATA - KIDS Counties_District City', 'ALL DATA - KIDS Counties_Rated': 'ALL DATA - KIDS Counties_Rated', 'ALL DATA - KIDS Counties_0': 'ALL DATA - KIDS Counties_0', 'ALL DATA - KIDS Counties_1': 'ALL DATA - KIDS Counties_1', 'ALL DATA - KIDS Counties_2': 'ALL DATA - KIDS Counties_2', 'ALL DATA - KIDS Counties_3%': 'ALL DATA - KIDS Counties_3%', 'ALL DATA - KIDS Counties_SED': 'ALL DATA - KIDS Counties_SED', 'ALL DATA - KIDS Counties_LLD': 'ALL DATA - KIDS Counties_LLD', 'ALL DATA - KIDS Counties_Math': 'ALL DATA - KIDS Counties_Math', 'ALL DATA - KIDS Counties_Native Americans': 'ALL DATA - KIDS Counties_Native Americans', 'ALL DATA - KIDS Counties_Asian': 'ALL DATA - KIDS Counties_Asian', 'ALL DATA - KIDS Counties_Black': 'ALL DATA - KIDS Counties_Black', 'ALL DATA - KIDS Counties_Hispanic': 'ALL DATA - KIDS Counties_Hispanic', 'ALL DATA - KIDS Counties_Hawaiian': 'ALL DATA - KIDS Counties_Hawaiian', 'ALL DATA - KIDS Counties_Multiracial': 'ALL DATA - KIDS Counties_Multiracial', 'ALL DATA - KIDS Counties_White': 'ALL DATA - KIDS Counties_White', 'ALL DATA - KIDS Counties_English Learners': 'ALL DATA - KIDS Counties_English Learners', 'ALL DATA - KIDS Counties_NOT English Learners': 'ALL DATA - KIDS Counties_NOT English Learners', 'ALL DATA - KIDS Counties_IEP': 'ALL DATA - KIDS Counties_IEP', 'ALL DATA - KIDS Counties_No IEP': 'ALL DATA - KIDS Counties_No IEP', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'ALL DATA - KIDS Counties_Free/Reduced Lunch', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch', });
lyr_partnerorganizations_11.set('fieldAliases', {'Community': 'Community', 'Title': 'Title', 'Website': 'Website', 'Phone': 'Phone', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'Contact Na': 'Contact Na', 'Contact Em': 'Contact Em', 'Contact Ph': 'Contact Ph', 'Status': 'Status', 'Created At': 'Created At', 'Deactivate': 'Deactivate', 'Suspended': 'Suspended', 'Responsibl': 'Responsibl', 'Responsi_1': 'Responsi_1', 'Eligiblity': 'Eligiblity', 'Purpose': 'Purpose', 'Service ar': 'Service ar', 'Tags': 'Tags', 'Additional': 'Additional', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_headstart_12.set('fieldAliases', {'grant_Numb': 'grant_Numb', 'program_ty': 'program_ty', 'recipient_': 'recipient_', 'service_lo': 'service_lo', 'address_li': 'address_li', 'address__1': 'address__1', 'city': 'city', 'state': 'state', 'zip': 'zip', 'zip_4': 'zip_4', 'latitude': 'latitude', 'longitude': 'longitude', 'county': 'county', 'funded_slo': 'funded_slo', 'status': 'status', 'registrati': 'registrati', 'service__1': 'service__1', 'program_ad': 'program_ad', 'program__1': 'program__1', 'program__2': 'program__2', 'program__3': 'program__3', 'program__4': 'program__4', 'program__5': 'program__5', 'program__6': 'program__6', 'program__7': 'program__7', 'program__8': 'program__8', });
lyr_licensedchildcare_13.set('fieldAliases', {'ProviderID': 'ProviderID', 'DoingBusin': 'DoingBusin', 'Street': 'Street', 'City': 'City', 'STATE': 'STATE', 'County': 'County', 'Zip': 'Zip', 'Phone': 'Phone', 'FacilityTy': 'FacilityTy', 'DayAgeRang': 'DayAgeRang', 'NightAgeRa': 'NightAgeRa', 'Languages': 'Languages', 'Language1': 'Language1', 'Language2': 'Language2', 'Language3': 'Language3', 'DayCapacit': 'DayCapacit', 'NightCapac': 'NightCapac', 'Status': 'Status', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_tl_2022_us_county_14.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_02_0.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_03_1.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_04_2.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_05_3.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_06_4.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_07_5.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_08_6.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_09_7.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_10_8.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_tl_2022_17_unsdWEB_9.set('fieldImages', {'STATEFP': 'TextEdit', 'UNSDLEA': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'MTFCC': 'TextEdit', 'SDTYP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'ALL DATA - KIDS Counties_RCDT': 'TextEdit', 'ALL DATA - KIDS Counties_District Name': 'TextEdit', 'ALL DATA - KIDS Counties_Friendly Name': 'TextEdit', 'ALL DATA - KIDS Counties_District #': 'Range', 'ALL DATA - KIDS Counties_District City': 'TextEdit', 'ALL DATA - KIDS Counties_Rated': 'TextEdit', 'ALL DATA - KIDS Counties_0': 'TextEdit', 'ALL DATA - KIDS Counties_1': 'TextEdit', 'ALL DATA - KIDS Counties_2': 'TextEdit', 'ALL DATA - KIDS Counties_3%': 'TextEdit', 'ALL DATA - KIDS Counties_SED': 'TextEdit', 'ALL DATA - KIDS Counties_LLD': 'TextEdit', 'ALL DATA - KIDS Counties_Math': 'TextEdit', 'ALL DATA - KIDS Counties_Native Americans': 'TextEdit', 'ALL DATA - KIDS Counties_Asian': 'TextEdit', 'ALL DATA - KIDS Counties_Black': 'TextEdit', 'ALL DATA - KIDS Counties_Hispanic': 'TextEdit', 'ALL DATA - KIDS Counties_Hawaiian': 'TextEdit', 'ALL DATA - KIDS Counties_Multiracial': 'TextEdit', 'ALL DATA - KIDS Counties_White': 'TextEdit', 'ALL DATA - KIDS Counties_English Learners': 'TextEdit', 'ALL DATA - KIDS Counties_NOT English Learners': 'TextEdit', 'ALL DATA - KIDS Counties_IEP': 'TextEdit', 'ALL DATA - KIDS Counties_No IEP': 'TextEdit', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'TextEdit', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'TextEdit', });
lyr_tl_2022_17_elsdWEB_10.set('fieldImages', {'STATEFP': 'TextEdit', 'ELSDLEA': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LOGRADE': 'TextEdit', 'HIGRADE': 'TextEdit', 'MTFCC': 'TextEdit', 'SDTYP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'ALL DATA - KIDS Counties_RCDT': 'TextEdit', 'ALL DATA - KIDS Counties_District Name': 'TextEdit', 'ALL DATA - KIDS Counties_Friendly Name': 'TextEdit', 'ALL DATA - KIDS Counties_District #': 'Range', 'ALL DATA - KIDS Counties_District City': 'TextEdit', 'ALL DATA - KIDS Counties_Rated': 'TextEdit', 'ALL DATA - KIDS Counties_0': 'TextEdit', 'ALL DATA - KIDS Counties_1': 'TextEdit', 'ALL DATA - KIDS Counties_2': 'TextEdit', 'ALL DATA - KIDS Counties_3%': 'TextEdit', 'ALL DATA - KIDS Counties_SED': 'TextEdit', 'ALL DATA - KIDS Counties_LLD': 'TextEdit', 'ALL DATA - KIDS Counties_Math': 'TextEdit', 'ALL DATA - KIDS Counties_Native Americans': 'TextEdit', 'ALL DATA - KIDS Counties_Asian': 'TextEdit', 'ALL DATA - KIDS Counties_Black': 'TextEdit', 'ALL DATA - KIDS Counties_Hispanic': 'TextEdit', 'ALL DATA - KIDS Counties_Hawaiian': 'TextEdit', 'ALL DATA - KIDS Counties_Multiracial': 'TextEdit', 'ALL DATA - KIDS Counties_White': 'TextEdit', 'ALL DATA - KIDS Counties_English Learners': 'TextEdit', 'ALL DATA - KIDS Counties_NOT English Learners': 'TextEdit', 'ALL DATA - KIDS Counties_IEP': 'TextEdit', 'ALL DATA - KIDS Counties_No IEP': 'TextEdit', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'TextEdit', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'TextEdit', });
lyr_partnerorganizations_11.set('fieldImages', {'Community': '', 'Title': '', 'Website': '', 'Phone': '', 'Address': '', 'City': '', 'State': '', 'Zip': '', 'Contact Na': '', 'Contact Em': '', 'Contact Ph': '', 'Status': '', 'Created At': '', 'Deactivate': '', 'Suspended': '', 'Responsibl': '', 'Responsi_1': '', 'Eligiblity': '', 'Purpose': '', 'Service ar': '', 'Tags': '', 'Additional': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_headstart_12.set('fieldImages', {'grant_Numb': '', 'program_ty': '', 'recipient_': '', 'service_lo': '', 'address_li': '', 'address__1': '', 'city': '', 'state': '', 'zip': '', 'zip_4': '', 'latitude': '', 'longitude': '', 'county': '', 'funded_slo': '', 'status': '', 'registrati': '', 'service__1': '', 'program_ad': '', 'program__1': '', 'program__2': '', 'program__3': '', 'program__4': '', 'program__5': '', 'program__6': '', 'program__7': '', 'program__8': '', });
lyr_licensedchildcare_13.set('fieldImages', {'ProviderID': '', 'DoingBusin': '', 'Street': '', 'City': '', 'STATE': '', 'County': '', 'Zip': '', 'Phone': '', 'FacilityTy': '', 'DayAgeRang': '', 'NightAgeRa': '', 'Languages': '', 'Language1': '', 'Language2': '', 'Language3': '', 'DayCapacit': '', 'NightCapac': '', 'Status': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_tl_2022_us_county_14.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_02_0.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_03_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_04_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_05_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_06_4.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_07_5.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_08_6.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_09_7.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_10_8.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_tl_2022_17_unsdWEB_9.set('fieldLabels', {'STATEFP': 'no label', 'UNSDLEA': 'no label', 'GEOID': 'no label', 'NAME': 'inline label - always visible', 'LSAD': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'MTFCC': 'no label', 'SDTYP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA - KIDS Counties_RCDT': 'no label', 'ALL DATA - KIDS Counties_District Name': 'no label', 'ALL DATA - KIDS Counties_Friendly Name': 'inline label - always visible', 'ALL DATA - KIDS Counties_District #': 'no label', 'ALL DATA - KIDS Counties_District City': 'no label', 'ALL DATA - KIDS Counties_Rated': 'no label', 'ALL DATA - KIDS Counties_0': 'no label', 'ALL DATA - KIDS Counties_1': 'no label', 'ALL DATA - KIDS Counties_2': 'no label', 'ALL DATA - KIDS Counties_3%': 'no label', 'ALL DATA - KIDS Counties_SED': 'inline label - always visible', 'ALL DATA - KIDS Counties_LLD': 'no label', 'ALL DATA - KIDS Counties_Math': 'no label', 'ALL DATA - KIDS Counties_Native Americans': 'no label', 'ALL DATA - KIDS Counties_Asian': 'no label', 'ALL DATA - KIDS Counties_Black': 'no label', 'ALL DATA - KIDS Counties_Hispanic': 'no label', 'ALL DATA - KIDS Counties_Hawaiian': 'no label', 'ALL DATA - KIDS Counties_Multiracial': 'no label', 'ALL DATA - KIDS Counties_White': 'no label', 'ALL DATA - KIDS Counties_English Learners': 'no label', 'ALL DATA - KIDS Counties_NOT English Learners': 'no label', 'ALL DATA - KIDS Counties_IEP': 'no label', 'ALL DATA - KIDS Counties_No IEP': 'no label', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'no label', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'no label', });
lyr_tl_2022_17_elsdWEB_10.set('fieldLabels', {'STATEFP': 'no label', 'ELSDLEA': 'no label', 'GEOID': 'no label', 'NAME': 'inline label - always visible', 'LSAD': 'no label', 'LOGRADE': 'no label', 'HIGRADE': 'no label', 'MTFCC': 'no label', 'SDTYP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA - KIDS Counties_RCDT': 'no label', 'ALL DATA - KIDS Counties_District Name': 'no label', 'ALL DATA - KIDS Counties_Friendly Name': 'inline label - always visible', 'ALL DATA - KIDS Counties_District #': 'no label', 'ALL DATA - KIDS Counties_District City': 'no label', 'ALL DATA - KIDS Counties_Rated': 'no label', 'ALL DATA - KIDS Counties_0': 'no label', 'ALL DATA - KIDS Counties_1': 'no label', 'ALL DATA - KIDS Counties_2': 'no label', 'ALL DATA - KIDS Counties_3%': 'no label', 'ALL DATA - KIDS Counties_SED': 'inline label - always visible', 'ALL DATA - KIDS Counties_LLD': 'no label', 'ALL DATA - KIDS Counties_Math': 'no label', 'ALL DATA - KIDS Counties_Native Americans': 'no label', 'ALL DATA - KIDS Counties_Asian': 'no label', 'ALL DATA - KIDS Counties_Black': 'no label', 'ALL DATA - KIDS Counties_Hispanic': 'no label', 'ALL DATA - KIDS Counties_Hawaiian': 'no label', 'ALL DATA - KIDS Counties_Multiracial': 'no label', 'ALL DATA - KIDS Counties_White': 'no label', 'ALL DATA - KIDS Counties_English Learners': 'no label', 'ALL DATA - KIDS Counties_NOT English Learners': 'no label', 'ALL DATA - KIDS Counties_IEP': 'no label', 'ALL DATA - KIDS Counties_No IEP': 'no label', 'ALL DATA - KIDS Counties_Free/Reduced Lunch': 'no label', 'ALL DATA - KIDS Counties_NO Free/Reduced Lunch': 'no label', });
lyr_partnerorganizations_11.set('fieldLabels', {'Community': 'no label', 'Title': 'no label', 'Website': 'no label', 'Phone': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'Contact Na': 'no label', 'Contact Em': 'no label', 'Contact Ph': 'no label', 'Status': 'no label', 'Created At': 'no label', 'Deactivate': 'no label', 'Suspended': 'no label', 'Responsibl': 'no label', 'Responsi_1': 'no label', 'Eligiblity': 'no label', 'Purpose': 'no label', 'Service ar': 'no label', 'Tags': 'no label', 'Additional': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_headstart_12.set('fieldLabels', {'grant_Numb': 'no label', 'program_ty': 'no label', 'recipient_': 'no label', 'service_lo': 'no label', 'address_li': 'no label', 'address__1': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'zip_4': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'county': 'no label', 'funded_slo': 'no label', 'status': 'no label', 'registrati': 'no label', 'service__1': 'no label', 'program_ad': 'no label', 'program__1': 'no label', 'program__2': 'no label', 'program__3': 'no label', 'program__4': 'no label', 'program__5': 'no label', 'program__6': 'no label', 'program__7': 'no label', 'program__8': 'no label', });
lyr_licensedchildcare_13.set('fieldLabels', {'ProviderID': 'no label', 'DoingBusin': 'no label', 'Street': 'no label', 'City': 'no label', 'STATE': 'no label', 'County': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'FacilityTy': 'no label', 'DayAgeRang': 'no label', 'NightAgeRa': 'no label', 'Languages': 'no label', 'Language1': 'no label', 'Language2': 'no label', 'Language3': 'no label', 'DayCapacit': 'no label', 'NightCapac': 'no label', 'Status': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_tl_2022_us_county_14.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_tl_2022_us_county_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});