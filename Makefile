
configure:
	eas build:configure
run:
	eas build --profile development --platform android
run-local-studio:
	npx expo run:android

#To build and run on a connected device:
#npx expo run:android -d

