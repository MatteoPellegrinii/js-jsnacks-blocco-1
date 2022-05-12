let firstarray = [ "parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1" ];
let secondarray = ["parola1-2", "parola2-2" ];

let ulfirst = document.getElementById("first");

for (let i = 0; i<firstarray.length; i++){
  let firstarraycontent = firstarray[i];
  let firstli = document.createElement("li");
  firstli.append(firstarraycontent);
  ulfirst.append(firstli);


  let ulsecond = document.createElement("ul");

  for (let j = 0; j < secondarray.length; i++){
    let secondarraycontent = secondarray[i];
    let secondli = document.createElement("li");
    secondli.append(secondarraycontent);
    ulsecond.append(secondli);
    firstli.append(ulsecond);
  }
}



