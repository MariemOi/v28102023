$(document).ready(function () {

  $(window).on('hashchange', route);

  function route() {
    var hash = window.location.hash;
    switch (hash) {

      case "#facturevendeur":
        $.get("template/facturevendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
        case "#commandevendeur":
        $.get("template/commandevendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
        
      case "#stock":
        $.get("template/stock.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      case "#post":
        $.get("template/feedvendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      case "#conversationvendeur":
        $.get("template/messagerievendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      
  
      default:
        $.get("template/indexvendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
    }
  }

  route();


});