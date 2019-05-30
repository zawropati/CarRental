// console.log('Done');

$('#searchBtn').on('click', function() {
    setTimeout(function() {
        window.location = 'results.html';
    }, 3000)
});

function closeModal() {
    $('.modalContainer').css('display', 'none');
    $('body').css('overflow', "scroll");
}

function showModal(id) {

    if(id == null) {
        $('.modalContainer').css('display', 'flex');
        // document.getElementById('modalContainer').style.display = "flex";
    } else {
        let modal = $(`[data-id=${id}]`);

        // console.log(modal[0]);
        $(modal[0]).css('display', 'flex');
    }

    $('body').css('overflow', "hidden");
}

function loginUser() {
    $('.btn-nav').addClass('hidden');
    $('.profile').removeClass('hidden');

    closeModal();
}

let price = 550

$('input[type="checkbox"]').on('change', function() {
    let value = $(this).data('to-open');

    if ($(`input#${value}`).prop('checked')) {
        price += parseInt($(this).val());
        $(`.${value}`).show(500);
        // console.log(price);

        $('#total').text(price);
    } else {
        price -= parseInt($(this).val());
        $(`.${value}`).hide(500);
        // console.log(price);

        $('#total').text(price);
    }
})