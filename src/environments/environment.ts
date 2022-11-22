// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  firebase: {
    projectId: 'security-xss',
    appId: '1:330636261948:web:f6d5d5fb82f666b6c6e139',
    storageBucket: 'security-xss.appspot.com',
    apiKey: 'AIzaSyBpGHTfzyeK_FUb3vlE-cV5ZHhbXQls338',
    authDomain: 'security-xss.firebaseapp.com',
    messagingSenderId: '330636261948',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
