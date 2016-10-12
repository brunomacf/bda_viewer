var data        = require('./graph.json'),
    lodash      = require('lodash');

(function() {
    var parsed = {
        type: "NetworkGraph",
        label: "Ninux Roma",
        nodes: [],
        links: []
    };

    lodash.forOwn(data, function(value, key) {
        parsed.nodes.push({
            id: key,
            gender: value[0],
            sport: value[1]
        });

        lodash.forEach(value[2]||[], function(target) {
            parsed.links.push({
                source: key,
                target: target
            });
        });
    });

    console.log(JSON.stringify(parsed, null, 2));
})();
