rm hosts
adb root
adb remount
adb pull /etc/hosts hosts
echo "10.0.2.2\tswinecart.test\n" >> hosts
adb push hosts /etc/hosts
adb pull /etc/hosts hosts
cat hosts