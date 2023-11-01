$(document).ready(function () {

  $(window).on('hashchange', route);

  function route() {
    var hash = window.location.hash;
    switch (hash) {

      case "#facturevendeur":
        $.get("template/facturevendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
      case "#nouveaupost":
        $.get("template/ajouterunpost.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      case "#commandevendeur":
        $.get("template/commandevendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      case "#ajoutpost":
        $.get("template/profilvendeur.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;

        case "#ajoutpost2":
          $.get("template/profilvendeur.tpl.html", function (template) {
            $("#my-content").html(template);
          }, "html");
          break;

      case "#stock":
        $.get("template/stock.tpl.html", function (template) {
          $("#my-content").html(template);
        }, "html");
        break;
      case "#profil":
        $.get("template/profilvendeur.tpl.html", function (template) {
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


  $(window).on('hashchange', street);
function street() {
  var hash = window.location.hash;
  switch (hash) {

    
    case "#passforgotten":
      $.get("template/passforgotten.tpl.html", function (template) {
        $("#log-content").html(template);
      }, "html");
      break;
      case "#subscribe":
        $.get("template/choosetype.tpl.html", function (template) {
          $("#log-content").html(template);
        }, "html");
        break;
      case"#subscribeclient":
      $.get("template/subscribeclient.tpl.html", function (template) {
        $("#log-content").html(template);
      }, "html");
      break;
      case"#fournisseursubscribe":
      $.get("template/subscribevendeur.tpl.html", function (template) {
        $("#log-content").html(template);
      }, "html");
      break;
      case "#connection":
        $.get("template/indexvendeur.tpl.html", function (template) {
          $("#log-content").html(template);
        }, "html");
        break;
        case "#deconnection":
          $.get("template/login.tpl.html", function (template) {
            $("#my-content").html(template);
          }, "html");
          break;
        
    
  

    default:
      $.get("template/login.tpl.html", function (template) {
        $("#log-content").html(template);
      }, "html");
  }
}

street();


});