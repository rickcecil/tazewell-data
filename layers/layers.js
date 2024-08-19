var wms_layers = [];

var format_GQ_0 = new ol.format.GeoJSON();
var features_GQ_0 = format_GQ_0.readFeatures(json_GQ_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GQ_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GQ_0.addFeatures(features_GQ_0);
var lyr_GQ_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GQ_0, 
                style: style_GQ_0,
                popuplayertitle: "GQ",
                interactive: false,
                title: '<img src="styles/legend/GQ_0.png" /> GQ'
            });
var format_02_1 = new ol.format.GeoJSON();
var features_02_1 = format_02_1.readFeatures(json_02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_1.addFeatures(features_02_1);
var lyr_02_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_1, 
                style: style_02_1,
                popuplayertitle: "02",
                interactive: false,
                title: '<img src="styles/legend/02_1.png" /> 02'
            });
var format_03_2 = new ol.format.GeoJSON();
var features_03_2 = format_03_2.readFeatures(json_03_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_2.addFeatures(features_03_2);
var lyr_03_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_2, 
                style: style_03_2,
                popuplayertitle: "03",
                interactive: false,
                title: '<img src="styles/legend/03_2.png" /> 03'
            });
var format_04_3 = new ol.format.GeoJSON();
var features_04_3 = format_04_3.readFeatures(json_04_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_3.addFeatures(features_04_3);
var lyr_04_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_3, 
                style: style_04_3,
                popuplayertitle: "04",
                interactive: false,
                title: '<img src="styles/legend/04_3.png" /> 04'
            });
var format_05_4 = new ol.format.GeoJSON();
var features_05_4 = format_05_4.readFeatures(json_05_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_4.addFeatures(features_05_4);
var lyr_05_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_4, 
                style: style_05_4,
                popuplayertitle: "05",
                interactive: false,
                title: '<img src="styles/legend/05_4.png" /> 05'
            });
var format_06_5 = new ol.format.GeoJSON();
var features_06_5 = format_06_5.readFeatures(json_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_5.addFeatures(features_06_5);
var lyr_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_5, 
                style: style_06_5,
                popuplayertitle: "06",
                interactive: false,
                title: '<img src="styles/legend/06_5.png" /> 06'
            });
var format_07_6 = new ol.format.GeoJSON();
var features_07_6 = format_07_6.readFeatures(json_07_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_6.addFeatures(features_07_6);
var lyr_07_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_6, 
                style: style_07_6,
                popuplayertitle: "07",
                interactive: false,
                title: '<img src="styles/legend/07_6.png" /> 07'
            });
var format_08_7 = new ol.format.GeoJSON();
var features_08_7 = format_08_7.readFeatures(json_08_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_7.addFeatures(features_08_7);
var lyr_08_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_7, 
                style: style_08_7,
                popuplayertitle: "08",
                interactive: false,
                title: '<img src="styles/legend/08_7.png" /> 08'
            });
var format_09_8 = new ol.format.GeoJSON();
var features_09_8 = format_09_8.readFeatures(json_09_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_8.addFeatures(features_09_8);
var lyr_09_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_8, 
                style: style_09_8,
                popuplayertitle: "09",
                interactive: false,
                title: '<img src="styles/legend/09_8.png" /> 09'
            });
var format_10_9 = new ol.format.GeoJSON();
var features_10_9 = format_10_9.readFeatures(json_10_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_9.addFeatures(features_10_9);
var lyr_10_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10_9, 
                style: style_10_9,
                popuplayertitle: "10",
                interactive: false,
                title: '<img src="styles/legend/10_9.png" /> 10'
            });
var format_PartnerOrgs_10 = new ol.format.GeoJSON();
var features_PartnerOrgs_10 = format_PartnerOrgs_10.readFeatures(json_PartnerOrgs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartnerOrgs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartnerOrgs_10.addFeatures(features_PartnerOrgs_10);
var lyr_PartnerOrgs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartnerOrgs_10, 
                style: style_PartnerOrgs_10,
                popuplayertitle: "Partner Orgs",
                interactive: true,
                title: '<img src="styles/legend/PartnerOrgs_10.png" /> Partner Orgs'
            });
var format_HeadStart_11 = new ol.format.GeoJSON();
var features_HeadStart_11 = format_HeadStart_11.readFeatures(json_HeadStart_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeadStart_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeadStart_11.addFeatures(features_HeadStart_11);
var lyr_HeadStart_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeadStart_11, 
                style: style_HeadStart_11,
                popuplayertitle: "Head Start",
                interactive: true,
                title: '<img src="styles/legend/HeadStart_11.png" /> Head Start'
            });
