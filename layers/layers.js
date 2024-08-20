ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-90.166679, 40.121214, -88.806634, 41.234338]);
var wms_layers = [];

var format_GQ_0 = new ol.format.GeoJSON();
var features_GQ_0 = format_GQ_0.readFeatures(json_GQ_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
var format_01_1 = new ol.format.GeoJSON();
var features_01_1 = format_01_1.readFeatures(json_01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_1.addFeatures(features_01_1);
var lyr_01_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_1, 
                style: style_01_1,
                popuplayertitle: "01",
                interactive: false,
                title: '<img src="styles/legend/01_1.png" /> 01'
            });
var format_02_2 = new ol.format.GeoJSON();
var features_02_2 = format_02_2.readFeatures(json_02_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_02_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_2.addFeatures(features_02_2);
var lyr_02_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_2, 
                style: style_02_2,
                popuplayertitle: "02",
                interactive: false,
                title: '<img src="styles/legend/02_2.png" /> 02'
            });
var format_03_3 = new ol.format.GeoJSON();
var features_03_3 = format_03_3.readFeatures(json_03_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_03_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_3.addFeatures(features_03_3);
var lyr_03_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_3, 
                style: style_03_3,
                popuplayertitle: "03",
                interactive: false,
                title: '<img src="styles/legend/03_3.png" /> 03'
            });
var format_04_4 = new ol.format.GeoJSON();
var features_04_4 = format_04_4.readFeatures(json_04_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_04_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_4.addFeatures(features_04_4);
var lyr_04_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_4, 
                style: style_04_4,
                popuplayertitle: "04",
                interactive: false,
                title: '<img src="styles/legend/04_4.png" /> 04'
            });
var format_05_5 = new ol.format.GeoJSON();
var features_05_5 = format_05_5.readFeatures(json_05_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_05_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_5.addFeatures(features_05_5);
var lyr_05_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_5, 
                style: style_05_5,
                popuplayertitle: "05",
                interactive: false,
                title: '<img src="styles/legend/05_5.png" /> 05'
            });
var format_06_6 = new ol.format.GeoJSON();
var features_06_6 = format_06_6.readFeatures(json_06_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_06_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_6.addFeatures(features_06_6);
var lyr_06_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_6, 
                style: style_06_6,
                popuplayertitle: "06",
                interactive: false,
                title: '<img src="styles/legend/06_6.png" /> 06'
            });
var format_07_7 = new ol.format.GeoJSON();
var features_07_7 = format_07_7.readFeatures(json_07_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_07_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_7.addFeatures(features_07_7);
var lyr_07_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_7, 
                style: style_07_7,
                popuplayertitle: "07",
                interactive: false,
                title: '<img src="styles/legend/07_7.png" /> 07'
            });
var format_08_8 = new ol.format.GeoJSON();
var features_08_8 = format_08_8.readFeatures(json_08_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_08_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_8.addFeatures(features_08_8);
var lyr_08_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_8, 
                style: style_08_8,
                popuplayertitle: "08",
                interactive: false,
                title: '<img src="styles/legend/08_8.png" /> 08'
            });
var format_09_9 = new ol.format.GeoJSON();
var features_09_9 = format_09_9.readFeatures(json_09_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_09_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_9.addFeatures(features_09_9);
var lyr_09_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_09_9, 
                style: style_09_9,
                popuplayertitle: "09",
                interactive: false,
                title: '<img src="styles/legend/09_9.png" /> 09'
            });
var format_10_10 = new ol.format.GeoJSON();
var features_10_10 = format_10_10.readFeatures(json_10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10_10.addFeatures(features_10_10);
var lyr_10_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10_10, 
                style: style_10_10,
                popuplayertitle: "10",
                interactive: false,
                title: '<img src="styles/legend/10_10.png" /> 10'
            });
var format_SchoolDistricts_11 = new ol.format.GeoJSON();
var features_SchoolDistricts_11 = format_SchoolDistricts_11.readFeatures(json_SchoolDistricts_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SchoolDistricts_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolDistricts_11.addFeatures(features_SchoolDistricts_11);
var lyr_SchoolDistricts_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchoolDistricts_11, 
                style: style_SchoolDistricts_11,
                popuplayertitle: "School Districts",
                interactive: false,
                title: '<img src="styles/legend/SchoolDistricts_11.png" /> School Districts'
            });
var format_CountyLines_12 = new ol.format.GeoJSON();
var features_CountyLines_12 = format_CountyLines_12.readFeatures(json_CountyLines_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CountyLines_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyLines_12.addFeatures(features_CountyLines_12);
var lyr_CountyLines_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyLines_12, 
                style: style_CountyLines_12,
                popuplayertitle: "County Lines",
                interactive: false,
                title: '<img src="styles/legend/CountyLines_12.png" /> County Lines'
            });
