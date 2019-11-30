var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var counter = 0;

ctx.fillStyle = "black";
function drawLine(p0, p1, color="black") {
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

function drawSquare(p0, p1, p2, p3) {
    drawLine(p0, p1);
    drawLine(p1, p2);
    drawLine(p2, p3);
    drawLine(p3, p0);
}

function drawSquareFractal(p0, p1, p2, p3, t, limit) {
    if(limit > 0 && counter < 8){
        const
            a = p1.x - p0.x,
            b = p3.y - p0.y,

            pA = {
                x: p0.x - a/t,
                y: p0.y
            },
            pB = {
                x: p0.x - a/t,
                y: p0.y - b/t
            },
            pC = {
                x: p0.x,
                y: p0.y - b/t
            },
            pD = {
                x: p3.x - a/t,
                y: p3.y
            },
            pE = {
                x: p3.x,
                y: p3.y + b/t
            },
            pF = {
                x: p3.x - a/t,
                y: p3.y + b/t
            },
            pK = {
                x: p1.x + a/t,
                y: p1.y
            },
            pO = {
                x: p1.x,
                y: p1.y - b/t
            },
            pM = {
                x: p1.x + a/t,
                y: p1.y - b/t
            },

            pU = {
                x: p2.x + a/t,
                y: p2.y
            },
            pZ = {
                x: p2.x,
                y: p2.y + b/t
            },
            pI = {
                x: p2.x + a/t,
                y: p2.y + b/t
            };


        drawSquareFractal(pO, pM, pK, p1, t, limit - 1);
        drawSquareFractal(pB, pC, p0, pA, t, limit - 1);
        drawSquareFractal(pD, p3, pE, pF, t, limit - 1);
        drawSquareFractal(p2, pU, pI, pZ, t, limit - 1);

    }
    else{
        drawSquare(p0, p1, p2, p3)
    }
}

function update() {
    drawSquareFractal({x: 150, y: 150}, {x: 350, y: 150}, {x: 350, y: 350}, {x: 150, y: 350}, 2, counter);
    counter++
}