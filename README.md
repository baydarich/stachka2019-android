# Android workshop



```
# mobsf
docker run -it -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest

# emulator
cd ~/Android/Sdk/emulator
./emulator -writable-system -selinux disabled -avd stachka

# test server
cd Android-InsecureBankv2/AndroLabServer
python app.py


pip install frida-tools

cd rooting
sh set_root.sh

cd burp-cert
sh burp-to-android.sh burp-cert.der

cd Android-InsecureBankv2
adb install InsecureBankv2.apk

adb reverse tcp:8080 tcp:8080

adb shell pm list packages
adb logcat --pid=`adb shell pidof -s com.android.insecurebankv2`

# internal storage
adb pull /data/data/com.android.insecurebankv2

# activity
adb shell am start -n com.android.insecurebankv2/.PostLogin

# content provider
adb shell content query --uri content://com.android.insecurebankv2.TrackUserContentProvider/trackerusers

# root detection
cd frida
frida -l root.js -U -f com.android.insecurebankv2 --no-pause
```

