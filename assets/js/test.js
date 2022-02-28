let tab = new Array()
for (i = 0; i < 200; i++) {
    tab[i] = i + 1;
}
console.log(tab[199]);
let tab2 = new Array()
for (i = 0; i < 8; i++) {
    tab2[i] = tab.splice(Math.floor(Math.random() * tab.length), 1)[0];
}
console.log(tab2)

let tab3 = new Array()

for (i = 0; i < 8; i++) {
    tab3[i] = tab2[i];
}

let shuffle = (e) => {
    for (i = 0; i < 500; i++) {
        let c1 = Math.floor(Math.random() * e.length);
        let c2 = Math.floor(Math.random() * e.length);
        let temp = e[c1];
        e[c1] = e[c2];
        e[c2] = temp;

    }
    return e;
}
shuffle(tab3)

console.log(tab3)