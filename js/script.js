let main_data = ""

fetch('info.json')
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        put_data_into_fields(data)
        main_data = data
    })
    .catch( (err) => {
        console.log("Erro: "+err)
    })

let field_nome = document.getElementById("field_nome")
let field_telefone = document.getElementById("field_telefone")
let field_email = document.getElementById("field_email")
let field_cidade = document.getElementById("field_cidade")
let field_estado = document.getElementById("field_estado")
let field_endereco = document.getElementById("field_endereco")


function put_data_into_fields(data) {
    field_nome.textContent = data.nome
    field_telefone.textContent = data.telefone
    field_email.textContent = data.email
    field_cidade.textContent = data.cidade
    field_estado.textContent = data.estado
    field_endereco.textContent = data.endereço
}
