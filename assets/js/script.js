$(function() {
    class Carte {
        constructor(img1, img2, numero) {
            this.img1 = img1;
            this.img2 = img2;
            this.numero = numero;
        }
    }

    let numeroPokemon = new Array();
    let cartes8 = new Array();
    for (i = 0; i < 8; i++) {
        while (numeroPokemon.length < 8) {
            let num = Math.floor((Math.random()*200)+1)
            if (numeroPokemon.indexOf(num) === -1){
                numeroPokemon.push(num);
            }
        }
    }
    for (i = 0; i < 8; i++) {
            let pokemon = new Carte("<img src='assets/img/dessus.png'  alt='" + numeroPokemon[i] + "' >", "<img src='assets/img/Pokemon" + numeroPokemon[i] + ".png'>", numeroPokemon[i]);
            cartes8.push(pokemon);
        }
        



        

        let cartes16 = new Array();
        cartes16 = cartes8.concat(cartes8)
    




    
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
    shuffle(cartes16)

    for(i = 0; i < 16; i++) {
        $('#carte' + (i+1) + ' .back').html(cartes16[i].img2);
        $('#carte' + (i+1) + ' .front').html(cartes16[i].img1);
    }

    let compare = new Array();
    let handi = 0
    $('img').on({
        click: (e) => {
            handi += 1
            $("#handi").html(handi)
            $(e.target).addClass("hide")
            $('.hide').hide()

            compare.push(e.target.alt)
            if (compare[0] === compare[1]) {
                $('img').delay(1000).removeClass("hide")
                handi -= 2
                $("#handi").html(handi)
            }
            if (compare.length == 2) {
                $('.hide').delay(1000).show(200)
                $('img').delay(1000).removeClass("hide")
                compare.length = 0

            }
        }
    })

    $('.myButton').on({
        click: () => {
            location.reload()
        }
    })
});



