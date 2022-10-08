
configure:
	eas build:configure
run-local:
	eas build --profile development --platform android
build:
	eas build -p android	
build-local:
	eas build --profile preview --platform all	
run-local-studio:
	npx expo run:android

#To build and run on a connected device:
#npx expo run:android -d

