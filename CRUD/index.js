let dados = [];

//======================DELETE==================
function ApagaRegistro(id) {
    let _confirm = confirm("Deseja realmente excluir este registro?");

    if(_confirm){
        for(let i = 0; i < dados.length; i++){
            if(dados[i].ID == id){
                // splice => apaga o registro apartir do (indice, quantos elementos)
                dados.splice(i, 1);
            }
        }
        //reescrevendo as linhas da tabela
        PopulaTabela();
    }
}
//====================UPDATE=====================
function EditaRegistro(id) {
    //abre a modal
    $("#modalRegistro").modal("show");
    //varrendo os dados com os campos já preenchidos para a edição
    dados.forEach(function(item){
        if(item.ID == id){
            $("#hdID").val(item.ID);
            $("#txtNome").val(item.Nome);
            $("#txtSobrenome").val(item.Sobrenome);
            $("#txtDtNascimento").val(item.DtNascimento.substr(6,4) + "-" + item.DtNascimento.substr(3,2) + "-" + item.DtNascimento.substr(0,2));
            $("#txtFormacao").val(item.Formacao);
        }
    })
};
//=========================CREATE====================
function PopulaTabela(){
    //verifica se é um array
    if(Array.isArray(dados)){

        localStorage.setItem("__dados__",JSON.stringify(dados));

        //código jquery (limpando as linhas existentes)
        $("#tblDados tbody").html("");

        //varrendo o array
        dados.forEach(function(item){
            //TEMPLATE STRING
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formacao}</td>
            <td><button type="button" class="btn btn-primary" onclick = "javascript: EditaRegistro(${item.ID})">✏️</button></td>
            <td><button type="button" class="btn btn-danger" onclick = "javascript:ApagaRegistro(${item.ID});">🗑️</button></td>
            </tr>`)
        })
    }
};
//========================READ========================
//iniciando o Jquery $
$(function() {
    //executa ao carregar da tela
    //se tiver dados no localStorage
    dados = JSON.parse(localStorage.getItem('__dados__'));

    if (dados){
        PopulaTabela();
    };

    $("#btnSalvar").click(function(){
        //EVENTO CLICK DO BOTÃO SALVAR
        //val() --> pega o valor digitado
        let _id =  $("#hdID").val();
        let Nome = $("#txtNome").val();
        let Sobrenome = $("#txtSobrenome").val();
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br",{timeZone: "UTC"});
        let Formacao = $("#txtFormacao").val();

        //se o _id for nulo OU vazio
        if(!_id || _id == "0"){
            //criação do objeto
            let registro = {}
            registro.Nome = Nome;
            registro.Sobrenome = Sobrenome;
            registro.DtNascimento = DtNascimento;
            registro.Formacao = Formacao;

            //preenchimento do ID automático
            registro.ID = dados.length + 1;
            //armazenando o registro
            dados.push(registro);
        }//se o _id for válido, realize a edição do registro
        else{
            //varredura a procura do registro que possui o ID reservado
            dados.forEach(function(item){
                if(item.ID == _id){
                    item.Nome = Nome;
                    item.Sobrenome = Sobrenome;
                    item.DtNascimento = DtNascimento;
                    item.Formacao = Formacao;
                };
            });
        };
        //exibindo mensagem de sucesso
        alert("Registro salvo com sucesso!");
        //fechando a modal
        $("#modalRegistro").modal("hide");

        //limpando os campos da modal
        $("#hdID").val("0");
        $("#txtNome").val("");
        $("#txtSobrenome").val("");
        $("#txtDtNascimento").val("");
        $("#txtFormacao").val("");

        //chamando a função PopulaTabela()
        PopulaTabela();
    });
});