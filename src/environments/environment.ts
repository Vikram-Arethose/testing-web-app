// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    enablePushNotifications: false,
    pushEnabled: false,
  production: false,
  serverUrl: 'https://dev.server6.w3control.de/api',
  firebaseConfig: {
    apiKey: 'AIzaSyDJO2_bi4MbTVRaSzcwj_jg-AvMYRA_9lQ',
    authDomain: 'brotchenuserapp-4f1b7.firebaseapp.com',
    databaseURL: 'https://brotchenuserapp-4f1b7.firebaseio.com',
    projectId: 'brotchenuserapp-4f1b7',
    storageBucket: 'brotchenuserapp-4f1b7.appspot.com',
    messagingSenderId: '997978298378',
    appId: '1:997978298378:web:5528b0c2850886fe7f27f3',
    measurementId: 'G-VDGTY7D2RS'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
