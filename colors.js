var randomColor = require('randomcolor');

(function() {
    for(var i = 0; i < 29; i++) {
        console.log(randomColor({
            luminosity: 'dark',
            hue: 'random'
        }));
    }
})();
