/*jslint browser: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, maxlen: 80, indent: 2 */
(function () {
  var base_url = "http://www.songkick.com/",
  selected_text = window.getSelection().toString(),
  url = base_url + "concerts/new?headliners[0][name]=" + selected_text;
  window.open(url);
}());