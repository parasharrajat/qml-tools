
add_library(Qt5::QtVirtualKeyboardHunspellPlugin MODULE IMPORTED)

_populate_VirtualKeyboard_plugin_properties(QtVirtualKeyboardHunspellPlugin RELEASE "virtualkeyboard/libqtvirtualkeyboard_hunspell.a")

list(APPEND Qt5VirtualKeyboard_PLUGINS Qt5::QtVirtualKeyboardHunspellPlugin)
