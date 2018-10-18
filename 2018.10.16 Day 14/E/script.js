let canvasD = document.getElementById('canvas-draft');
let contextD = canvasD.getContext('2d');
let canvasR = document.getElementById('canvas-real');
let contextR = canvasR.getContext('2d');
let dragging = false;
contextD.strokeStyle = "#df4b26";
contextR.strokeStyle = "#df4b26";
contextD.lineJoin = "round";
contextR.lineJoin = "round";
contextD.lineWidth = 3;
contextR.lineWidth = 3;
let x1, y1, x2, y2;
    $('#canvas-draft').mousedown(function(e){
        x1 = e.offsetX;
        y1 = e.offsetY;
        dragging = true;
    });
    $('#canvas-draft').mousemove(function(e){
        x2 = e.offsetX;
        y2 = e.offsetY;
        contextD.clearRect(0,0,800,600);
        if (dragging == true) {
            draw(contextD,x2,y2);        
        }
    });
    $('#canvas-draft').mouseup(function(e){
        dragging = false;
        draw(contextR,e.offsetX,e.offsetY);
    });
    $('#canvas-draft').mouseleave(function(e){
        dragging = false;
    });

    function draw(DR,x,y){
        
        contextD.clearRect(0,0,800,600);
        DR.beginPath();
        DR.moveTo(x1,y1);
        DR.lineTo(x,y);
        // context.moveTo(x,y);
        DR.closePath();
        DR.stroke();
        
    }