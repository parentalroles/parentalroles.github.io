var para = document.getElementById('para')
$('#add').on('click', function() {

  var fd = 0.5;
  var md = 0.5;
  var td;
  var zd;
  var v0 = parseFloat(vslider.noUiSlider.get()[0]);
  var v1 = parseFloat(vslider.noUiSlider.get()[1]);
  var v2 = parseFloat(vslider.noUiSlider.get()[2]);
  var wc = parseFloat(wslider.noUiSlider.get()[0]);
  var wd = parseFloat(wslider.noUiSlider.get()[1]);
  var r = parseFloat(pslider.noUiSlider.get()[0]);
  var p = parseFloat(pslider.noUiSlider.get()[1]);
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var message1 = document.getElementById("message1");
  var message2 = document.getElementById("message2");
 


  for (var i = 0; i < 5000; i++) {
    var sc = a * r * fd * (wd - wc) * v0 / ( a * (1 - md) + md);
    var sd = r * fd * (wd - wc) * v0 / ( a * (1 - md) + md);
    var epp = (1 - md) * (1 - fd) * wc * v2 * (1 - p) + (1 - md) * fd * wc * v1 * (1 - p) +
      md * (1 - fd) * wc * v1 * (1 - r) + md * fd * wc * v0 * (1 - r) + (1 - r) * fd * (wd - wc) * v0;
    var ec =  b * epp / ( b * (1 - md) + md);
    var ed = epp / ( b * (1 - md) + md);
    var w = (1 - md) * (1 - fd) * wc * v2 + (1 - md) * fd * wc * v1 + md * (1 - fd) * wc * v1 +
      md * fd * wc * v0 + fd * v0 * (wd - wc) ;
    var mdd = (md / w) * ((1 - fd) * (r * wc * v1 + sd + ed) + fd * (r * wc * v0 + sd + ed));
    var fdd = (fd / w) * ((wd - wc) * v0 + (1 - md) * wc * v1 + md * wc * v0);
    fd = Math.round(fdd.valueOf() * 1000000) / 1000000;
    md = Math.round(mdd.valueOf() * 1000000) / 1000000;

    if (md==md*md) {
      break;
    }
    
    
  }
  if (md > 0.9999) {
    md = 1;
  } else if (md < 0.000001) {
    md = 0;
  }

  if (fd > 0.9999) {
    fd = 1;
  } else if (fd < 0.000001) {
    fd = 0;
  }
  message1.textContent = md;
  message2.textContent = fd;
});
