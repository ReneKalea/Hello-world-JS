function promjeniBoju() {
    var prvaRijec = "Hello world";
    var drugaRijec = " from javascript.";
    var spoji = prvaRijec + drugaRijec;

    console.log(spoji);
    var obojiSlova = spoji.split(' ');
    console.log(obojiSlova);

    for (i = 0; i < spoji.length; i++) {
        if (i % 2) {
            document.write(`<span>${spoji[i]}</span>`)
        } else {
            document.write(spoji[i])
                      }   
        }
}
promjeniBoju()
    

