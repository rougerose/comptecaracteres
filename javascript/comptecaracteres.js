var compteurCaracteres = (function () {

  var compteur = function () {

    var $container = $("#contenu"),
      $descriptif,
      $descriptifText,
      htmlCompteur;

    htmlCompteur = '<div id="compteurCaracteres">';
    htmlCompteur += '<span id="compteurCourant">0</span>';
    htmlCompteur += '<span id="compteurMax">/250</span>';
    htmlCompteur += "<div>";

    // Ajouter le compteur sur le formulaire d'édition d'une rubrique, d'une sélection et d'un article.
    $formulaire_editer = $container.find($(".formulaire_editer_rubrique, .formulaire_editer_article, .formulaire_editer_selections_contenu"));

    if ($formulaire_editer.length == 1) {
      $descriptif = $container.find($(".editer_descriptif"));

      if (
        $descriptif.length == 1 &&
        $container.find($("#compteurCaracteres")).length == 0
      ) {
        $descriptif.append(htmlCompteur);
        $descriptifText = $descriptif.find("textarea");
        var totalCaracteres = $descriptifText.val().length,
          $compteurCourant = $descriptif.find("#compteurCourant");

        // Si un texte est déjà présent dans le descriptif
        if (totalCaracteres > 0) {
          $compteurCourant.text(totalCaracteres);
        }

        $descriptifText.keyup(function () {
          totalCaracteres = $(this).val().length;
          $compteurCourant.text(totalCaracteres);
        });
      }
    }
  };

  var onSpipAjaxLoad = function () {
    if (typeof onAjaxLoad == "function") {
      onAjaxLoad(compteurCaracteres.ajouterCompteur);
    }
  };

  return {
    init: function () {
      compteur();
      onSpipAjaxLoad();
    },
    ajouterCompteur: function () {
      compteur();
    },
  };
})();

$(function () {
  compteurCaracteres.init();
});
