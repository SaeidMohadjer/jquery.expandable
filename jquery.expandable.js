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
		this.element = element;
		this.options = $.extend({}, defaults, options) ;
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}		
	
	Plugin.prototype = {
		init: function () {
			var pluginInstance = this;
			var $this = $(this.element);
			var options = this.options;
			var _btn = $this.find('.expandable_btn').eq(0);
			var _label = _btn.text();
			var _altLabel = null;
			
			//hide content 
			$this.not('.expanded').find('.expandable_content').eq(0).hide();
			
			//update btn text if alternative text is provided and item is by default expanded
			if ($this.data('button-label')) {
				_altLabel = $this.data('button-label');
				if ($this.hasClass('expanded')) {
					_btn.text(_altLabel);
				}			
			}
			
			_btn.click(function(ev) {
				ev.preventDefault();
				ev.stopPropagation();
				
				$this.find('.expandable_content').eq(0).stop(true, true).slideToggle(options.time, options.easing, function() {
					options.onAnimationEnd($this);					
				});
				options.onAnimationStart($this);
				
				$this.toggleClass('expanded');
				
				if (_altLabel) {
					_btn.text($this.hasClass('expanded') ? _altLabel : _label);			
				}				
			});
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