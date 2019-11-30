var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var counter = 1;

ctx.fillStyle = "black";
function drawLine(p0, p1, color="black") {
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

function drawTriangle(p0, p1, p2) {
    drawLine(p0, p1);
    drawLine(p1, p2);
    drawLine(p2, p0);
}

function drawTriangleFractal(p0, p1, p2, limit) {
    if(limit > 0 && counter < 8){
        const pA = {
                x: p0.x + (p1.x - p0.x)/2,
                y: p0.y - (p0.y - p1.y)/2
            },
            pB = {
                x: p1.x + (p2.x - p1.x)/2,
                y: p1.y - (p1.y - p2.y)/2
            },
            pC = {
                x: p0.x + (p2.x - p0.x)/2,
                y: p0.y
            };

        drawTriangleFractal(p0, pA, pC, limit - 1);
        drawTriangleFractal(pA, p1, pB, limit - 1);
        drawTriangleFractal(pC, pB, p2, limit - 1);

    }
    else{
        drawTriangle(p0,p1,p2);
    }
}

function update() {
    drawTriangleFractal({x: 0, y:500},{x:250, y:0},  {x:500, y:500}, counter);
    counter++
}
