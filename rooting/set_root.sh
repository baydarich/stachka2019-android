adb root
adb remount
adb push ./su.pie /system/bin/su
adb shell chmod 06755 /system/bin/su
adb shell su --install
adb shell su --daemon&
adb shell setenforce 0
adb install supersu-2.82.apk