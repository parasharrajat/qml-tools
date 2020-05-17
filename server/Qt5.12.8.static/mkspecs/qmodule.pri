QT_CPU_FEATURES.x86_64 = mmx sse sse2
QT.global_private.enabled_features = sse2 alloca_h alloca avx2 dbus dbus-linked gc_binaries gui libudev network posix_fallocate reduce_exports reduce_relocations sql system-zlib testlib widgets xml
QT.global_private.disabled_features = android-style-assets alloca_malloc_h private_tests release_tools stack-protector-strong
PKG_CONFIG_EXECUTABLE = /usr/bin/pkg-config
QMAKE_LIBS_DBUS = /usr/lib/libdbus-1.so
QMAKE_INCDIR_DBUS = /usr/include/dbus-1.0 /usr/lib/dbus-1.0/include
QMAKE_LIBS_LIBUDEV = /usr/lib/libudev.so
QT_COORD_TYPE = double
QMAKE_LIBS_ZLIB = /usr/lib/libz.so
CONFIG += use_gold_linker sse2 aesni sse3 ssse3 sse4_1 sse4_2 avx avx2 avx512f avx512bw avx512cd avx512dq avx512er avx512ifma avx512pf avx512vbmi avx512vl compile_examples enable_new_dtags f16c largefile precompile_header rdrnd shani x86SimdAlways
QT_BUILD_PARTS += libs tools
QT_HOST_CFLAGS_DBUS += -I/usr/include/dbus-1.0 -I/usr/lib/dbus-1.0/include