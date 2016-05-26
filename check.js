let request = require('request');
let Q = require('q');
let _ = require('underscore');

let sites = {
    "http://choosemylo.com": [
        "hallmark",
        "ca2",
        "targetca"
    ]
};

//for each base, combine w/ brand, do request, output status
_.each(sites, (brands, base) => {
    console.log('Site: ' + base);
    _.each(brands, (brand) => {
        let uri = base + '/' + brand;
       request(uri, (err, msg) => {
          console.log(uri + '\t\t' + msg.statusCode);
       });
    });
});