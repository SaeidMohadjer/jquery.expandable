jquery.expandable
=====================

jQuery plugin for expanding and collapsing HTML elements

<h3>Examples</h3>
<ul>
	<li><a href="http://repos.saeidmohadjer.com/jquery.expandable/demo/basic.html">Basic</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.expandable/demo/nested.html">Nested sections</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.expandable/demo/accordion.html">Accordion</a></li>	
</ul>

<h3>Features</h3>
<ul>
	<li>Supports nesting of expandable elements</li>
	<li>Allows alternative label for button when expanded (via HTML data attribute)</li>
	<li>Supports custom easing via jquery.easing.1.3.js</li>
	<li>Ability to show sections by default in expanded state</li>
	<li>Requires no CSS</li>
</ul>

<h3>API</h3>
<ul>
	<li><strong>easing</strong>: linear ['easeOutQuart', 'easeOutQuad', 'easeOutCubic', 'easeOutQuint', 'easeOutElastic',...] (custom easing requires use of jquery.easing.1.3.js)</li>
	<li><strong>time</strong>: 500 [any value] (time in miliseconds that it takes for sliding to end)</li>
	<li><strong>accordion</strong>: false [true] (when true sibling expanded items will collapse to make sure no more than one item is expanded at a time)</li>
	<li><strong>onAnimationStart</strong>: function() {} </li>
	<li><strong>onAnimationEnd</strong>: function() {} </li>
</ul>
