/**
 * analytics-touch.html の圧縮前のコード
 */
(function(account) {
  if (!window._gaq) return;
  if (location.pathname.indexOf('/touch/entry/')) return;

  var prefix = account.replace(/\W/g, '');
  _gaq.push(
    [prefix + '._setAccount', account],
    [prefix + '._trackPageview'],
    [prefix + '._trackPageLoadTime']
  );
})('UA-XXXXX-X');
