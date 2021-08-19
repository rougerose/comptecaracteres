<?php

if (!defined('_ECRIRE_INC_VERSION')) {
  return;
}

function comptecaracteres_jquery_plugins($scripts) {
	if (test_espace_prive()) {
		$scripts[] = 'javascript/comptecaracteres.js';
	}
	return $scripts;
}

function comptecaracteres_header_prive($flux) {
	$css = '<link rel="stylesheet" href="'._DIR_PLUGIN_COMPTECARACTERES.'css/comptecaracteres.css" type="text/css" />';
	$flux .= $css;
	return $flux;
}
