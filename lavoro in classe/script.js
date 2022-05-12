
function myFunction() {
    let array = [];
    
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 1000) + 1);
        let numeri = array[i] % 2;
        if (numeri == 0) {
           let numeripari = [array[i]] ;
           document.getElementById('pari').innerHTML += `${numeripari}  `;
        }
        else {
            let numeridispari = [array[i]];
            document.getElementById('dispari').innerHTML += `${numeridispari}  `;
        }
    }
    
    document.getElementById('array').innerHTML = `il tuo array è: ${array}`;
    

    
}



