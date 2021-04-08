const playeer_1 ={
name: 'Scorpion',
hp: 410,
img: 'images.ico',
weapon: ['меч','пистолет','лопата','огнемед'],
attack: function(name){console.log(name + ' ' + 'Fight...');}
};

playeer_1.attack(playeer_1.name);

const playeer_2 = {
name: 'Cabal',
hp: 450,
img: 'images.ico',
weapon: ['сковородка','автомат','электрошокер'],
attack: function(name){console.log(name + ' ' + 'Fight...');}
};

playeer_2.attack(playeer_2.name);