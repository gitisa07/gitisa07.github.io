
window.onload = function () {
    //url = recurso a ser requisitado
    let url = "https://hp-api.herokuapp.com/api/characters";
    //criando o objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //onreadystatechange => Define uma função a ser chamada quando a propriedade readyState mudar
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){   
            /*A responseTextpropriedade retorna a resposta do servidor
             como uma string JavaScript e você pode usá-la adequadamente
             */
            //convertendo a string em JSON
            let info = JSON.parse(xhttp.responseText);
            //chamando a função que cria o catálogo
            montaBody(info);
        };
    };
    //enviando uma solicitação ao servidor
    /**
     * o método GET solicita um recurso
     * o método POST envia um recurso
    **/ 
    xhttp.open("GET", url);
    xhttp.send();
}

function montaBody (info)
{
    let body = document.getElementById("main");
    console.log(info)

   for(let i =0; i<info.length; i++)
   {
       //criando a div a partir da verificação de que todos os objetos possuam a propriedade image
        if(info[i].image != "")
        {
            let div = document.createElement("div");
            div.classList.add("persona");

            let divContent = document.createElement("div");
            divContent.classList.add("content");

            let image = document.createElement("img");
            image.src = info[i].image;

            let name = document.createElement("h3");
            name = document.createTextNode(info[i].name);

            let descricao;
            if(info[i].wizard == true)
            {
                descricao = document.createElement("p");
                descricao = document.createTextNode("Bruxo");
            }
            else
            {
                descricao = document.createElement("p");
                descricao = document.createTextNode("Trouxa");
            }

            let n;
            if(info[i].dateOfBirth[0] == undefined)
            {
                n =" Desconhecido";
            }
            else{
                n = " " +  info[i].dateOfBirth[0] + info[i].dateOfBirth[1] + "/" + info[i].dateOfBirth[3] + info[i].dateOfBirth[4] + "/" + info[i].dateOfBirth[6]+info[i].dateOfBirth[7]+info[i].dateOfBirth[8]+info[i].dateOfBirth[9]
            }
            
            let home = document.createElement("h3");
            home = document.createTextNode("Casa: " + info[i].house);

            let nascimento = document.createElement("h3");
            nascimento = document.createTextNode("Nascimento: " + n);
            console.log(nascimento);

            let specie = document.createElement("h3");

            switch(info[i].species){
                case "human":
                    specie = document.createTextNode ("Humano");
                    break;
                case "cat":
                    specie = document.createTextNode("Gato");
                    break;
                case "half-giant":
                    specie = document.createTextNode ("Meio-gigante");
                    break;
                case "werewolf":
                    specie = document.createTextNode ("Lobisomem");
                    break;
                default:
                    specie = info[i].species
            }

            switch(info[i].house){
                case "Gryffindor":
                    div.style.backgroundColor = "rgb(77, 10, 14)";
                    break;
                case "Slytherin":
                    div.style.backgroundColor = "rgb(35, 66, 51)";  
                    break;
                case "Hufflepuff":
                    div.style.backgroundColor = "rgb(128, 94, 35)";
                    break;
                case "Ravenclaw":
                    div.style.backgroundColor = "rgb(41, 52, 87)";    
                    break;
            };

            let br = document.createElement('br');
            div.appendChild(image);
            divContent.innerHTML += "<br>";
            divContent.appendChild(name);
            divContent.innerHTML += "<br>";
            divContent.appendChild(home);
            divContent.innerHTML += "<br>";
            divContent.appendChild(specie)
            divContent.innerHTML += "<br>";
            divContent.appendChild(nascimento);
            divContent.innerHTML += "<br>";
            divContent.appendChild(descricao);
            divContent.innerHTML += "<br>";
            div.appendChild(divContent);
            body.appendChild(div);
            body.appendChild(br);
        }
    }
}