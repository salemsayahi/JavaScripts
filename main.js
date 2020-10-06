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
function Supprimer1(id) {
 
  var elem = document.getElementById("qt1");
 
  var qt = parseInt(elem.textContent);
  
  if (qt > 0) {
    qt--;
    elem.textContent = qt;
    var pu = parseFloat(document.getElementById("pu1").textContent);
    var Total1 = document.getElementById("t1");
    var total = qt * pu;
    Total1.textContent = "" + total;
    var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
  } 
}
function Supprimer2() {
    var elem = document.getElementById("qt2");
    var qt = parseInt(elem.textContent);
 
    if (qt > 0) {
      qt--;
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu2").textContent);
      var Total1 = document.getElementById("t2");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } 
  }
  function Supprimer3() {
    var elem = document.getElementById("qt3");
    var qt = parseInt(elem.textContent);

    if (qt > 0) {
      qt--;
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu3").textContent);
      var Total1 = document.getElementById("t3");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } 
  }
  function Supprimer4() {
    var elem = document.getElementById("qt4");
    var qt = parseInt(elem.textContent);

    if (qt > 0) {
      qt--;
      elem.textContent = qt;
      var pu = parseFloat(document.getElementById("pu4").textContent);
      var Total1 = document.getElementById("t4");
      var total = qt * pu;
      Total1.textContent = "" + total ;
      var ST=document.getElementById("ST");
    var sti=parseFloat(ST.textContent);
    ST.textContent= sti-pu;
    } 
  }
  function Supprimer(id) {
    document.getElementById("panier").deleteRow(parseInt(id));
  }

  document.getElementById("produits").style.display = "subproduit";

  function commande()
  {
    document.getElementById("produits").style.display = "none";
    
    document.getElementById("cmd").style.display = "none";
    document.getElementById("panier").style.display="table" ;
  }
  function like(id)
  { var el=document.getElementById("like"+id);
    var nb = parseFloat(el.textContent)+1;
    el.textContent=nb;

  }
  function dislike(id)
  { var el=document.getElementById("dislike"+id);
    var nb = parseFloat(el.textContent)+1;
    el.textContent=nb;

  }
  function AjoutProduit()
  { var el=document.getElementById("nbproduit");
    var nb = parseFloat(el.textContent)+1;
    el.textContent=nb;

  }
  
  /*
  function AjoutProduit()
   {
      var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    
    var tblBody = document.getElementById("panier");
  
    // cells creation
 
      var row = document.createElement("tr");
  
  
        var nom = document.createElement("td");
             var cellText =  document.createTextNode($(this).childNodes+"");;
  
        nom.appendChild(cellText);
        row.appendChild(nom);
        var nom = document.createElement("td");
        var cellText = document.createTextNode("rrrrrrrrrrrtest");
  
        nom.appendChild(cellText);
        row.appendChild(nom);
        var nom = document.createElement("td");
        var cellText = document.createTextNode("rrrrrrrrrrrtest");
  
        nom.appendChild(cellText);
        row.appendChild(nom);
        var nom = document.createElement("td");
        var cellText = document.createTextNode("rrrrrrrrrrrtest");
  
        nom.appendChild(cellText);
        row.appendChild(nom);
        var nom = document.createElement("td");
        var cellText = document.createTextNode("rrrrrrrrrrrtest");
  
        nom.appendChild(cellText);
        row.appendChild(nom);
      
  
      //row added to end of table body
      tblBody.appendChild(row);
    
  
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
   // tbl.setAttribute("border", "2");
  

  }*/

 
