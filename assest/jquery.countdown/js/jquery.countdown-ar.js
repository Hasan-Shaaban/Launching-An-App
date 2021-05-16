/* http://keith-wood.name/countdown.html
   Arabic (عربي) initialisation for the jQuery countdown extension
   Translated by Talal Al Asmari (talal@psdgroups.com), April 2009. */
(function($) {
	'use strict';
	$.countdown.regionalOptions.ar = {
		labels: ['Years','Months','weeks','Days','Hours','Minutes','Seconds'],
		labels1: ['Years','Months','weeks','Days','Hours','Minutes','Seconds'],
		compactLabels: ['س','ش','أ','ي'],
		whichLabels: null,
		digits: ['0','1','2','3','4','5','6','7','8','9'],
		timeSeparator: ':',
		isLTR: true
	};
	$.countdown.setDefaults($.countdown.regionalOptions.ar);
})(jQuery);
