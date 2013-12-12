jquery.expandable
=====================

jQuery plugin for expanding and collapsing HTML elements

<h2>Features</h2>
<ul>
	<li>Supports nesting of expandable sections</li>
	<li>Allows alternative label for button when expanded via HTML data attribute</li>
	<li>Supports custom easing via jquery.easing.1.3.js</li>
	<li>Ability to show sections by default in expanded state</li>
	<li>Requires no default CSS</li>
</ul>

<h2>API</h2>
<table class="api">
	<tr><th>options</th><th>default value [optional values]</th><th>description</th></tr>
	<tr><td>easing</td><td>linear ['easeOutQuart', 'easeOutQuad', 'easeOutCubic', 'easeOutQuint', 'easeOutElastic',...]</td><td>Custom easing requires use of jquery.easing.1.3.js</td></tr>
	<tr><td>time</td><td>500 [any value]</td><td>time in miliseconds that it takes for sliding to end</td></tr>
	<tr><td>onAnimationStart</td><td></td><td>Callback function</td></tr>
	<tr><td>onAnimationEnd</td><td></td><td>Callback function</td></tr>
</table>
