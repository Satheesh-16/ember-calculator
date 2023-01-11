export function initialize(application) {
  var style1 = 'color:red;font-size:xx-large;font-weight:bold';
  var style2 = 'font-size:large;';

  window.console.log('%c🚫STOP!', style1);
  window.console.log(
    "%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details",
    style2
  );
}

export default {
  initialize,
};
