# BrotchenApp - app for users
For adding google sign in doing next steps: 
1. npm i @codetrix-studio/capacitor-google-auth
2. In capacitor.config.json set the right bundle ID (appId).
3. Now you can add the native platforms after running one initial build:
   - ionic build
   - npx cap add ios
   - npx cap add android
4. Open the Firebase project settings and click Add app and select Android.
5. Put in the correct bundle ID of your app – the one that’s already in your capacitor.config.json.
6. For SHA-1 debug signing certificate get the output for this key by running command:
    _keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore_
7. Download the google-services.json file and move it to the android/app folder inside your Ionic project.
8. Make a change to the android/app/src/main/res/values/strings.xml and add an entry for the server_client_id: _
    <string name="server_client_id">REPLACEME.apps.googleusercontent.com</string>_
9. Visit the Google APIs console and copy from the OAuth 2.0 Client IDs section, the row Web client and more specific the Client ID in that row.
 This is your client ID from now on, so paste it into the Android strings file we opened a minute agoand set it as your server_client_id
10. Inside the Google APIs console you also see a warning for the OAuth consent screen, which you should fill out now as you will get into trouble later otherwise.
11. Inside your Firebase project, go to the Authentication menu, select the Sign-in method tab and activate Google sign in – after hitting safe, this fixed all the OAuth consent screen issues!
12. Since the Google APIs view is already open, we can make another tiny change to our Web Client, so simply click on the row where you copied the key before and now open the details for it.
    In the following screen we can add Authorized JavaScript origins, and if you take a look at the list you’ll see that the usual port 8100 where Ionic apps are served is missing. Go ahead and click the button to add a new URI with our port.
13. Open the android/app/src/main/java/com/devdactic/capalogin/MainActivity.java which is the starting point of the native Android application and add two lines to import and use our plugin: 
_import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;_
 _add(GoogleAuth.class);_  
14. In order to also test our Google Sign In on the web, open the src/index.html and put the following line with your client ID into the head tag of your page: 
_<meta name="google-signin-client_id" content="REPLACEME.apps.googleusercontent.com">_
15. Besides that we also need the value in our capacitor.config.json to configure the plugin correctly, so open it and add the whole plugins block to your configuration file:
 _"GoogleAuth": {
      "scopes": [
        "profile",
        "email"
      ],
      "serverClientId": "REPLACEME.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }_
 16. To use this plugin you should add imports and one line of code: <br> 
import '@codetrix-studio/capacitor-google-auth'; <br>
import { Plugins } from '@capacitor/core';  <br>
 const googleUser = await Plugins.GoogleAuth.signIn(null) as any;  
17. Console commands for production building project:      
    ionic cap run ios --prod
    ionic cap run android --prod

    

 
    
          
    
    
