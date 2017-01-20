---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<h1 class="random-word"></h1>
<!-- <svg style="width: 200px; height: 200px;">
<use xlink:href="https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg"></use>
</svg>
{% include svg.html name='A' %} -->
<!-- <object data="img/bang.svg" type="image/svg+xml" id="something" height="200px" height="200px"></object>
<object data="https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg" type="image/svg+xml" id="something" height="200px" height="200px"></object>

<use xlink:href="./_includes/0.svg#Layer_1-2"></use> -->

<script
  src="https://code.jquery.com/jquery-3.1.1.js"
  integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
  crossorigin="anonymous"></script>

<script>
  function RandomWord() {
        var requestStr = "http://randomword.setgetgo.com/get.php";

        $.ajax({
            type: "GET",
            url: requestStr,
            dataType: "jsonp",
            jsonpCallback: 'RandomWordComplete'
        });
    }

    function RandomWordComplete(data) {
    	var letters = data.Word.toUpperCase().split('')

    	document.querySelector('.random-word') 

		var randy = document.querySelector('.random-word');
		var svg = document.createElement('svg')

		letters.forEach(function(letter) {
			var object = appendObject(letter);
			randy.append(object)
		});
    }

    function appendObject (letter, id) {
    	var object =  document.createElement('object')

		object.setAttribute('data', 'img/' + letter + '.svg')
		object.setAttribute('type', 'image/svg+xml')
		object.setAttribute('id', letter)
		object.setAttribute('height', '40px')
		object.setAttribute('width', '40px')
		object.setAttribute('fill', 'red')

		return object
    }

    RandomWord();
</script>