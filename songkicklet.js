/*jslint browser: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, maxlen: 80, indent: 2 */
(function (window) {
  var base_url = "http://www.songkick.com/",
  selected_text = encodeURIComponent(window.getSelection().toString()),
  url = base_url + "concerts/new?event[headliner_names][0]=" + selected_text;
  window.open(url);
}(window));
