function filter(arg, data, products) {
    var all_bar = new Array(products.length).fill(0),
        fst_bar = new Array(products.length);

    for(var i = 0; i < products.length; i++) {
        fst_bar[i] = new Array(products.length).fill(0);
    }

    var filter_all = function (i) {
        for(var j = 0; j < products.length; j++) {
            if(!(arg[j] == 1 && data[j + 1][i] == 1 || arg[j] == 0)) {
                return false;
            }
        }

        return true;
    }

    var filter_main = function (m, i) {
        for(var j = 0; j < products.length; j++) {
            if(!(arg[j] == 1 && data[j + 1][i] == 1 || (arg[j] == 0 && m != products[j]) || (m == products[j] && data[j + 1][i] == 1))) {
                return false;
            }
        }

        return true;
    }

    var filter_fst = function (i) {
        for(var j = products.length; j < products.length * 2; j++) {
            if(!(data[j + 1][i] == arg[j] || arg[j] == "-")) {
                return false;
            }
        }

        return true;
    }
    
    var filter_k = function (m, i, k) {
        for(var j = products.length; j < products.length * 2; j++) {
            if(j - products.length == k) {
                if(!(data[j + 1][i] == m && (arg[j] == m || arg[j] == "-"))) {
                    return false;
                }
            } else {
                if(!(data[j + 1][i] == arg[j] || arg[j] == "-")) {
                    return false;
                }
            }
        }

        return true;
    }

    for (var i = 0; i < data[0].length; i++) {
        for(var j = 0; j < products.length; j++) {
            if (filter_main(products[j], i) && filter_fst(i)) {
                all_bar[j] += parseInt(data[0][i]);
            }

            for(var k = 0; k < products.length; k++) {
                if (filter_k(products[j], i, k) && filter_all(i)) {
                    fst_bar[k][j] += parseInt(data[0][i]);
                }
            }
        }
    }

    return [all_bar].concat(fst_bar);
}

var mask = [0, 0, 0, "-", "-", "-"];

var update_irp = function (o) {
    mask[o] ^= 1;
};

var update_fst = function (o, k) {
    if (mask[k] == o) {
        mask[k] = "-";
    } else {
        mask[k] = o;
    }
};

function textLength(num) {
    var temp = num,
        ret = 1;

    while(temp >= 10) {
        ret++;
        temp = temp/10;
    }

    return ret;
}

