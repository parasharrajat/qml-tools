
add_library(Qt5::QtVirtualKeyboardHangulPlugin MODULE IMPORTED)

_populate_VirtualKeyboard_plugin_properties(QtVirtualKeyboardHangulPlugin RELEASE "virtualkeyboard/libqtvirtualkeyboard_hangul.a")

list(APPEND Qt5VirtualKeyboard_PLUGINS Qt5::QtVirtualKeyboardHangulPlugin)