var format_LicensedChildcare_12 = new ol.format.GeoJSON();
var features_LicensedChildcare_12 = format_LicensedChildcare_12.readFeatures(json_LicensedChildcare_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LicensedChildcare_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LicensedChildcare_12.addFeatures(features_LicensedChildcare_12);
var lyr_LicensedChildcare_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LicensedChildcare_12, 
                style: style_LicensedChildcare_12,
                popuplayertitle: "Licensed Childcare",
                interactive: true,
                title: '<img src="styles/legend/LicensedChildcare_12.png" /> Licensed Childcare'
            });
var format_CountyLines_13 = new ol.format.GeoJSON();
var features_CountyLines_13 = format_CountyLines_13.readFeatures(json_CountyLines_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyLines_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyLines_13.addFeatures(features_CountyLines_13);
var lyr_CountyLines_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyLines_13, 
                style: style_CountyLines_13,
                popuplayertitle: "County Lines",
                interactive: false,
                title: '<img src="styles/legend/CountyLines_13.png" /> County Lines'
            });
var format_SchoolDistricts_14 = new ol.format.GeoJSON();
var features_SchoolDistricts_14 = format_SchoolDistricts_14.readFeatures(json_SchoolDistricts_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolDistricts_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolDistricts_14.addFeatures(features_SchoolDistricts_14);
var lyr_SchoolDistricts_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolDistricts_14, 
                style: style_SchoolDistricts_14,
                popuplayertitle: "School Districts",
                interactive: false,
                title: '<img src="styles/legend/SchoolDistricts_14.png" /> School Districts'
            });
var group_ADIScores = new ol.layer.Group({
                                layers: [lyr_GQ_0,lyr_02_1,lyr_03_2,lyr_04_3,lyr_05_4,lyr_06_5,lyr_07_6,lyr_08_7,lyr_09_8,lyr_10_9,],
                                fold: "open",
                                title: "ADI Scores"});

