$(document).ready(function () {

  $(window).on('hashchange', route);

  function route() {
    var hash = window.location.hash;
    switch (hash) {

      case "#factures":
        $.get("template/factures.tpl.html", function (template) {
          $.getJSON("json/factures.json", function (data) {
            var content = Mustache.render(template, data);
            $("#specific_content").html(content);
          });
        }, "text");
        break;

      case "calendrier":
        $.get("template/calendrier.tpl.html", function (template) {
          $("#specific_content").html(template);
        }, "text");


      case "#commandes":
        $.get("template/commandes.tpl.html", function (template) {
          $.getJSON("json/commandes.json", function (data) {
            var content = Mustache.render(template, data);
            $("#specific_content").html(content);
          });
        }, "text");
        break;

      case "#feed":
        $.get("template/feed.tpl.html", function (template) {
          $("#specific_content").html(template);
        }, "text");

        $.get("template/post.tpl.html", function (template) {
          $.getJSON("json/posts.json", function (data) {
            var content = Mustache.render(template, data);
            $("#fil-actu").html(content);
          });
        }, "text");

        break;

      case "#order":

        $.get("template/order.tpl.html", function (template) {
          $.getJSON("json/post" + sessionStorage['post_id'] + ".json", function (data) {
            var content = Mustache.render(template, data);
            $("#specific_content").html(content);
          });
        }, "text");

        break;

      case "#discover": /* Comment faire en sorte que le template ne se charge que lorsque le precedent est charge */
        $.get("template/discover.tpl.html", function (template) {
          $("#specific_content").html(template);
        }, "text");

        $.get("template/discover-vendeurs.tpl.html", function (template) {
          $.getJSON("json/vendeurs.json", function (data) {
            var content = Mustache.render(template, data);
            $("#discover-vendeurs").html(content);
          });
        }, "text");

        $.get("template/discover-reels.tpl.html", function (template) {
          $.getJSON("json/reels.json", function (data) {
            var content = Mustache.render(template, data);
            $("#discover-reels").html(content);
          });
        }, "text");

        $.get("template/discover-posts.tpl.html", function (template) {
          $.getJSON("json/newposts.json", function (data) {
            var content = Mustache.render(template, data);
            $("#discover-posts").html(content);
          });
        }, "text");
        $.get("template/post.tpl.html", function (template) {
          $.getJSON("json/newposts.json", function (data) {
            var content = Mustache.render(template, data);
            $("#new_posts").html(content);
          });
        }, "text");

        break;
    }
  }

  route();


});