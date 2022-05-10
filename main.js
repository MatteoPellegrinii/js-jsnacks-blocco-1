let firstarray = [ "parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1" ];


let text = "<ul>";
firstarray.forEach(myFunction);
text += "</ul>";
document.getElementById("first").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

let secondarray = ["parola1-2", "parola2-2" ];

let second = "<ul>";