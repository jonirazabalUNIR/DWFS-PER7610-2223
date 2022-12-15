<script>
	window.onload = function () {
		document.getElementById("checkbox").addEventListener('change', function () {
			var theme = document.getElementsByTagName('link')[0];
			if (theme.getAttribute('href') == 'normalStyle.css') {
				theme.setAttribute('href', 'darkStyle.css');
			} else {
				theme.setAttribute('href', 'normalStyle.css');
			}
		});
		printChilds(null, 0);
	}

	function printChilds(element, capa) {
		let parent;
		(element == null) ? parent = document.body : parent = element;
		if (parent == document.body) {
			capa = 0;
		}
		for (let i = 0; i < parent.children.length; i++) {
			console.log("Capa " + capa + " Padre " + parent.tagName + " Hijo: " + parent.children[i].tagName);
			if (parent.children[i].children.length > 0) {
				let capaHijo = capa + 1;
				printChilds(parent.children[i], capaHijo);
			}
		}
	}
</script>