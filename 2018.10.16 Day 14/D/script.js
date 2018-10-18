let canvas = document.getElementById('Drawing');
    let context = canvas.getContext('2d');
    let dragging = false;
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;
    var x1, y1;
    $('#Drawing').mousedown(function(e){
        x1 = e.offsetX;
        y1 = e.offsetY;
        context.beginPath();
        context.moveTo(x1,y1);
        dragging = true;
    });
    $('#Drawing').mousemove(function(e){
        if(dragging){
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;
        }
    });
    $('#Drawing').mouseup(function(e){
        dragging = false;
        draw(e.offsetX,e.offsetY)
    });
    $('#Drawing').mouseleave(function(e){
        dragging = false;
    });

    function draw(x,y){
        context.lineTo(x,y);
        context.moveTo(x,y);
        context.closePath();
        context.stroke();
    }