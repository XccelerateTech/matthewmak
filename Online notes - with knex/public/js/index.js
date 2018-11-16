$(()=>{
    $.get('/api/notes').then((data)=>{
        constructData(data);
    })

    $('#addNote').click((e)=>{
        $.post('/api/notes').then((data)=>{
            let target = constructData(data);
            target.focus();
        })
    })
})


// construct data

let constructData = (data) => {
    $('#notes div.active').remove();
    let $selectors;
    data.forEach((element,i) => {
        let noteTemplate = $('#noteTemplate').clone();
        noteTemplate.contents().find('form').parent('div').attr('class','active');
        noteTemplate.contents().find('textarea').html(element.content);
        noteTemplate.contents().find('form').attr('action',`/api/notes/${element.id}`);

        if(!window.matchMedia( "(min-width: 800px)" ).matches){
            $selectors = $(noteTemplate.html()).appendTo('section#notes div.column:eq(0)');
        } else {
            if (i%4 == 0){
                $selectors = $(noteTemplate.html()).appendTo('section#notes div.column:eq(0)');
            } else if (i%4 == 1){
                $selectors = $(noteTemplate.html()).appendTo('section#notes div.column:eq(1)');
            } else if (i%4 == 2){
                $selectors = $(noteTemplate.html()).appendTo('section#notes div.column:eq(2)');
            } else if (i%4 == 3){
                $selectors = $(noteTemplate.html()).appendTo('section#notes div.column:eq(3)');
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

    return $($($selectors[0]).find('textarea')[0])
}

