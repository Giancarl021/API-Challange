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
    $('tr:not(:first)').remove();
    if(pessoas.length === 0) return;
    pessoas.forEach(e => {
        $(`<tr><td>${e.nome}</td><td>${e.email}</td><td>${e.nasc}</td><td><button type="button" onclick="deletePessoa(${e.id})">Deletar</button></td></tr>`).appendTo('table');
    });
}

async function search(val) {
    const selector = parseInt(val);
    const search = $('#search').val();
    if(search.trim() === '') {
        renderTable(await getPessoas());
        return;
    }
    switch(selector) {
        case 0:
            await getPessoasBySearch(search);
            break;
        case 1:
            await getPessoasByName(search);
            break;
        case 2:
            await getPessoasByEmail(search);
            break;
        default:
            console.error('Filtro inválido selecionado');
    }
}
