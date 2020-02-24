// loadJS module
!function(e){e.loadJS=function(n,t,o){'use strict';var a,c=e.document.head||e.document.getElementsByTagName('head')[0],d=e.document.createElement('script');return'boolean'==typeof t&&(a=o,o=t,t=a),d.async=!o,d.src=n,c.appendChild(d),t&&'function'==typeof t&&(d.onload=t),d}}('undefined'!=typeof global?global:this);

/**
 * Remove value(s) from an array
 *
 * @return {array} Modified array
 */
if (typeof Array.prototype.remove == 'undefined' || typeof Array.prototype.remove == null) {
  Array.prototype.remove = function() {
    var what,
      a = arguments,
      L = a.length,
      ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
}

