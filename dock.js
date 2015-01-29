/* NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE. */

var min = 40;
var max = 120;

(function(min, max){
	'use strict'
	var bound = min * 3.14;

	var dock = document.getElementById('dock');
	var icons = dock.children;
	[].forEach.call(icons, function(icon,i){
		var span = document.createElement('span');
		var anchor = icon.getElementsByTagName('a')[0]
		var text = anchor.innerHTML;
		span.innerHTML = text;
		icon.appendChild(span);
		anchor.innerHTML = anchor.getAttribute('data-icon');
		anchor.removeAttribute('data-icon');
		icon.setAttribute('style','left:'+ i * min +'px');
	});
	dock.style.width = icons.length * min +'px';
	dock.addEventListener('mousemove', function(e){
		var mouseX = e.clientX - dock.offsetLeft;
		scaling(mouseX);
	});
	dock.addEventListener('mouseout', function(e){
		for (var i=icons.length; i--;) {
			icons[i].setAttribute('style','transition: .3s;left:'+ i * min +'px');
		}
	});

	function scaling(x){
		for (var i=icons.length; i--;) {
			var distance = (i * min + min / 2) - x;
			if (- bound < distance && distance < bound){
				var rad = distance / min * .5;
				var scale = 1 + (max / min - 1) * Math.cos(rad);
				var left =  i * min  + 2 * (max - min) * Math.sin(rad);
				icons[i].setAttribute('style','left:'+ left +'px;transform:scale('+ scale +')');
			} else {
				if (- bound < distance) {
					var left =  i*min + 2*(max - min);
					icons[i].setAttribute('style','left:'+ left +'px');
				} else {
					var left =  i*min - 2*(max - min);
					icons[i].setAttribute('style','left:'+ left +'px');
				}
			}
		}
	}
}(min, max))
