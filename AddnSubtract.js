/**
 * Created by arvind on 27/6/17.
 */
var todoarr = JSON.parse(localStorage.getItem("todo"));
var outputbox = document.getElementById("addTo");
var complete = document.getElementById("cval");
var total = document.getElementById("tval");
var tota = 0;
var complet = 0;

if(todoarr != null){
  refresh(todoarr);
}else{
    todoarr = [];
}
function refresh(todolist) {
    for(var i = 0; i < todolist.length; i++){
        var currobj = todolist[i];
        var etba = currobj.value;
        var bool = currobj.done;
        tota = todolist.length;

        if(bool){
            complet++;
            outputbox.innerHTML += "<li class='already' onclick='strikeOff("+i+")' style='cursor: pointer; text-decoration: line-through; color:"+getRandomColor()+"' id='"+i+"'>" + etba + "</li>";
        }else{
            outputbox.innerHTML += "<li class='already' onclick='strikeOff("+i+")' style='cursor: pointer; color:"+getRandomColor()+"' id='"+i+"'>" + etba + "</li>";
        }
    }
    complete.innerHTML = "&nbsp;" + complet;
    total.innerHTML = "&nbsp;" + tota;
};

window.onload = function () {
  var inputbox = document.getElementById("entryb");
  var inputbtn = document.getElementById("addeleb");
  var rembtn = document.getElementById("rembtnb");

  rembtn.onclick = function () {
    tota = 0;
    complet = 0;
    total.innerHTML = "&nbsp;" + 0;
    complete.innerHTML = "&nbsp;" + 0;
    todoarr = [];
    outputbox.innerHTML = "";
    localStorage.setItem("todo",JSON.stringify(todoarr));
  };

  inputbtn.onclick = function () {
      var input = inputbox.value;
      if(input.length === 0){
          redo();
          window.alert("Please Enter A Valid Task...");
          return;
      }
      var inputobj = {
          "value" : input,
          "done" : false
      };

      tota++;
      var pos = todoarr.length;
      todoarr[pos] = inputobj;
      outputbox.innerHTML += "<li onclick='strikeOff("+pos+")' class='ele-ments' style='cursor: pointer; color: "+getRandomColor()+"' id='"+pos+"'>" + input + "</li>";
      total.innerHTML = "&nbsp;" + tota;

      localStorage.setItem("todo",JSON.stringify(todoarr));
      redo();
  };
};

function strikeOff(id) {
        complet++;
        complete.innerHTML = "&nbsp;" + complet;
        todoarr[id].done = true;
        var ele = document.getElementById(id);
        ele.style.textDecoration = "line-through";
        localStorage.setItem("todo",JSON.stringify(todoarr));
}
var btn = document.getElementById("addbtnb");
var input = document.getElementById("entryb");
var add = document.getElementById("addeleb");
var rembtn = document.getElementById("rembtnb");
btn.onclick = function () {
    var ids = todoarr.length-1;
    var listele = document.getElementById(""+ids+"");
    rembtn.className = "rembtna";
    btn.className = "addbtna";
    input.value = "";
    input.className = "entrya";
    add.className = "addelea";
    listele.className = "already";

};

function getRandomColor() {
       return givecolor(Math.floor(Math.random() * 16));
}

function givecolor(num) {
    var color;
    switch (num){
        case 1:
            color = "#f44336";
            return color;
        case 2:
            color = "#e91e63";
            return color;
        case 3:
            color = "#9c27b0";
            return color;
        case 4:
            color = "#311b92";
            return color;
        case 5:
            color = "#1a237e";
            return color;
        case 6:
            color = "#0d47a1";
            return color;
        case 7:
            color = "#01579b";
            return color;
        case 8:
            color = "#006064";
            return color;
        case 9:
            color = "#64dd17";
            return color;
        case 10:
            color = "#aeea00";
            return color;
        case 11:
            color = "#f57f17";
            return color;
        case 12:
            color = "#e65100";
            return color;
        case 13:
            color = "#ff3d00";
            return color;
        case 14:
            color = "#ffea00";
            return color;
        case 15:
            color = "#64dd17";
            return color;
        case 16:
            color = "#00b8d4";
            return color;
        default:
            color = "#0091eas";
            return color;
    }
}


function redo() {
    btn.className = "addbtnb";
    input.className = "entryb";
    add.className = "addeleb";
    rembtn.className = "rembtnb";
};