//Object é a matriz. Tuo descende dele
//tanto faz se for var, let e const
var aluno1 = new Object();
aluno1.ra = "0001432512";
aluno1.nome = "Luis";


//interpolação
alert(`ra= ${aluno1.ra} nome:${aluno1.nome}`);
// alert("ra= " + aluno1.ra + "nome: " + aluno1.nome);

var aluno2 = {};
    aluno2.ra = "00014325120";
    aluno2["nome"] = "Bruna";
    aluno2["email"] = "brunaelisa@gmail.com";

alert(aluno2["email"]);


    //forma literal
    //NÃO esquecer da sintaxe correta
var aluno3 = {
    ra: "29102910",
    nome: "Isadora",
}
alert("ra=" + aluno3.ra + "nome= \n" + aluno3.nome);



//função construtora
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function (){
        return "ra=" + this.ra + " nome="+
        this.nome;
    }
}


var aluno4 = new Aluno("123", "Karina");
alert(aluno4.MostraDados()); //método
alert(aluno4.nome); //propriedade



var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5['nome'] = "Nicolly";
alert(aluno5.ra + " " + aluno5.nome);


//funcao construtora sem parâmetros
function Aluno2(){
    var ra; //encapsulamento escondido
    var nome;
    this.setRa = function (value){
        this.ra = value;
    }
    this.getRa = function(){
        return this.ra;
    }

    this.setNome = function (value){
        this.nome = value;
    }
    this.getNome = function (){
        return this.nome;
    }
}

var aluno6 = new Aluno2();
aluno6.setNome("Rafaela");
aluno6.setRa("234");

alert("ra= " + aluno6.getRa() + " nome= " + aluno6.getNome());


//herança com função construtora usando prototype
function AlunoADS() {
    var numLab;
    this.setnumLab = function(value){
        this.numLab = value;
    }
    this.getnumLab = function () {
        return this.numLab;
    }
}


//quando existe herança, a propriedade é definida na função/class filha

//herança se faz em:
AlunoADS.prototype = new aluno2();
 var aluno7 = new AlunoADS();
 aluno7.setNome("Andreus");
 aluno7.setRa("123");
 aluno7.setnumLab(5);
 alert(aluno7.getNome() +
" " + aluno7.getnumLab());


class Aluno1{
    constructor(){
        this._ra;
        this._nome;
    }
}

var objAluno = new Aluno1();
objAluno.setNome("Bruna");
objAluno.setRa('0031432512001');
alert(`nome=${objAluno.getNome()} ra=${objAluno.getRa()}`);