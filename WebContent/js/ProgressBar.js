function loadProgressBars(){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==this.readyState&&200==this.status){for(var a=JSON.parse(this.responseText),b=0;b<a.buttons.length;b++)document.getElementById("button"+b).innerHTML=a.buttons[b]>0?"+"+a.buttons[b]:a.buttons[b];var c=document.createElement("div");c.id="progressBarDiv",c.className="block",c.setAttribute("style","text-align:center;");for(var b=0;b<a.bars.length;b++){var d=document.createElement("span");d.innerHTML=a.bars[b],d.setAttribute("id","element"+b),d.setAttribute("class","progressBar"),c.innerHTML=c.innerHTML+"Bar "+(b+1)+"  ",c.appendChild(d),c.innerHTML=c.innerHTML+"<br/>";var e=document.getElementById("list");e.options[e.options.length]=new Option("#Progress "+(b+1),"element"+b)}document.getElementsByTagName("body")[0].appendChild(c)}},a.open("GET","http://pb-api.herokuapp.com/bars",!1),a.send()}function modifyPercentageValue(a){var b=document.getElementById("list").value,c=a.innerHTML;return myJsProgressBarHandler.setPercentage(b,c),!1}var progressbarConfig;