var data        = require('./graph2.json'),
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
            properties: {
                gender: value[0],
                sport: value[1]
            }
        });

        if(lodash.isArray(value[2])) {
            lodash.forEach(value[2], function(target) {
                parsed.links.push({
                    source: key,
                    target: target
                });
            });
        }
        else if(lodash.isObject(value[2])) {
            lodash.forOwn(value[2], function(arr, target) {
                var words = lodash.map(arr, function(item) {
                    return item[0];
                });

                parsed.links.push({
                    source: key,
                    target: target,
                    properties: {
                        words: words
                    }
                });
            });
        }
    });

    console.log(JSON.stringify(parsed, null, 2));
})();
