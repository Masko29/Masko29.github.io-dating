How to use it:

1. Include the latest version of jQuery and jQuery pxgradient plugin in the web page.

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="pxgradient-1.0.3.js"></script>


2. Create some gradient text. The plugin will paint text in gradient colors by pixel.


<h1 class="demo1">jQuery pxgradient demo</h1>
<h2 class="demo2">Text Gradient Effect</h2>
<h2 class="demo3">jQuery Script</h2>


3. Call the plugin on the text and setup the custom gradient colors.


$(".demo1").pxgradient({
  step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
  colors: ["#fc0","#0fc","#00f"], // an array of hex colors.
  dir: "x" // gradient direction. "x" - horizontal,  "y" - vertical
});


$(".demo2").pxgradient({
  step: 5,
  colors: ["#fc0","#0fc","#00f"],
  dir: "y"
});


$(".demo3").pxgradient({
  step: 10,
  colors: ["#f1c40f","#9b59b6","#f39c12"],
  dir: "x"
});
