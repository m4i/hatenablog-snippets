/**
 * 2012-02-04 現在、機能していない「続きを読む記法」を動作するようにする
 *
 * 使い方
 *   サイドバーに追加
 */
(function($) {
  if (!(location.pathname === '/' ||
        location.pathname.indexOf('/category/') === 0)) return;

  function pathname(url) {
    return url.replace(/^https?:\/\/[^\/]*|[#?].*$/g, '');
  }

  $('article.entry').each(function() {
    var $seemore = $(this).find('div.entry-content div.seemore');
    if ($seemore.length === 0) return;

    var url = $(this)
      .find('header.entry-header a.entry-title-link').attr('href');

    var $a = $seemore.find('a');
    if ($a.length === 1 && pathname($a.attr('href')) === pathname(url)) return;

    var $tail = $('<a>')
      .addClass('seemore')
      .attr('href', url)
      .text('続きを読む')
      .prependTo($seemore);

    while (!$tail.hasClass('entry-content')) {
      $tail.nextAll().detach();
      $tail = $tail.parent();
    }
  });
})(jQuery);
