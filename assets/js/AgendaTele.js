function verificarInputs() {
    let nome = document.getElementById("nome").value;
    let teleFixo = document.getElementById("teleFixo").value;
    let teleCell = document.getElementById("teleCell").value;
    let foto = document.getElementById("Foto").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let gitHub = document.getElementById("gitHub").value;

    if (nome == "" || teleFixo == "" || teleCell == "" || foto == "" || data == "" || email == "" || cep == "" || cidade == "" || insta == "" || gitHub == "") {
        console.log("Os dados estao vazios");
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

function enviarMsg(msg, tipo) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

class User {
    constructor(nome, teleFixo, teleCell, foto, data, email, cep, cidade, insta, gitHub) {
        this.nome = nome;
        this.teleFixo = teleFixo;
        this.teleCell = teleCell;
        this.foto = foto;
        this.data = data;
        this.idade = this.calculateAge();
        this.signo = this.getZodiacSign();
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.gitHub = gitHub;
    }

    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.data);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();
    
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
        
    }

getZodiacSign() {
    let birthdate = new Date(this.data);
    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;
    console.log("Passou pelo getSigno() da class User");

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricórnio ♑";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquário ♒";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes ♓";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Áries ♈";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Touro ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos ♊";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Câncer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leão ♌";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgem ♍";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Escorpião ♏";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagitário ♐";
    }
}
isPossibleClient() {
    const age = this.age;
    console.log("Passou pelo isPossibleClient? da class User");
    if (age >= 18 && age <= 26) {
        return "Sim ✅";
    }
    return "Não ❌";
}
}



function comporUsers() {
    let nome = document.getElementById("nome").value;
    let teleFixo = document.getElementById("teleFixo").value;
    let teleCell = document.getElementById("teleCell").value;
    let foto = document.getElementById("Foto").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let gitHub = document.getElementById("gitHub").value;

    const user = new User(nome, teleFixo, teleCell, foto, data, email, cep, cidade, insta, gitHub);

    
    bibliotecaUser.add(user);

    mostrarUsers();
}

class UserLista {
    constructor() {
        this.listaUserArray = [];
    }

    add(user) {
        if (verificarInputs()) {
            enviarMsg("Preencha todos os campos", "erro");
        } else if(!isURLValida(user.foto)){
            enviarMsg("URL da imagem inválida!", "erro");
        } else {
            this.listaUserArray.push(user);
            limparInputs();
            enviarMsg("Usuario cadastrado com sucesso", "sucesso");
        }
    }
}

const bibliotecaUser = new UserLista();

function limparInputs() {
    document.getElementById("nome").value = "";
    document.getElementById("teleFixo").value = "";
    document.getElementById("teleCell").value = "";
    document.getElementById("Foto").value = "";
    document.getElementById("data").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("gitHub").value = "";
}

function mostrarUsers() {

    const userHTML = document.getElementById("cardApa");
    userHTML.innerHTML = "";

    let array = bibliotecaUser.listaUserArray;

    array.forEach(user => {
        const userDiv = `
        <div class="detalheUser">
        <img src="${user.foto}" class="imgFoto">
        <h3>${user.nome}</h3>
        <p>Telefone Fixo: ${formatedCellphone(user.teleFixo)}</p>
        <p>Telefone Celular: ${formatedCellphone(user.teleCell)}</p>
        </div>
        `;

        userHTML.innerHTML += userDiv;
    })
}

function mostrarUsersCompleto() {

    const userHTML = document.getElementById("cardApa2");
    userHTML.innerHTML = "";

    let array = bibliotecaUser.listaUserArray;

    array.forEach(users => {
        const userDiv = `
        <div class="detalheUser">
        <img src="${users.foto}" class="imgFoto">
        <h3 id="nomeApa">${users.nome}</h3>
        <p>Telefone Fixo: ${formatedCellphone(users.teleFixo)}</p>
        <p>Telefone Celular: ${formatedCellphone(users.teleCell)}</p>
        <p>Data de Nascimento: ${dataPTBR(users.data)}</p>
        <p>Idade: ${users.idade}</p>
        <p>Signo: ${users.signo}</p>
        <p>Email: ${users.email}</p>
        <p>CEP: ${formatarCEP(users.cep)}</p>
        <p>Cidade: ${users.cidade}</p>
        <p>Instagram: ${users.insta}</p>
        <p>GitHub: ${users.gitHub}</p>
        <i class="fa-brands fa-whatsapp" id="logoZap" style="color: #10cb58;"></i>
        <i class="fa-brands fa-instagram" style="color: #dd36c7;"></i>
        <i class="fa-brands fa-github"></i>
        </div>
        `;

        userHTML.innerHTML += userDiv;
    })
}

function dataPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function formatedCellphone(telefone) {
    let telefoneArray = telefone.split("");
    let telecellFormated = "(" + telefoneArray[0] + telefoneArray[1] + ")"
        + " " + telefoneArray[2] + telefoneArray[3] + telefoneArray[4]
        + telefoneArray[5] + telefoneArray[6] + "-"
        + telefoneArray[7] + telefoneArray[8]
        + telefoneArray[9] + telefoneArray[10];
    return telecellFormated;
}

function formatarCEP(cep){
	var ceP = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/;

	if(ceP.test(cep)){
		return cep.replace(ceP,"$1.$2-$3");
	}else{
		enviarMsg("CEP inválido!");
	}
	
	return "";
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}