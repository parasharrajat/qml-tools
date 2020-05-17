QT.multimedia_private.VERSION = 5.12.8
QT.multimedia_private.name = QtMultimedia
QT.multimedia_private.module =
QT.multimedia_private.libs = $$QT_MODULE_LIB_BASE
QT.multimedia_private.includes = $$QT_MODULE_INCLUDE_BASE/QtMultimedia/5.12.8 $$QT_MODULE_INCLUDE_BASE/QtMultimedia/5.12.8/QtMultimedia
QT.multimedia_private.frameworks =
QT.multimedia_private.depends = core_private gui_private multimedia
QT.multimedia_private.uses = pulseaudio
QT.multimedia_private.module_config = v2 staticlib internal_module
QT.multimedia_private.enabled_features = alsa gstreamer_1_0 gstreamer gstreamer_app gstreamer_encodingprofiles gstreamer_photography linux_v4l openal pulseaudio
QT.multimedia_private.disabled_features = directshow directshow-player evr gpu_vivante gstreamer_0_10 resourcepolicy wasapi wmf wmf-player wmsdk wshellitem
QMAKE_LIBS_ALSA = /usr/lib/libasound.so
QMAKE_LIBS_GSTREAMER = /usr/lib/libgstpbutils-1.0.so /usr/lib/libgstaudio-1.0.so /usr/lib/libgstvideo-1.0.so /usr/lib/libgstbase-1.0.so /usr/lib/libgstreamer-1.0.so /usr/lib/libgobject-2.0.so /usr/lib/libglib-2.0.so
QMAKE_INCDIR_GSTREAMER = /usr/include/gstreamer-1.0 /usr/include/glib-2.0 /usr/lib/glib-2.0/include /usr/include/orc-0.4
QMAKE_DEPENDS_GSTREAMER_APP_CC = GSTREAMER
QMAKE_DEPENDS_GSTREAMER_APP_LD = GSTREAMER
QMAKE_LIBS_GSTREAMER_APP = /usr/lib/libgstapp-1.0.so
QMAKE_DEPENDS_GSTREAMER_PHOTOGRAPHY_CC = GSTREAMER
QMAKE_DEPENDS_GSTREAMER_PHOTOGRAPHY_LD = GSTREAMER
QMAKE_LIBS_GSTREAMER_PHOTOGRAPHY = /usr/lib/libgstphotography-1.0.so
QMAKE_LIBS_OPENAL = /usr/lib/libopenal.so
QMAKE_INCDIR_OPENAL = /usr/include/AL
QMAKE_LIBS_PULSEAUDIO = /usr/lib/libpulse-mainloop-glib.so /usr/lib/libpulse.so /usr/lib/libglib-2.0.so
QMAKE_DEFINES_PULSEAUDIO = _REENTRANT
QMAKE_INCDIR_PULSEAUDIO = /usr/include/glib-2.0 /usr/lib/glib-2.0/include
