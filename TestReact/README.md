# Knowledge Base
## Running the Application
```
# Install webpack globally, you might need "sudo"
npm install -g webpack
# Install cordova globally, you might need "sudo"
npm install -g cordova
# Install local node modules
npm install
# package up the react app
webpack
# add platform
cordova add platform <platform:[android/ios]>
# package the application for the specific platform
cordova build <platform:[android/ios]>
```

## Notes
* cordova build anroid package needs Android Studio/SDK installed, the ANDROID_HOME path needs to be set, the android sdk API23 version also needs to be installed through **android sdk manager**
* cordova build ios needs xcode installed
