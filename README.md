jquery.expandcollapse
=====================

jQuery plugin for expanding and collapsing items

<h2>Features</h2>
<ul>
	<li>Allows nested show/hide sections</li>
	<li>Optional text for expand-collapse button in expanded state</li>
	<li>Custom easing via jquery.easing.1.3.js</li>
	<li>Ability to show sections by default in expanded state</li>
</ul>


<h2>API</h2>
<table class="api">
	<tr><th>options</th><th>default value [optional values]</th><th>description</th></tr>
	<tr><td>easing</td><td>linear ['easeOutQuart', 'easeOutQuad', 'easeOutCubic', 'easeOutQuint', 'easeOutElastic',...]</td><td>Custom easing requires use of jquery.easing.1.3.js</td></tr>
	<tr><td>time</td><td>500 [any value]</td><td>time in miliseconds that it takes for sliding to end</td></tr>
	<tr><td>alt_text</td><td>"" ["string"]</td><td>When provided the alt_text string will be used as expandable button's text when the section is expanded. Possible values are "Hide", or "less", or "Collapse", etc.</td></tr>
	<tr><td>onAnimationStart</td><td></td><td>Callback function</td></tr>
	<tr><td>onAnimationEnd</td><td></td><td>Callback function</td></tr>
</table>
