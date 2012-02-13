/**
 * 使い方
 *   サイドバーに追加
 */
(function($) {
  var $module_body = $('.hatena-module-body:last');

  $module_body.parent()
    .removeClass('hatena-module-html')
    .addClass('hatena-module-categories')
    .prepend($('<div>').addClass('hatena-module-title').text('カテゴリー'));

  $.get('/categories').done(function(html) {
    $module_body.html(html.replace(
      /[\s\S]*<div class="entry-content">\s*|\s*<\/div>[\s\S]*/g, ''));
  });
})(jQuery);
