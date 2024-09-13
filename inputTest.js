update();
btn_update();

$(document).on('click', '.add', function() {
    let length = $('.user_list li').length + 1;
    $('.user_list').append(`
        <li>
        <label for="etc_${length}" class="num">기타_${length}</label>
        <input type="text" placeholder="입력하세요" id="etc_${length}">
        <span class="del">제거하기</span>
        <i class="fa-solid fa-chevron-up"></i>
        <i class="fa-solid fa-chevron-down"></i>
        </li>
    `)
    update();
})

$(document).on('click', '.del', function() {
    $(this).parent().remove();
    update();
});

function update() {
    let test = 0;
    $('.user_list li').each(function(idx) {
        let num = idx + 1;
        $(this).find('label').text(`기타_${num}`);
        $(this).find('input').attr('id', `etc_${num}`);
        $(this).find('label').attr('for', `etc_${num}`);
    });
    btn_update()
}

$(document).on('click', '.fa-chevron-up', function() {
    let li = $(this).parent('li');
    let li_prev = li.prev('li');
    
    if (li_prev) {
        li.insertBefore(li_prev);
        update();
    }
});

$(document).on('click', '.fa-chevron-down', function() {
    let li = $(this).parent('li');
    let li_next = li.next('li');

    if (li_next) {
        li.insertAfter(li_next);
        update();
    }
});

function btn_update() {
    $('.user_list li').each(function(idx) {
        let del = $(this).find('.del');
        let up = $(this).find('.fa-chevron-up');
        let down = $(this).find('.fa-chevron-down');

        if (idx == 0) {
            del.remove(); 
            up.remove();
        } else {
            if (up.length == 0) $(this).find('input[type="text"]').after('<i class="fa-solid fa-chevron-up"></i>');
            if (del.length == 0) $(this).find('input[type="text"]').after('<span class="del">제거하기</span>');
        }

        if (idx == $('.user_list li').length - 1 && !idx == 0) {
            down.remove();
        } else {
            if (down.length == 0) {$(this).append('<i class="fa-solid fa-chevron-down"></i>');}
        }
    });
}