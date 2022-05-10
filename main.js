let firstarray = [ "parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1" ];

let text = ""
for (let i = 0; i < 4; i++) {
  text =  firstarray[i];
  let line = document.createElement(text);
  console.log(line);
  document.getElementById("first").appendChild(line);
}


let secondarray = ["parola1-2", "parola2-2" ];
