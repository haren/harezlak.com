
// google analytics 

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-45107665-1']);
_gaq.push(['_setDomainName', 'harezlak.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})(); 

$(function() {
  // easing definition

  jQuery.extend( jQuery.easing,
    {
        def: 'easeOutElastic',
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        }
    },
    {
        def: 'easeInElastic',
        easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    }
  });

  var page = $('body').attr('class');

  if (page in router) {
    router[page]();
  }

  // catch screen resolution on start and adjust font size on box height
  // on start
  adjustFruitLoop();
  // on resize
  $( window ).resize(function() {
    adjustFruitLoop();
  });

});

var router = {
  index: function () {
    
    var words = [
      'going big or going home.',
      'not predicting the future, inventing it.',      
      'not overly suave.',
      'the best way is always through.',
      'wanna get in touch?',
      'drop me a line -',
      'the answer though,',
      'is 42.'
    ];

    var fruitWrapper = $('#fruitWrapper'); 

    var centerFruitMachine = function() {
      var containerHeight = $('#container').innerHeight();    

      fruitWrapper.show().css({
        marginTop: containerHeight/2 - fruitWrapper.height()
      });
    }

    centerFruitMachine();

    $(window).on('resize', centerFruitMachine);

    var fruitmachine = $('#fruitmachine');
    var current = -1;
    
    setInterval(function() {
        fruitmachine.animate({marginTop: 50}, 400, 'easeInElastic', function() {
              var word = words[(++current) % words.length];
              fruitmachine.html(word).css({marginTop: -250}).animate({marginTop: 0}, 800, 'easeOutElastic');
          });

    }, 5000);
  }
  // blog: 
}

function adjustFruitLoop() {
  console.log($(window).height());
  console.log($(window).width());

}