lyr_GQ_0.setVisible(true);lyr_02_1.setVisible(true);lyr_03_2.setVisible(true);lyr_04_3.setVisible(true);lyr_05_4.setVisible(true);lyr_06_5.setVisible(true);lyr_07_6.setVisible(true);lyr_08_7.setVisible(true);lyr_09_8.setVisible(true);lyr_10_9.setVisible(true);lyr_PartnerOrgs_10.setVisible(true);lyr_HeadStart_11.setVisible(true);lyr_LicensedChildcare_12.setVisible(true);lyr_CountyLines_13.setVisible(true);lyr_SchoolDistricts_14.setVisible(true);
var layersList = [group_ADIScores,lyr_PartnerOrgs_10,lyr_HeadStart_11,lyr_LicensedChildcare_12,lyr_CountyLines_13,lyr_SchoolDistricts_14];
lyr_GQ_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_02_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_03_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_04_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_05_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_06_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_07_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_08_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_09_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_10_9.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_PartnerOrgs_10.set('fieldAliases', {'Community': 'Community', 'Title': 'Title', 'Website': 'Website', 'Phone': 'Phone', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'Contact Na': 'Contact Na', 'Contact Em': 'Contact Em', 'Contact Ph': 'Contact Ph', 'Status': 'Status', 'Created At': 'Created At', 'Deactivate': 'Deactivate', 'Suspended': 'Suspended', 'Responsibl': 'Responsibl', 'Responsi_1': 'Responsi_1', 'Eligiblity': 'Eligiblity', 'Purpose': 'Purpose', 'Service ar': 'Service ar', 'Tags': 'Tags', 'Additional': 'Additional', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HeadStart_11.set('fieldAliases', {'grant_Numb': 'grant_Numb', 'program_ty': 'program_ty', 'recipient_': 'recipient_', 'service_lo': 'service_lo', 'address_li': 'address_li', 'address__1': 'address__1', 'city': 'city', 'state': 'state', 'zip': 'zip', 'zip_4': 'zip_4', 'latitude': 'latitude', 'longitude': 'longitude', 'county': 'county', 'funded_slo': 'funded_slo', 'status': 'status', 'registrati': 'registrati', 'service__1': 'service__1', 'program_ad': 'program_ad', 'program__1': 'program__1', 'program__2': 'program__2', 'program__3': 'program__3', 'program__4': 'program__4', 'program__5': 'program__5', 'program__6': 'program__6', 'program__7': 'program__7', 'program__8': 'program__8', });
lyr_LicensedChildcare_12.set('fieldAliases', {'ProviderID': 'ProviderID', 'DoingBusin': 'DoingBusin', 'Street': 'Street', 'City': 'City', 'STATE': 'STATE', 'County': 'County', 'Zip': 'Zip', 'Phone': 'Phone', 'FacilityTy': 'FacilityTy', 'DayAgeRang': 'DayAgeRang', 'NightAgeRa': 'NightAgeRa', 'Languages': 'Languages', 'Language1': 'Language1', 'Language2': 'Language2', 'Language3': 'Language3', 'DayCapacit': 'DayCapacit', 'NightCapac': 'NightCapac', 'Status': 'Status', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_CountyLines_13.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SchoolDistricts_14.set('fieldAliases', {'STATEFP': 'STATEFP', 'ELSDLEA': 'ELSDLEA', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'MTFCC': 'MTFCC', 'SDTYP': 'SDTYP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', 'ALL DATA_4': 'ALL DATA_4', 'ALL DATA_5': 'ALL DATA_5', 'ALL DATA_6': 'ALL DATA_6', 'ALL DATA_7': 'ALL DATA_7', 'ALL DATA_8': 'ALL DATA_8', 'ALL DATA_9': 'ALL DATA_9', 'ALL DATA10': 'ALL DATA10', 'ALL DATA11': 'ALL DATA11', 'ALL DATA12': 'ALL DATA12', 'ALL DATA13': 'ALL DATA13', 'ALL DATA14': 'ALL DATA14', 'ALL DATA15': 'ALL DATA15', 'ALL DATA16': 'ALL DATA16', 'ALL DATA17': 'ALL DATA17', 'ALL DATA18': 'ALL DATA18', 'ALL DATA19': 'ALL DATA19', 'ALL DATA20': 'ALL DATA20', 'ALL DATA21': 'ALL DATA21', 'ALL DATA22': 'ALL DATA22', 'ALL DATA23': 'ALL DATA23', 'ALL DATA24': 'ALL DATA24', 'ALL DATA25': 'ALL DATA25', 'UNSDLEA': 'UNSDLEA', 'layer': 'layer', 'path': 'path', 'Label': 'Label', });
lyr_GQ_0.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_02_1.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_03_2.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_04_3.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_05_4.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_06_5.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_07_6.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_08_7.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_09_8.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_10_9.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_PartnerOrgs_10.set('fieldImages', {'Community': '', 'Title': '', 'Website': '', 'Phone': '', 'Address': '', 'City': '', 'State': '', 'Zip': '', 'Contact Na': '', 'Contact Em': '', 'Contact Ph': '', 'Status': '', 'Created At': '', 'Deactivate': '', 'Suspended': '', 'Responsibl': '', 'Responsi_1': '', 'Eligiblity': '', 'Purpose': '', 'Service ar': '', 'Tags': '', 'Additional': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_HeadStart_11.set('fieldImages', {'grant_Numb': '', 'program_ty': '', 'recipient_': '', 'service_lo': '', 'address_li': '', 'address__1': '', 'city': '', 'state': '', 'zip': '', 'zip_4': '', 'latitude': '', 'longitude': '', 'county': '', 'funded_slo': '', 'status': '', 'registrati': '', 'service__1': '', 'program_ad': '', 'program__1': '', 'program__2': '', 'program__3': '', 'program__4': '', 'program__5': '', 'program__6': '', 'program__7': '', 'program__8': '', });
lyr_LicensedChildcare_12.set('fieldImages', {'ProviderID': '', 'DoingBusin': '', 'Street': '', 'City': '', 'STATE': '', 'County': '', 'Zip': '', 'Phone': '', 'FacilityTy': '', 'DayAgeRang': '', 'NightAgeRa': '', 'Languages': '', 'Language1': '', 'Language2': '', 'Language3': '', 'DayCapacit': '', 'NightCapac': '', 'Status': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_CountyLines_13.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SchoolDistricts_14.set('fieldImages', {'STATEFP': '', 'ELSDLEA': '', 'GEOID': '', 'NAME': '', 'LSAD': '', 'LOGRADE': '', 'HIGRADE': '', 'MTFCC': '', 'SDTYP': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', 'ALL DATA_4': '', 'ALL DATA_5': '', 'ALL DATA_6': '', 'ALL DATA_7': '', 'ALL DATA_8': '', 'ALL DATA_9': '', 'ALL DATA10': '', 'ALL DATA11': '', 'ALL DATA12': '', 'ALL DATA13': '', 'ALL DATA14': '', 'ALL DATA15': '', 'ALL DATA16': '', 'ALL DATA17': '', 'ALL DATA18': '', 'ALL DATA19': '', 'ALL DATA20': '', 'ALL DATA21': '', 'ALL DATA22': '', 'ALL DATA23': '', 'ALL DATA24': '', 'ALL DATA25': '', 'UNSDLEA': '', 'layer': '', 'path': '', 'Label': '', });
lyr_GQ_0.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_02_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_03_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_04_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_05_4.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_06_5.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_07_6.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_08_7.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_09_8.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_10_9.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'ALL DATA -': 'no label', 'ALL DATA_1': 'no label', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'no label', });
lyr_PartnerOrgs_10.set('fieldLabels', {'Community': 'no label', 'Title': 'no label', 'Website': 'no label', 'Phone': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'Contact Na': 'no label', 'Contact Em': 'no label', 'Contact Ph': 'no label', 'Status': 'no label', 'Created At': 'hidden field', 'Deactivate': 'hidden field', 'Suspended': 'hidden field', 'Responsibl': 'hidden field', 'Responsi_1': 'hidden field', 'Eligiblity': 'hidden field', 'Purpose': 'header label - visible with data', 'Service ar': 'header label - visible with data', 'Tags': 'header label - visible with data', 'Additional': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'header label - visible with data', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_HeadStart_11.set('fieldLabels', {'grant_Numb': 'hidden field', 'program_ty': 'hidden field', 'recipient_': 'hidden field', 'service_lo': 'hidden field', 'address_li': 'no label', 'address__1': 'hidden field', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'zip_4': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'county': 'no label', 'funded_slo': 'hidden field', 'status': 'hidden field', 'registrati': 'hidden field', 'service__1': 'hidden field', 'program_ad': 'hidden field', 'program__1': 'hidden field', 'program__2': 'hidden field', 'program__3': 'hidden field', 'program__4': 'hidden field', 'program__5': 'hidden field', 'program__6': 'hidden field', 'program__7': 'hidden field', 'program__8': 'hidden field', });
lyr_LicensedChildcare_12.set('fieldLabels', {'ProviderID': 'hidden field', 'DoingBusin': 'hidden field', 'Street': 'no label', 'City': 'no label', 'STATE': 'no label', 'County': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'FacilityTy': 'hidden field', 'DayAgeRang': 'hidden field', 'NightAgeRa': 'hidden field', 'Languages': 'hidden field', 'Language1': 'hidden field', 'Language2': 'hidden field', 'Language3': 'hidden field', 'DayCapacit': 'hidden field', 'NightCapac': 'hidden field', 'Status': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_CountyLines_13.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'CLASSFP': 'hidden field', 'MTFCC': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', });
lyr_SchoolDistricts_14.set('fieldLabels', {'STATEFP': 'hidden field', 'ELSDLEA': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'no label', 'LSAD': 'hidden field', 'LOGRADE': 'hidden field', 'HIGRADE': 'hidden field', 'MTFCC': 'hidden field', 'SDTYP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'no label', 'ALL DATA_3': 'hidden field', 'ALL DATA_4': 'hidden field', 'ALL DATA_5': 'hidden field', 'ALL DATA_6': 'hidden field', 'ALL DATA_7': 'hidden field', 'ALL DATA_8': 'hidden field', 'ALL DATA_9': 'hidden field', 'ALL DATA10': 'hidden field', 'ALL DATA11': 'no label', 'ALL DATA12': 'hidden field', 'ALL DATA13': 'hidden field', 'ALL DATA14': 'hidden field', 'ALL DATA15': 'hidden field', 'ALL DATA16': 'hidden field', 'ALL DATA17': 'hidden field', 'ALL DATA18': 'hidden field', 'ALL DATA19': 'hidden field', 'ALL DATA20': 'hidden field', 'ALL DATA21': 'hidden field', 'ALL DATA22': 'hidden field', 'ALL DATA23': 'hidden field', 'ALL DATA24': 'hidden field', 'ALL DATA25': 'hidden field', 'UNSDLEA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SchoolDistricts_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});