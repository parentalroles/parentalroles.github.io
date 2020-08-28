var para = document.getElementById('para')
$('#add').on('click', function() {

  var fd = 0.5;
  var md = 0.5;
  var td;
  var zd;
  var v0 = document.getElementById("v0").value;
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;
  var wc = document.getElementById("wc").value;
  var ad = document.getElementById("ad").value;
  var r = document.getElementById("r").value;
  var p = document.getElementById("p").value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var message1 = document.getElementById("message1");
  var message2 = document.getElementById("message2");
  var warning = document.getElementById('warning');
  var warning1 = document.getElementById('warning1');
  var warning2 = document.getElementById('warning2');
  var warning3 = document.getElementById('warning3');
  var warning4 = document.getElementById('warning4');
  var warning5 = document.getElementById('warning5');
  var wd = Number(wc) + Number(ad);
  if (v0 > 1) {
    warning.textContent = "Answer should lie in between 0 and 1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning.textContent = "";
  }
  if (v1 > 1) {
    warning1.textContent = "Answer should lie in between 0 and 1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning1.textContent = "";
  }
  if (v2 > 1) {
    warning2.textContent = "Answer should lie in between 0 and 1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning2.textContent = "";
  }
  if (v1 < v0) {
    warning1.textContent = "V1 must be greater than V0";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning.textContent = "";
  }
  if (v2 < v1) {
    warning2.textContent = "V2 must be greater than V1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning2.textContent = "";
  }
  if (r > p) {
    warning3.textContent = "answer must lie in between 0 and p ";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning3.textContent = "";
  }
  if (a > 1) {
    warning4.textContent = "Answer should lie in between 0 and 1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning4.textContent = "";
  }
  if (b > 1) {
    warning5.textContent = "Answer should lie in between 0 and 1";
    message1.textContent = "";
    message2.textContent = "";
    return;
  } else {
    warning5.textContent = "";

  }

  for (var i = 0; i < 5000; i++) {
    var sc = (1 - a) * r * fd * (wd - wc) * v0 / ((1 - a) * (1 - md) + md);
    var sd = r * fd * (wd - wc) * v0 / ((1 - a) * (1 - md) + md);
    var epp = (1 - md) * (1 - fd) * wc * v2 * (1 - p) + (1 - md) * fd * wc * v1 * (1 - p) +
      md * (1 - fd) * wc * v1 * (1 - r) + md * fd * wc * v0 * (1 - r) + (1 - r) * fd * (wd - wc) * v0;
    var ec = (1 - b) * epp / ((1 - b) * (1 - md) + md);
    var ed = epp / ((1 - b) * (1 - md) + md);
    var w = (1 - md) * (1 - fd) * wc * v2 + (1 - md) * fd * wc * v1 + md * (1 - fd) * wc * v1 +
      md * fd * wc * v0 + fd * v0 * (wd - wc) ;
    var mdd = (md / w) * ((1 - fd) * (r * wc * v1 + sd + ed) + fd * (r * wc * v0 + sd + ed));
    var fdd = (fd / w) * ((wd - wc) * v0 + (1 - md) * wc * v1 + md * wc * v0);
    fd = Math.round(fdd.valueOf() * 1000000) / 1000000;
    md = Math.round(mdd.valueOf() * 1000000) / 1000000;


    if (md > 0.999999) {
      md = 1;
    } else if (md < 0.000001) {
      md = 0;
    }

    if (fd > 0.999999) {
      fd = 1;
    } else if (fd < 0.000001) {
      fd = 0;
    }
    if (i === 4999) {

      message1.textContent = md;
      message2.textContent = fd;
      break;
    }

  }
});
