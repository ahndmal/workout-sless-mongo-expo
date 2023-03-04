
configure:
	eas build:configure
run-local:
	eas build --profile development --platform android
build:
	eas build --profile preview --platform android	
build-local:
	eas build --profile preview --platform all	
run-local-studio:
	npx expo run:android
	eas build:run -p android

