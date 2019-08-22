function callAPI(query) {
    $.ajax({
        method: 'GET',
        url: 'https://api.github.com/'
    }).then(d => {
        console.log(d);
    });
}

function showAction(value) {
    $('form div').css('display', 'none');
    $(`#${value}`).css('display', 'inherit');
}
