jquery.expandable
=====================

jQuery plugin for expanding and collapsing HTML elements

<h2>Features</h2>
<ul>
	<li>Supports nesting of expandable elements</li>
	<li>Allows alternative label for button when expanded (via HTML data attribute)</li>
	<li>Supports custom easing via jquery.easing.1.3.js</li>
	<li>Ability to show sections by default in expanded state</li>
	<li>Requires no CSS</li>
</ul>

<h2>API</h2>
<ul>
	<li>easing: linear ['easeOutQuart', 'easeOutQuad', 'easeOutCubic', 'easeOutQuint', 'easeOutElastic',...] (custom easing requires use of jquery.easing.1.3.js)</li>
	<li>time: 500 [any value] (time in miliseconds that it takes for sliding to end)</li>
	<li>onAnimationStart: function() {} </li>
	<li>onAnimationEnd: function() {} </li>
</ul>
