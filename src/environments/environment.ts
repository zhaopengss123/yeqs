// This file can be replaced during build by using the `fileReplacements` array.
<<<<<<< HEAD
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '0.0.0',
  domainWs: '',
  //domain: 'http://terp.yuerqinshui.com'
  domain: 'http://39.107.232.95:6056/new_bss'
  //domain: 'http://192.168.1.207:8080'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact   throw error
 */
// import 'zone.js/dist/zone-error';   // Included with Angular CLI.
=======
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  version: '0.0.1',
  domain: 'http://192.168.1.128:8080',
  //domain: 'http://39.107.232.95:6056/new_bss',
  domainPay: 'https://tpay.beibeiyue.com/pay',
  domainOss: 'https://oss.beibeiyue.com',
  domainEs: 'http://es.beibeiyue.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
>>>>>>> upgrade
