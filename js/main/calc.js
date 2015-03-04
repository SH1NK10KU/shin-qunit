var calc = {
    add: function(x, y) {
        if (!isNaN(x) && !isNaN(y)) {
            return x + y;
        } else {
            return "Please input number!";
        }
    }
};