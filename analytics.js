/**
 * Google Analytics の Tracking Code を追加する
 *
 * 使い方
 *   'UA-XXXXX-X' を書き換えてサイドバーに追加
 *
 * サイドバーはモバイルページでは出力されないので、
 * モバイルページもトラッキングしたい場合は analytics-touch.html を参照
 */
(function() {
  var account = 'UA-XXXXX-X';

  if (!window._gaq) return;
  if (/^\/preview\b/.test(location.pathname)) return;
  if (/[&?]preview=/.test(location.search)) return;

  var prefix = account.replace(/\W/g, '');
  _gaq.push(
    [prefix + '._setAccount', account],
    [prefix + '._trackPageview'],
    [prefix + '._trackPageLoadTime']
  );
})();
