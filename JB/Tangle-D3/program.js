/*var fade = function (node) {
    var level = 1;
    var step = function ( ) {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 7) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);

d3.select("body").style("background-color", "yellow");
*/


var svg = d3.selectAll("svg");
var circle = svg.selectAll("circle").data([10, 10]);
circle.style("fill", "red");


var addCircle = function (x, y, r) {
    var circleEnter = circle.enter().append("circle");
    circleEnter.attr("cy", y);
    circleEnter.attr("cx", x);
    circleEnter.attr("r", Math.sqrt(r));
}

function BiTree(v, x, y) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;

    addCircle(x, y, v)
}

BiTree.prototype = {
    constructor: BiTree,
    add: function (v) {},
    next: function (v) {}
};

BiTree.prototype.next = function (v) {
    var current = this, next = null;

    while(current !== null) {
        if(current.value > v) {
            next = current;
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return next.value;
};

BiTree.prototype.add = function (v) {

    var proAdd = function (x, root) {
        if(x === root.value) {
            return;
        }

        var next = x < root.value ? "left" : "right";

        if(root[next] === null) {
            var alpha = 20;
            var c = x/root.value;

            var d = Math.sqrt(x) + Math.sqrt(this.value);
            var dx = Math.abs(d * Math.sin(Math.PI/2 * c)) + alpha * c;
            var dy = Math.abs(d * Math.cos(Math.PI/2 * c)) + alpha * c;

            root[next] = new BiTree(x, root.x  + (x < root.value ? dx : -dx), root.y + dy);
            return;
        }

        proAdd(x, root[next]);
    };

    proAdd = (proAdd).bind(this);
    proAdd(v, this);
};

var tree = new BiTree(81, 320, 100);
/*tree.add(40);
tree.add(121);
tree.add(60);
tree.add(70);
tree.add(5);
tree.add(6);
tree.add(80);
tree.add(10);
tree.add(25);
tree.add(24);
tree.add(55);
tree.add(28);*/

for(var i = 0; i < 1000; i++) {
    tree.add(Math.abs(Math.random()*100));
}
