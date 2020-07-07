$(document).ready(function() {

    var mokData = [{
        id: '1',
        btnID: '1',
        name: 'Salamander',
        nameInfo: 'Skeddrag Sölvkroken Salamander Trout, 10 g, C/D',
        price: '79SEK',
        url: './Bilder/Beten/skeddrag-solvkroken-salamander-trout-10-g-c-d.jpg',
        length: '53mm',
        weight: '10g',
        description: 'Skeddrag Sölvkroken Salamander Trout, 10 g, C/D, 5,3 cm. Ett riktigt bra drag från norska Sölvkroken. Används framgångsrikt av många sportfiskare vid fiske efter öring.'
    }, 
    {
        id: '2',
        btnID: '2',
        name: 'Rogerdraget',
        nameInfo: 'Skeddrag Sölvkroken Rogerdraget 8 g, W/Y/D',
        price: '75SEK',
        url: './Bilder/Beten/skeddrag-solvkroken-rogerdraget-8-gr-w-y-d.jpg',
        length: 'N/A',
        weight: '8g',
        description: 'Skeddrag Sölvkroken Rogerdraget 8 gr, W/Y/D. Rogerdraget från Sölvkroken är ett riktigt bra öringsbete. Det används även vid sportfiske efter bla. röding, regnbåge, abborre. Rogerdraget är försedd med sylvassa Eagle Claw 374.'
    },
    {
        id: '3',
        btnID: '3',
        name: 'Special Classic',
        nameInfo: 'Skeddrag Sölvkroken Special Classic 12 g, S/O/D',
        price: '69SEK',
        url: './Bilder/Beten/skeddrag-solvkroken-special-classic-12-g-s-o-d.jpg',
        length: '37mm',
        weight: '12g',
        description: 'Skeddrag Sölvkroken Special Classic, 12 g, S/O/D, 37 mm. Klassiskt storsäljande skeddrag från Sölvkroken. Den speciellt lockande gången lockar öring och annan ädelfisk till hugg. Används även vid abborrfiske.'
    },
    {
        id: '4',
        btnID: '4',
        name: 'Salamander',
        nameInfo: 'Skeddrag Sölvkroken Salamander Trout, 10 gr, BL/C',
        price: '79SEK',
        url: './Bilder/Beten/skeddrag-solvkroken-salamander-trout-10-gr-bl-c.jpg',
        length: '53mm',
        weight: '10g',
        description: 'Skeddrag Sölvkroken Salamander Trout, 10 g, BL/C, 5,3 cm. Ett riktigt bra drag från norska Sölvkroken. Används framgångsrikt av många sportfiskare vid fiske efter öring.'
    }
];

$.each(mokData, function(i) {
    var templateString = '<div class="wrapper"><div class="container"><div class="top"><img class="image-lure" src="' + mokData[i].url + '"></div><div class="bottom"><div class="left"><div class="details"><h1>' + mokData[i].name + '</h1><p>' + mokData[i].price + '</p></div><div class="buy"><i class="material-icons">add_shopping_cart</i></div></div><div class="right"><div class="done"><i class="material-icons">done</i></div><div class="details"><h1>' + mokData[i].name + '</h1><p>Tillagd i varukorgen</p></div><div class="remove"><i class="material-icons">clear</i></div></div></div></div><div class="inside"><div class="icon"><i class="material-icons">info_outline</i></div><div class="contents"><table><tr><td>' + mokData[i].nameInfo + '</td></tr><tr><th>Längd</th></tr><td>' + mokData[i].length + '</td><tr><th>Vikt</th></tr><tr><td>' + mokData[i].weight + '</td></tr><tr><td>' + mokData[i].description + '</td></tr></table></div></div></div>';
    $('.container-wrapper').append(templateString);
    })




    
})    

    /* Product cards function */
    $('.buy').click(function() {
        $('.bottom').addClass("clicked");
    });
      
    $('.remove').click(function(e) {
        $('.bottom').removeClass("clicked");
    });