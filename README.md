# Javascript-dock
Javascript Mac OS X Dock like menu

![dock image](dock.png)

* Very small (~ 1KB)
* No other libraries (jQuery plug-in version is [egashira.jp](http://www.egashira.jp/2011/06/jquery-dock-plugin))
* Simple html tags
```
<ul id="dock">
	<li><a data-icon="a" href="#">mail</a></li>
	<li><a data-icon="b" href="#">facebook</a></li>
	<li><a data-icon="c" href="#">twitter</a></li>
	<li><a data-icon="d" href="#">github</a></li>
	<li><a data-icon="e" href="#">google+</a></li>
	<li><a data-icon="f" href="#">dribbble</a></li>
	<li><a data-icon="g" href="#">pinterest</a></li>
	<li><a data-icon="h" href="#">feed</a></li>
</ul>
```
* "data-icon" attribute represents the font glyph (please read style in index.html)
* Font file can be created using the web services, such as [glyphter](http://glyphter.com/) or [icomoon](https://icomoon.io/)
