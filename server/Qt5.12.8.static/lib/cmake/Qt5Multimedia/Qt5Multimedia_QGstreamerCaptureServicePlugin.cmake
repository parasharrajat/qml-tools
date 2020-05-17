
add_library(Qt5::QGstreamerCaptureServicePlugin MODULE IMPORTED)

_populate_Multimedia_plugin_properties(QGstreamerCaptureServicePlugin RELEASE "mediaservice/libgstmediacapture.a")

list(APPEND Qt5Multimedia_PLUGINS Qt5::QGstreamerCaptureServicePlugin)
