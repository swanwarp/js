
var customers_text = svg.append("text")
var mid_ = svg.append("text")
var mid_text = [
    svg.append("text"),
    svg.append("text"),
    svg.append("text")
]
var fst_text = [
    svg.append("text"),
    svg.append("text"),
    svg.append("text")
];

var last = margin.left;
var all_at_the_beginning = false;



function init_head() {
    all_text
        .attr("x", -125)
        .attr("y", margin.top + margin.text)
        .text(prefix[0])
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .attr("fill", "black")
        .transition()
        .duration(duration)
        .attr("x", last)

    last += 25;

    customers_text
        .attr("x", -100)
        .attr("y", margin.top + margin.text)
        .text(prefix[1])
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .attr("fill", "black")
        .transition()
        .duration(duration)
        .attr("x", last)

    last += 30;

    mid_
        .attr("x", width + 100)
        .attr("y", margin.top + margin.text)
        .text(mid[0])
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .attr("fill", "black")

    for(var i = 0; i < products.length; i++) {
        mid_text[i]
            .attr("x", width + 100)
            .attr("y", margin.top + margin.text)
            .text(prods[i])
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px")
            .attr("fill", "black")
    }
}

function go_start() {
    all_text
        .transition()
        .duration(duration)
        .attr("x", -125)

    all_text
        .transition()
        .duration(duration)
        .attrTween("text", function() {
            var that = d3.select(this),
                k = d3.interpolateString("All", "Alk");

            return function(t) {
                that.text(k(t));
            };
        })


    customers_text
        .transition()
        .duration(duration)
        .attr("x", margin.left + 100)

    last -= 30;
    all_at_the_beginning = true;
}

function update_head(i, u) {
    if(check_all_mask()) {
        last = margin.left

        all_text
            .transition()
            .duration(duration)
            .attr("x", last)

        customers_text
            .transition()
            .duration(duration)
            .attr("x", last + 25)

        last += 55;
        all_at_the_beginning = false;
    } else {
        if(u == 0) {
            if(mask[i] == 1) {
                if(!all_at_the_beginning) {
                    go_start()
                }


            }
        } else {

        }
    }
}