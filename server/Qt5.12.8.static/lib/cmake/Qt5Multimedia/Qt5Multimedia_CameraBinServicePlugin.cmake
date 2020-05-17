
add_library(Qt5::CameraBinServicePlugin MODULE IMPORTED)

_populate_Multimedia_plugin_properties(CameraBinServicePlugin RELEASE "mediaservice/libgstcamerabin.a")

list(APPEND Qt5Multimedia_PLUGINS Qt5::CameraBinServicePlugin)
