// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // tslint:disable-next-line:quotemark
    apiKey: "AIzaSyAgDnumhSqUbvhwyD5smUTtkfjFfySSKXU",
    authDomain: 'ecapp-9420e.firebaseapp.com',
    databaseURL: 'https://ecapp-9420e.firebaseio.com',
    projectId: 'ecapp-9420e',
    storageBucket: '',
    messagingSenderId: '984215390087'
  }
};