var format_PartnerOrganizations_13 = new ol.format.GeoJSON();
var features_PartnerOrganizations_13 = format_PartnerOrganizations_13.readFeatures(json_PartnerOrganizations_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PartnerOrganizations_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartnerOrganizations_13.addFeatures(features_PartnerOrganizations_13);
var lyr_PartnerOrganizations_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartnerOrganizations_13, 
                style: style_PartnerOrganizations_13,
                popuplayertitle: "Partner Organizations",
                interactive: true,
                title: '<img src="styles/legend/PartnerOrganizations_13.png" /> Partner Organizations'
            });
var format_LicensedChildcare_14 = new ol.format.GeoJSON();
var features_LicensedChildcare_14 = format_LicensedChildcare_14.readFeatures(json_LicensedChildcare_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LicensedChildcare_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LicensedChildcare_14.addFeatures(features_LicensedChildcare_14);
var lyr_LicensedChildcare_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LicensedChildcare_14, 
                style: style_LicensedChildcare_14,
                popuplayertitle: "Licensed Childcare",
                interactive: true,
                title: '<img src="styles/legend/LicensedChildcare_14.png" /> Licensed Childcare'
            });
var format_HeadStart_15 = new ol.format.GeoJSON();
var features_HeadStart_15 = format_HeadStart_15.readFeatures(json_HeadStart_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HeadStart_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeadStart_15.addFeatures(features_HeadStart_15);
var lyr_HeadStart_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeadStart_15, 
                style: style_HeadStart_15,
                popuplayertitle: "Head Start",
                interactive: true,
                title: '<img src="styles/legend/HeadStart_15.png" /> Head Start'
            });
var group_ADIRank = new ol.layer.Group({
                                layers: [lyr_GQ_0,lyr_01_1,lyr_02_2,lyr_03_3,lyr_04_4,lyr_05_5,lyr_06_6,lyr_07_7,lyr_08_8,lyr_09_9,lyr_10_10,],
                                fold: "open",
                                title: "ADI Rank"});

