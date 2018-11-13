$(()=>{
    $.get('/api/notes').then((data)=>{
        constructData(data);
    }).then(()=>{
        $('textarea').blur((e)=>{
            let curel = $(e.currentTarget);
            $.ajax({
                type:'PUT',
                url:curel.parent('form').attr('action'),
                data: {
                    content:curel.val()
                }
            }).done((data)=>{
                constructData(data);
            })
        })
    })

    $('#addNote').click((e)=>{
        $.post('/api/notes').then((data)=>{
            constructData(data);
            $('#notes div:last form textarea').focus()
        })
    })

})

let constructData = (data) => {
    $('#notes div.active').remove();
    data.forEach(element => {
        let noteTemplate = $('#noteTemplate').clone();
        noteTemplate.contents().find('form').parent('div').attr('class','active');
        noteTemplate.contents().find('textarea').html(element.content);
        noteTemplate.contents().find('form').attr('action',`/api/notes/${element.id}`);

        if(!window.matchMedia( "(min-width: 800px)" ).matches){
            $('section#notes div.column:eq(0)').append(noteTemplate.html());            
        } else {
            if (element.id%4 == 0){
                $('section#notes div.column:eq(0)').append(noteTemplate.html());
            } else if (element.id%4 == 1){
                $('section#notes div.column:eq(1)').append(noteTemplate.html());
            } else if (element.id%4 == 2){
                $('section#notes div.column:eq(2)').append(noteTemplate.html());
            } else if (element.id%4 == 3){
                $('section#notes div.column:eq(3)').append(noteTemplate.html());
            }
        }
    });

    $('textarea').blur((e)=>{
        let curel = $(e.currentTarget);
        $.ajax({
            type:'PUT',
            url:curel.parent('form').attr('action'),
            data: {
                content:curel.val()
            }
        }).done((data)=>{
            constructData(data);
        })
        
    })
    
    $('textarea').keyup((e)=>{
        $(e.target).css('height','auto');
        $(e.target).css('height',($(e.target)[0].scrollHeight)+"px");
    })

    $('#notes i').click((e)=>{
        let curel = $(e.currentTarget);
        $.ajax({
            type:'DELETE',
                url:curel.parent('div').children('form').attr('action'),     
        }).done((data)=>{
            constructData(data);
        })
    })

    for (let i = 0;i<$('textarea').length;i++){
        $(`textarea:eq(${i})`).css('height',($(`textarea:eq(${i})`)[0].scrollHeight)+"px");
    }

}

