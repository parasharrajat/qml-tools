
add_library(Qt5::VirtualCanBusPlugin MODULE IMPORTED)

_populate_SerialBus_plugin_properties(VirtualCanBusPlugin RELEASE "canbus/libqtvirtualcanbus.a")

list(APPEND Qt5SerialBus_PLUGINS Qt5::VirtualCanBusPlugin)
