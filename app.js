var hostingPlans = {
  plan1: {
    names: "basic",
    price: 120,
    time: "2 years",
    space: "100Gb",
    pages: "upto 10 pages",
    discountMonths: [6, 7, 9],
    storageServers: {
      google: "10Gb",
      amazon: "15Gb",
      azure: "25Gb",
    },
  },

  plan2: {
    names: "standard",
    price: 170,
    time: "2 years",
    space: "150Gb",
    pages: "upto 20 pages",
    discountMonths: [6, 7, 8],
    storageServers: {
      google: "10Gb",
      amazon: "15Gb",
      azure: "25Gb",
    },
  },

  plan3: {
    names: "advance",
    price: 210,
    time: "2 years",
    space: "unlimited",
    pages: "upto 100 pages",
    discountMonths: [6, 7, 8, 9],
    storageServers: {
      google: "15Gb",
      amazon: "25Gb",
      azure: "40Gb",
    },
  },
};




//setting container div style to flex
var cont=document.getElementById("container");
cont.style.display="flex";
document.getElementById("container").style.flexWrap = "wrap";
cont.style.width="100vw";

//setting container div style to flex

//Basic
let count = 0;

var div = document.getElementById("body1");
for (var key in hostingPlans.plan1) {
  if (count == 0) {
    var ol = document.createElement("ol");
  }
  if (count < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan1[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (count == 6) {
    for (var keys in hostingPlans.plan1.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan1.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  count++;
}

//Standard

let cnt = 0;

var div = document.getElementById("body2");
for (var key in hostingPlans.plan2) {
  if (cnt == 0) {
    var ol = document.createElement("ol");
  }
  if (cnt < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan2[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (cnt == 6) {
    for (var keys in hostingPlans.plan2.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan2.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  cnt++;
}

//Advanced
let contt = 0;

var div = document.getElementById("body3");
for (var key in hostingPlans.plan3) {
  if (contt == 0) {
    var ol = document.createElement("ol");
  }
  if (contt < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan3[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (contt == 6) {
    for (var keys in hostingPlans.plan3.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan3.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  contt++;
}

var table=document.getElementById("tab");
var tab1=document.createElement("table");
tab1.style.border = '1px solid black';
var row1=document.createElement("tr");
var col1=document.createElement("td");
var col2=document.createElement("td");
var textNode1=document.createTextNode("Element 1");
var textNode2=document.createTextNode("Element 2");

col1.appendChild(textNode1);
col2.appendChild(textNode2);

row1.appendChild(col1);
row1.appendChild(col2);

tab1.appendChild(row1);

table.appendChild(tab1);

//2
var row1=document.createElement("tr");
var col1=document.createElement("td");
var col2=document.createElement("td");
var textNode1=document.createTextNode("Element 1");
var textNode2=document.createTextNode("Element 2");

col1.appendChild(textNode1);
col2.appendChild(textNode2);

row1.appendChild(col1);
row1.appendChild(col2);

tab1.appendChild(row1);

table.appendChild(tab1);


