function Ajout1() {

    var elem = document.getElementById("qt1");
    var qt = parseInt(elem.textContent);
    qt++;
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu1").textContent);
    var Total1 = document.getElementById("t1");
    var total = qt * pu;
    Total1.textContent = "" + total ;
    var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti+pu;

}
function Ajout2() {
 
    var elem = document.getElementById("qt2");
    var qt = parseInt(elem.textContent);
    qt++;
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu2").textContent);
    var Total1 = document.getElementById("t2");
    var total = qt * pu;
    Total1.textContent = "" + total ;
 var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti+pu;

}
function Ajout3() {
 
    var elem = document.getElementById("qt3");
    var qt = parseInt(elem.textContent);
    qt++;
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu3").textContent);
    var Total1 = document.getElementById("t3");
    var total = qt * pu;
    Total1.textContent = "" + total ;
    var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti+pu;
}
function Ajout4() {
 
    var elem = document.getElementById("qt4");
    var qt = parseInt(elem.textContent);
    qt++;
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu4").textContent);
    var Total1 = document.getElementById("t4");
    var total = qt * pu;
    Total1.textContent = "" + total;
    var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti+pu;
}
function Supprimer1() {
  var elem = document.getElementById("qt1");
  var qt = parseInt(elem.textContent);
  qt--;
  if (qt > 0) {
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu1").textContent);
    var Total1 = document.getElementById("t1");
    var total = qt * pu;
    Total1.textContent = "" + total;
    var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
  } else {
    document.getElementById("panier").deleteRow(1);
  }
}
function Supprimer2() {
    var elem = document.getElementById("qt2");
    var qt = parseInt(elem.textContent);
    qt--;
    if (qt > 0) {
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu2").textContent);
      var Total1 = document.getElementById("t2");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } else {
      document.getElementById("panier").deleteRow(2);
    }
  }
  function Supprimer3() {
    var elem = document.getElementById("qt3");
    var qt = parseInt(elem.textContent);
    qt--;
    if (qt > 0) {
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu3").textContent);
      var Total1 = document.getElementById("t3");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } else {
      document.getElementById("panier").deleteRow(3);
    }
  }
  function Supprimer4() {
    var elem = document.getElementById("qt4");
    var qt = parseInt(elem.textContent);
    qt--;
    if (qt > 0) {
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu4").textContent);
      var Total1 = document.getElementById("t4");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } else {
      document.getElementById("panier").deleteRow(4);
    }
  }
