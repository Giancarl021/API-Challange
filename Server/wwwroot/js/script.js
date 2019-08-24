const uri = 'localhost',
    port = '44364';

const request = `https://${uri}:${port}/api/Pessoa`;

async function _getAJAX(options) {
    return await $.ajax(options);
}

async function getPessoas() {
    return await _getAJAX({
        url: request,
        method: 'GET'
    });
}

async function addPessoa(name, email, nasc) { // NOT WORKING
    const ajax = await _getAJAX({
        url: request,
        method: 'POST',
        accepts: 'application/json',
        contentType: 'application/json',
        data: JSON.stringify({
            nome: name,
            email: email,
            nasc: nasc
        })
    });
    renderTable(await getPessoas());
}

async function editPessoa(id, name, email, nasc) { // NOT WORKING
    const ajax = await _getAJAX({
        url: `${request}/${id}`,
        method: 'PUT',
        accepts: 'application/json',
        contentType: 'application/json',
        data: JSON.stringify({
            nome: name,
            email: email,
            nasc: nasc
        })
    });
    renderTable(await getPessoas());
}

async function deletePessoa(id) {
    const ajax = await _getAJAX({
        url: `${request}/${id}`,
        method: 'DELETE'
    });
    renderTable(await getPessoas());
}

async function getPessoasBySearch(search) {
    const ajax = await _getAJAX({
        url: `${request}/query/${search}`,
        method: 'GET'
    });
    renderTable(ajax);
}

async function getPessoasByName(search) {
    const ajax = await _getAJAX({
        url: `${request}/query/name/${search}`,
        method: 'GET'
    });
    renderTable(ajax);
}

async function getPessoasByEmail(search) {
    const ajax = await _getAJAX({
        url: `${request}/query/email/${search}`,
        method: 'GET'
    });
    renderTable(ajax);
}

function renderTable(pessoas) {
    console.log(pessoas);
    $('tr:not(:first)').remove();
    pessoas.forEach(e => {
        $(`<tr><td>${e.nome}</td><td>${e.email}</td><td>${e.nasc}</td></tr>`).appendTo('table');
    });
}
