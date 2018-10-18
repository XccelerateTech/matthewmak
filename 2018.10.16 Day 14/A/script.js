
$(function(){
    const line1 = document.getElementById('Drawing');
    const ctx = line1.getContext('2d');
    drawLine(ctx,[20,20],[400,400]); 
    drawLine(ctx,[20,400],[400,20]); 
    
})


function drawLine(ctx,start,end){
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.lineTo(end[0],end[1]);
    ctx.stroke();
}