lyr_GQ_0.setVisible(true);lyr_01_1.setVisible(true);lyr_02_2.setVisible(true);lyr_03_3.setVisible(true);lyr_04_4.setVisible(true);lyr_05_5.setVisible(true);lyr_06_6.setVisible(true);lyr_07_7.setVisible(true);lyr_08_8.setVisible(true);lyr_09_9.setVisible(true);lyr_10_10.setVisible(true);lyr_SchoolDistricts_11.setVisible(true);lyr_CountyLines_12.setVisible(true);lyr_PartnerOrganizations_13.setVisible(true);lyr_LicensedChildcare_14.setVisible(true);lyr_HeadStart_15.setVisible(true);
var layersList = [group_ADIRank,lyr_SchoolDistricts_11,lyr_CountyLines_12,lyr_PartnerOrganizations_13,lyr_LicensedChildcare_14,lyr_HeadStart_15];
lyr_GQ_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_01_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_02_2.set('fieldAliases', {'id': 'id', });
lyr_03_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_04_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_05_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_06_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_07_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_08_8.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_09_9.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_10_10.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', });
lyr_SchoolDistricts_11.set('fieldAliases', {'STATEFP': 'STATEFP', 'ELSDLEA': 'ELSDLEA', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LOGRADE': 'LOGRADE', 'HIGRADE': 'HIGRADE', 'MTFCC': 'MTFCC', 'SDTYP': 'SDTYP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'ALL DATA -': 'ALL DATA -', 'ALL DATA_1': 'ALL DATA_1', 'ALL DATA_2': 'ALL DATA_2', 'ALL DATA_3': 'ALL DATA_3', 'ALL DATA_4': 'ALL DATA_4', 'ALL DATA_5': 'ALL DATA_5', 'ALL DATA_6': 'ALL DATA_6', 'ALL DATA_7': 'ALL DATA_7', 'ALL DATA_8': 'ALL DATA_8', 'ALL DATA_9': 'ALL DATA_9', 'ALL DATA10': 'ALL DATA10', 'ALL DATA11': 'ALL DATA11', 'ALL DATA12': 'ALL DATA12', 'ALL DATA13': 'ALL DATA13', 'ALL DATA14': 'ALL DATA14', 'ALL DATA15': 'ALL DATA15', 'ALL DATA16': 'ALL DATA16', 'ALL DATA17': 'ALL DATA17', 'ALL DATA18': 'ALL DATA18', 'ALL DATA19': 'ALL DATA19', 'ALL DATA20': 'ALL DATA20', 'ALL DATA21': 'ALL DATA21', 'ALL DATA22': 'ALL DATA22', 'ALL DATA23': 'ALL DATA23', 'ALL DATA24': 'ALL DATA24', 'ALL DATA25': 'ALL DATA25', 'UNSDLEA': 'UNSDLEA', 'layer': 'layer', 'path': 'path', 'Label': 'Label', });
lyr_CountyLines_12.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_PartnerOrganizations_13.set('fieldAliases', {'Community': 'Community', 'Title': 'Title', 'Website': 'Website', 'Phone': 'Phone', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'Contact Na': 'Contact Na', 'Contact Em': 'Contact Em', 'Contact Ph': 'Contact Ph', 'Status': 'Status', 'Created At': 'Created At', 'Deactivate': 'Deactivate', 'Suspended': 'Suspended', 'Responsibl': 'Responsibl', 'Responsi_1': 'Responsi_1', 'Eligiblity': 'Eligiblity', 'Purpose': 'Purpose', 'Service ar': 'Service ar', 'Tags': 'Tags', 'Additional': 'Additional', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_LicensedChildcare_14.set('fieldAliases', {'ProviderID': 'ProviderID', 'DoingBusin': 'DoingBusin', 'Street': 'Street', 'City': 'City', 'STATE': 'STATE', 'County': 'County', 'Zip': 'Zip', 'Phone': 'Phone', 'FacilityTy': 'FacilityTy', 'DayAgeRang': 'DayAgeRang', 'NightAgeRa': 'NightAgeRa', 'Languages': 'Languages', 'Language1': 'Language1', 'Language2': 'Language2', 'Language3': 'Language3', 'DayCapacit': 'DayCapacit', 'NightCapac': 'NightCapac', 'Status': 'Status', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HeadStart_15.set('fieldAliases', {'grant_Numb': 'grant_Numb', 'program_ty': 'program_ty', 'recipient_': 'recipient_', 'service_lo': 'service_lo', 'address_li': 'address_li', 'address__1': 'address__1', 'city': 'city', 'state': 'state', 'zip': 'zip', 'zip_4': 'zip_4', 'latitude': 'latitude', 'longitude': 'longitude', 'county': 'county', 'funded_slo': 'funded_slo', 'status': 'status', 'registrati': 'registrati', 'service__1': 'service__1', 'program_ad': 'program_ad', 'program__1': 'program__1', 'program__2': 'program__2', 'program__3': 'program__3', 'program__4': 'program__4', 'program__5': 'program__5', 'program__6': 'program__6', 'program__7': 'program__7', 'program__8': 'program__8', });
lyr_GQ_0.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_01_1.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_02_2.set('fieldImages', {'id': '', });
lyr_03_3.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_04_4.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_05_5.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_06_6.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_07_7.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_08_8.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_09_9.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_10_10.set('fieldImages', {'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOID': '', 'NAMELSAD': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', });
lyr_SchoolDistricts_11.set('fieldImages', {'STATEFP': '', 'ELSDLEA': '', 'GEOID': '', 'NAME': '', 'LSAD': '', 'LOGRADE': '', 'HIGRADE': '', 'MTFCC': '', 'SDTYP': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'ALL DATA -': '', 'ALL DATA_1': '', 'ALL DATA_2': '', 'ALL DATA_3': '', 'ALL DATA_4': '', 'ALL DATA_5': '', 'ALL DATA_6': '', 'ALL DATA_7': '', 'ALL DATA_8': '', 'ALL DATA_9': '', 'ALL DATA10': '', 'ALL DATA11': '', 'ALL DATA12': '', 'ALL DATA13': '', 'ALL DATA14': '', 'ALL DATA15': '', 'ALL DATA16': '', 'ALL DATA17': '', 'ALL DATA18': '', 'ALL DATA19': '', 'ALL DATA20': '', 'ALL DATA21': '', 'ALL DATA22': '', 'ALL DATA23': '', 'ALL DATA24': '', 'ALL DATA25': '', 'UNSDLEA': '', 'layer': '', 'path': '', 'Label': '', });
lyr_CountyLines_12.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_PartnerOrganizations_13.set('fieldImages', {'Community': '', 'Title': '', 'Website': '', 'Phone': '', 'Address': '', 'City': '', 'State': '', 'Zip': '', 'Contact Na': '', 'Contact Em': '', 'Contact Ph': '', 'Status': '', 'Created At': '', 'Deactivate': '', 'Suspended': '', 'Responsibl': '', 'Responsi_1': '', 'Eligiblity': '', 'Purpose': '', 'Service ar': '', 'Tags': '', 'Additional': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_LicensedChildcare_14.set('fieldImages', {'ProviderID': '', 'DoingBusin': '', 'Street': '', 'City': '', 'STATE': '', 'County': '', 'Zip': '', 'Phone': '', 'FacilityTy': '', 'DayAgeRang': '', 'NightAgeRa': '', 'Languages': '', 'Language1': '', 'Language2': '', 'Language3': '', 'DayCapacit': '', 'NightCapac': '', 'Status': '', 'result_num': '', 'osm_id': '', 'display_na': '', 'category': '', 'type': '', 'latlong': '', });
lyr_HeadStart_15.set('fieldImages', {'grant_Numb': '', 'program_ty': '', 'recipient_': '', 'service_lo': '', 'address_li': '', 'address__1': '', 'city': '', 'state': '', 'zip': '', 'zip_4': '', 'latitude': '', 'longitude': '', 'county': '', 'funded_slo': '', 'status': '', 'registrati': '', 'service__1': '', 'program_ad': '', 'program__1': '', 'program__2': '', 'program__3': '', 'program__4': '', 'program__5': '', 'program__6': '', 'program__7': '', 'program__8': '', });
lyr_GQ_0.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_01_1.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_02_2.set('fieldLabels', {'id': 'hidden field', });
lyr_03_3.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_04_4.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_05_5.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_06_6.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_07_7.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_08_8.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_09_9.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_10_10.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', });
lyr_SchoolDistricts_11.set('fieldLabels', {'STATEFP': 'hidden field', 'ELSDLEA': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'no label', 'LSAD': 'hidden field', 'LOGRADE': 'hidden field', 'HIGRADE': 'hidden field', 'MTFCC': 'hidden field', 'SDTYP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'ALL DATA -': 'hidden field', 'ALL DATA_1': 'hidden field', 'ALL DATA_2': 'hidden field', 'ALL DATA_3': 'hidden field', 'ALL DATA_4': 'hidden field', 'ALL DATA_5': 'hidden field', 'ALL DATA_6': 'hidden field', 'ALL DATA_7': 'hidden field', 'ALL DATA_8': 'hidden field', 'ALL DATA_9': 'hidden field', 'ALL DATA10': 'hidden field', 'ALL DATA11': 'hidden field', 'ALL DATA12': 'hidden field', 'ALL DATA13': 'hidden field', 'ALL DATA14': 'hidden field', 'ALL DATA15': 'hidden field', 'ALL DATA16': 'hidden field', 'ALL DATA17': 'hidden field', 'ALL DATA18': 'hidden field', 'ALL DATA19': 'hidden field', 'ALL DATA20': 'hidden field', 'ALL DATA21': 'hidden field', 'ALL DATA22': 'hidden field', 'ALL DATA23': 'hidden field', 'ALL DATA24': 'hidden field', 'ALL DATA25': 'hidden field', 'UNSDLEA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Label': 'hidden field', });
lyr_CountyLines_12.set('fieldLabels', {'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'COUNTYNS': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'CLASSFP': 'hidden field', 'MTFCC': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', });
lyr_PartnerOrganizations_13.set('fieldLabels', {'Community': 'no label', 'Title': 'no label', 'Website': 'no label', 'Phone': 'hidden field', 'Address': 'hidden field', 'City': 'no label', 'State': 'hidden field', 'Zip': 'hidden field', 'Contact Na': 'hidden field', 'Contact Em': 'hidden field', 'Contact Ph': 'hidden field', 'Status': 'hidden field', 'Created At': 'hidden field', 'Deactivate': 'hidden field', 'Suspended': 'hidden field', 'Responsibl': 'hidden field', 'Responsi_1': 'hidden field', 'Eligiblity': 'hidden field', 'Purpose': 'no label', 'Service ar': 'no label', 'Tags': 'hidden field', 'Additional': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_LicensedChildcare_14.set('fieldLabels', {'ProviderID': 'hidden field', 'DoingBusin': 'hidden field', 'Street': 'hidden field', 'City': 'no label', 'STATE': 'hidden field', 'County': 'no label', 'Zip': 'hidden field', 'Phone': 'hidden field', 'FacilityTy': 'hidden field', 'DayAgeRang': 'inline label - visible with data', 'NightAgeRa': 'inline label - always visible', 'Languages': 'hidden field', 'Language1': 'hidden field', 'Language2': 'hidden field', 'Language3': 'hidden field', 'DayCapacit': 'inline label - visible with data', 'NightCapac': 'inline label - visible with data', 'Status': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_HeadStart_15.set('fieldLabels', {'grant_Numb': 'hidden field', 'program_ty': 'hidden field', 'recipient_': 'hidden field', 'service_lo': 'no label', 'address_li': 'hidden field', 'address__1': 'hidden field', 'city': 'no label', 'state': 'hidden field', 'zip': 'hidden field', 'zip_4': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'county': 'no label', 'funded_slo': 'hidden field', 'status': 'hidden field', 'registrati': 'hidden field', 'service__1': 'hidden field', 'program_ad': 'hidden field', 'program__1': 'hidden field', 'program__2': 'hidden field', 'program__3': 'hidden field', 'program__4': 'hidden field', 'program__5': 'hidden field', 'program__6': 'hidden field', 'program__7': 'hidden field', 'program__8': 'hidden field', });
lyr_HeadStart_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});