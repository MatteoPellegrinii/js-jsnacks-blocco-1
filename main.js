let firstarray = [ "parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1" ];


for (let i = 0; i < 5; i++) {;
  let line = document.createElement("li");
  document.getElementById("first").appendChild(line);
  line.innerHTML += firstarray[i];
  let ul = document.createElement("ul");
    document.getElementById("first").appendChild(ul);


  let secondarray = ["parola1-2", "parola2-2" ];

  for (let i = 0; i < 2; i++) {
    let line = document.createElement("li");
    document.getElementById("first").appendChild(line);
    line.innerHTML += secondarray[i];
    
      
  }

}



