var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            res(cb);
        });
    }
}

module.exports = burger; 