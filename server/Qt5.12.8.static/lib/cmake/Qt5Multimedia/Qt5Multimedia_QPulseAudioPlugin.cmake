
add_library(Qt5::QPulseAudioPlugin MODULE IMPORTED)

_populate_Multimedia_plugin_properties(QPulseAudioPlugin RELEASE "audio/libqtmedia_pulse.a")

list(APPEND Qt5Multimedia_PLUGINS Qt5::QPulseAudioPlugin)
