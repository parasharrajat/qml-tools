
add_library(Qt5::QGeoPositionInfoSourceFactoryGeoclue2 MODULE IMPORTED)

_populate_Positioning_plugin_properties(QGeoPositionInfoSourceFactoryGeoclue2 RELEASE "position/libqtposition_geoclue2.a")

list(APPEND Qt5Positioning_PLUGINS Qt5::QGeoPositionInfoSourceFactoryGeoclue2)
