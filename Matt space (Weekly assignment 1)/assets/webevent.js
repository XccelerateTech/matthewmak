
$('#uploadSec div').fadeToggle();

$('button#uploadButton').click(()=>{
    $('section#uploadSec').css('display','flex');
    $('#uploadSec div').fadeToggle();    
})

$('#uploadSec i.fa-times-circle').click(()=>{
    $('section#uploadSec').css('display','none');
    $('#uploadSec div').fadeToggle();    
})

let fileObj;
$.get('/filesdir')
    .done((data)=>{
        fileObj = data;
        for(let i = 0; i < Object.keys(fileObj).length; i++){
            $(`#body div:eq(${i})`).fadeToggle();
            $(`#body div:eq(${i})`).append(`<a href='http://localhost:8080/files/${fileObj[i]}'>${fileObj[i]}</a>`);
            $(`#body div:eq(${i})`).append('<i class="fas fa-times-circle" title="Delete file"></i>');
            $(`#body div:eq(${i}) i.fas.fa-times-circle`).click(()=>{
                $.get(`/filesdelete/${i}`)
                    .done(()=>{
                        location.reload();
                    })
            })
        }
})

$('#upload').change(()=>{
    let path = document.getElementById('upload').value;
    let arr = path.split('\\');
    $('#uploadLabel').html(arr[arr.length - 1]);
})

