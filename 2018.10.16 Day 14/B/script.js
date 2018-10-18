
$(function(){
    const line1 = document.getElementById('Drawing');
    const ctx = line1.getContext('2d');
    var x = 200;
    drawLine(ctx,[0,x],[0,x*2]); 
    drawLine(ctx,[0,x*2],[x,x*2]); 
    drawLine(ctx,[x,x*2],[x,x]); 
    drawQuadraticCurve(ctx,[0,x],[x/2,0],[x,x]);
})


function drawLine(ctx,start,end){
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.lineTo(end[0],end[1]);
    ctx.stroke();
}

function drawQuadraticCurve(ctx,start,cp1,end){
    ctx.setLineDash([]); // Set it to an empty array to return to solid.
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
    ctx.stroke();
}