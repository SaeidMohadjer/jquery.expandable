/**
* jquery.expandable.js v1.0.0 - jQuery plugin to collapse and expand HTML elements
* https://github.com/SaeidMohadjer/jquery.expandable
* Copyright 2013 Saeid Mohadjer
* Released under the MIT license - http://opensource.org/licenses/MIT
*/

;(function ($, window, document, undefined) {
	
	var pluginName = 'expandable',
		defaults = {
			time: 500,
			easing: 'linear',
			onAnimationStart: function() {},
			onAnimationEnd: function() {}		
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, defaults, options) ;
		this._defaults = defaults;
		this._name = pluginName;
		
		this.button = $(element).find('.expandable_btn').eq(0);
		this.$content = $(element).find('.expandable_content').eq(0);			
		this.collapsedLabel = this.button.text();
		this.expandedLabel = $(element).data('button-label');
		this.init();
	}		
	
	Plugin.prototype = {
		init: function () {
			var pluginInstance = this;
			var $wrapper = this.$element;
			
			if ($wrapper.hasClass('expanded')) {
				pluginInstance.updateButtonLabel();
			} else {
				pluginInstance.$content.hide();
			}
			
			$wrapper.on('click.expandable', pluginInstance.button, function(event) {
				pluginInstance.clickHandler(event);			
			});
		},
		clickHandler: function(event) {
			var pluginInstance = this;
			var $wrapper = this.$element;		
			var options = this.options;
			
			event.preventDefault();
			event.stopPropagation();
			pluginInstance.$content.stop(true, true).slideToggle(options.time, options.easing, function() {
				options.onAnimationEnd($wrapper);					
			});
			options.onAnimationStart($wrapper);
			$wrapper.toggleClass('expanded');
			pluginInstance.updateButtonLabel();			
		},
		updateButtonLabel: function() {
			var pluginInstance = this;
			var $wrapper = this.$element;

			if (pluginInstance.expandedLabel) {
				pluginInstance.button.text($wrapper.hasClass('expanded') ? pluginInstance.expandedLabel : pluginInstance.collapsedLabel);			
			}			
		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};
	
})(jQuery, window, document);