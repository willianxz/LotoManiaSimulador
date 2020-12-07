function validateInput(){
  let inputNumber = parseInt(this.value());
  
   if(!Number.isInteger(inputNumber)){
      this.value("");
   }
   
   if(inputNumber > 99){
     this.value("");
   }
}



function drawCardInputs(){
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(100, 20, 330, 300);
  stroke(0);
  strokeWeight(1);
  //Primeira fileira
  number1Input = createInput('');
  number1Input.position(172, 100);
  number1Input.style("width", "25px");
  number1Input.style("height", "20px");
  number1Input.value(1);
  number1Input.input(validateInput);
  
  number2Input = createInput('');
  number2Input.position(210, 100);
  number2Input.style("width", "25px");
  number2Input.style("height", "20px");
  number2Input.value(21);
  number2Input.input(validateInput);
  
  number3Input = createInput('');
  number3Input.position(250, 100);
  number3Input.style("width", "25px");
  number3Input.style("height", "20px");
  number3Input.value(39);
  number3Input.input(validateInput);
  
  number4Input = createInput('');
  number4Input.position(290, 100);
  number4Input.style("width", "25px");
  number4Input.style("height", "20px");
  number4Input.value(58);
  number4Input.input(validateInput);
  
  number5Input = createInput('');
  number5Input.position(330, 100);
  number5Input.style("width", "25px");
  number5Input.style("height", "20px");
  number5Input.value(81);
  number5Input.input(validateInput);
  
  //Segunda Fileira
  number6Input = createInput('');
  number6Input.position(172, 125);
  number6Input.style("width", "25px");
  number6Input.style("height", "20px");
  number6Input.value(4);
  number6Input.input(validateInput);
  
  number7Input = createInput('');
  number7Input.position(210, 125);
  number7Input.style("width", "25px");
  number7Input.style("height", "20px");
  number7Input.value(23);
  number7Input.input(validateInput);
  
  number8Input = createInput('');
  number8Input.position(250, 125);
  number8Input.style("width", "25px");
  number8Input.style("height", "20px");
  number8Input.value(41);
  number8Input.input(validateInput);
  
  number9Input = createInput('');
  number9Input.position(290, 125);
  number9Input.style("width", "25px");
  number9Input.style("height", "20px");
  number9Input.value(59);
  number9Input.input(validateInput);
  
  number10Input = createInput('');
  number10Input.position(330, 125);
  number10Input.style("width", "25px");
  number10Input.style("height", "20px");
  number10Input.value(83);
  number10Input.input(validateInput);
  
  //Terceira Fileira
  number11Input = createInput('');
  number11Input.position(172, 150);
  number11Input.style("width", "25px");
  number11Input.style("height", "20px");
  number11Input.value(5);
  number11Input.input(validateInput);
  
  number12Input = createInput('');
  number12Input.position(210, 150);
  number12Input.style("width", "25px");
  number12Input.style("height", "20px");
  number12Input.value(24);
  number12Input.input(validateInput);
  
  number13Input = createInput('');
  number13Input.position(250, 150);
  number13Input.style("width", "25px");
  number13Input.style("height", "20px");
  number13Input.value(45);
  number13Input.input(validateInput);
  
  number14Input = createInput('');
  number14Input.position(290, 150);
  number14Input.style("width", "25px");
  number14Input.style("height", "20px");
  number14Input.value(61);
  number14Input.input(validateInput);
  
  number15Input = createInput('');
  number15Input.position(330, 150);
  number15Input.style("width", "25px");
  number15Input.style("height", "20px");
  number15Input.value(85);
  number15Input.input(validateInput);
  
  //Quarta Fileira
  number16Input = createInput('');
  number16Input.position(172, 175);
  number16Input.style("width", "25px");
  number16Input.style("height", "20px"); 
  number16Input.value(7);
  number16Input.input(validateInput);
  
  number17Input = createInput('');
  number17Input.position(210, 175);
  number17Input.style("width", "25px");
  number17Input.style("height", "20px");
  number17Input.value(25);
  number17Input.input(validateInput);
  
  number18Input = createInput('');
  number18Input.position(250, 175);
  number18Input.style("width", "25px");
  number18Input.style("height", "20px");
  number18Input.value(46);
  number18Input.input(validateInput);
  
  number19Input = createInput('');
  number19Input.position(290, 175);
  number19Input.style("width", "25px");
  number19Input.style("height", "20px");
  number19Input.value(63);
  number19Input.input(validateInput);
  
  number20Input = createInput('');
  number20Input.position(330, 175);
  number20Input.style("width", "25px");
  number20Input.style("height", "20px");
  number20Input.value(86);
  number20Input.input(validateInput);
  
  //Quinta Fileira
  number21Input = createInput('');
  number21Input.position(172, 200);
  number21Input.style("width", "25px");
  number21Input.style("height", "20px"); 
  number21Input.value(8);
  number21Input.input(validateInput);
  
  number22Input = createInput('');
  number22Input.position(210, 200);
  number22Input.style("width", "25px");
  number22Input.style("height", "20px");
  number22Input.value(26);
  number22Input.input(validateInput);
  
  number23Input = createInput('');
  number23Input.position(250, 200);
  number23Input.style("width", "25px");
  number23Input.style("height", "20px");
  number23Input.value(47);
  number23Input.input(validateInput);
  
  number24Input = createInput('');
  number24Input.position(290, 200);
  number24Input.style("width", "25px");
  number24Input.style("height", "20px");
  number24Input.value(66);
  number24Input.input(validateInput);
  
  number25Input = createInput('');
  number25Input.position(330, 200);
  number25Input.style("width", "25px");
  number25Input.style("height", "20px");
  number25Input.value(88);
  number25Input.input(validateInput);
  
  
  //Sexta Fileira
  number26Input = createInput('');
  number26Input.position(172, 225);
  number26Input.style("width", "25px");
  number26Input.style("height", "20px"); 
  number26Input.value(10);
  number26Input.input(validateInput);
  
  number27Input = createInput('');
  number27Input.position(210, 225);
  number27Input.style("width", "25px");
  number27Input.style("height", "20px");
  number27Input.value(30);
  number27Input.input(validateInput);
  
  number28Input = createInput('');
  number28Input.position(250, 225);
  number28Input.style("width", "25px");
  number28Input.style("height", "20px");
  number28Input.value(49);
  number28Input.input(validateInput);
  
  number29Input = createInput('');
  number29Input.position(290, 225);
  number29Input.style("width", "25px");
  number29Input.style("height", "20px");
  number29Input.value(67);
  number29Input.input(validateInput);

  number30Input = createInput('');
  number30Input.position(330, 225);
  number30Input.style("width", "25px");
  number30Input.style("height", "20px");
  number30Input.value(90);
  number30Input.input(validateInput);
  
  
  //Setima Fileira
  number31Input = createInput('');
  number31Input.position(172, 250);
  number31Input.style("width", "25px");
  number31Input.style("height", "20px"); 
  number31Input.value(12);
  number31Input.input(validateInput);
  
  number32Input = createInput('');
  number32Input.position(210, 250);
  number32Input.style("width", "25px");
  number32Input.style("height", "20px");
  number32Input.value(31);
  number32Input.input(validateInput);
  
  number33Input = createInput('');
  number33Input.position(250, 250);
  number33Input.style("width", "25px");
  number33Input.style("height", "20px");
  number33Input.value(50);
  number33Input.input(validateInput);
  
  number34Input = createInput('');
  number34Input.position(290, 250);
  number34Input.style("width", "25px");
  number34Input.style("height", "20px");
  number34Input.value(73);
  number34Input.input(validateInput);
  
  number35Input = createInput('');
  number35Input.position(330, 250);
  number35Input.style("width", "25px");
  number35Input.style("height", "20px");
  number35Input.value(92);
  number35Input.input(validateInput);
  
  
  //Oitava Fileira
  number36Input = createInput('');
  number36Input.position(172, 275);
  number36Input.style("width", "25px");
  number36Input.style("height", "20px"); 
  number36Input.value(15);
  number36Input.input(validateInput);
  
  number37Input = createInput('');
  number37Input.position(210, 275);
  number37Input.style("width", "25px");
  number37Input.style("height", "20px");
  number37Input.value(32);
  number37Input.input(validateInput);
  
  number38Input = createInput('');
  number38Input.position(250, 275);
  number38Input.style("width", "25px");
  number38Input.style("height", "20px");
  number38Input.value(51);
  number38Input.input(validateInput);
  
  number39Input = createInput('');
  number39Input.position(290, 275);
  number39Input.style("width", "25px");
  number39Input.style("height", "20px");
  number39Input.value(74);
  number39Input.input(validateInput);
  
  number40Input = createInput('');
  number40Input.position(330, 275);
  number40Input.style("width", "25px");
  number40Input.style("height", "20px");
  number40Input.value(95);
  number40Input.input(validateInput);
  
  
  //Nona Fileira
  number41Input = createInput('');
  number41Input.position(172, 300);
  number41Input.style("width", "25px");
  number41Input.style("height", "20px"); 
  number41Input.value(16);
  number41Input.input(validateInput);
  
  number42Input = createInput('');
  number42Input.position(210, 300);
  number42Input.style("width", "25px");
  number42Input.style("height", "20px");
  number42Input.value(33);
  number42Input.input(validateInput);
  
  number43Input = createInput('');
  number43Input.position(250, 300);
  number43Input.style("width", "25px");
  number43Input.style("height", "20px");
  number43Input.value(52);
  number43Input.input(validateInput);
  
  number44Input = createInput('');
  number44Input.position(290, 300);
  number44Input.style("width", "25px");
  number44Input.style("height", "20px");
  number44Input.value(75);
  number44Input.input(validateInput);
  
  number45Input = createInput('');
  number45Input.position(330, 300);
  number45Input.style("width", "25px");
  number45Input.style("height", "20px");
  number45Input.value(96);
  number45Input.input(validateInput);
  
  
  //Decima Fileira
  number46Input = createInput('');
  number46Input.position(172, 325);
  number46Input.style("width", "25px");
  number46Input.style("height", "20px"); 
  number46Input.value(17);
  number46Input.input(validateInput);
  
  number47Input = createInput('');
  number47Input.position(210, 325);
  number47Input.style("width", "25px");
  number47Input.style("height", "20px");
  number47Input.value(38);
  number47Input.input(validateInput);
  
  number48Input = createInput('');
  number48Input.position(250, 325);
  number48Input.style("width", "25px");
  number48Input.style("height", "20px");
  number48Input.value(56);
  number48Input.input(validateInput);
  
  number49Input = createInput('');
  number49Input.position(290, 325);
  number49Input.style("width", "25px");
  number49Input.style("height", "20px");
  number49Input.value(80);
  number49Input.input(validateInput);
  
  number50Input = createInput('');
  number50Input.position(330, 325);
  number50Input.style("width", "25px");
  number50Input.style("height", "20px");
  number50Input.value(98);
  number50Input.input(validateInput);
  
  textSize(16);
  fill(255);
  text("Minha Cartela", 210, 305);
}

function drawButtons(){
 
  //Buttons Jogar/Auto
  buttonPlay = createButton('JOGAR');
  buttonPlay.position(110, 400);
  buttonPlay.style("width", "140px");
  buttonPlay.style("height", "50px");
  buttonPlay.style("background-color", "green");
  buttonPlay.style("color", "white");
  buttonPlay.mousePressed(play);
  
 
  buttonAutoPlay = createButton('Auto');
  buttonAutoPlay.position(270, 400);
  buttonAutoPlay.style("width", "140px");
  buttonAutoPlay.style("height", "50px");
  buttonAutoPlay.style("background-color", "blue");
  buttonAutoPlay.style("color", "white");
  buttonAutoPlay.mousePressed(autoPlay);
}



function gerarCartelas(quantCartelas, quantNumerosSortidosPorCartela){
    var sorteio = [];
    
    //Cria as cartelas com a quantidade de numeros solicitada.
    for(var iteracoes = 0; iteracoes < quantCartelas; iteracoes++){
        for(var i = 0; i < quantNumerosSortidosPorCartela; i++){
          sorteio.push(floor(random(0, 100)));
        }
    }
    //O random deve ir de 1 - 26, por que ele vai ignorar o ultimo digito no caso o (26).
    
    
    //Limpa os numeros repetidos das cartelas.
    var repetir = false;
    
    do{
        for(var x = 0; x < sorteio.length; x++){
                repetir = false;
                 for(var c = 0; c < sorteio.length; c++){
                     if(sorteio[x] === sorteio[c] && x !== c){
                          sorteio.splice(x, 1);
                          var novoValor = floor(random(1, 26));
                          sorteio.push(novoValor);
                          repetir = true;
                          x = sorteio.length;
                          break;
                     }
              }
        }
       
    }while(repetir);
    
    //Para ordenar os numeros dentro da cartela.
     sorteio.sort(function(a, b) {
          return a - b;
    });
    
    return sorteio;
}

function atualizarMinhaCartela(){
    minhaCartela = [
      parseInt(number1Input.value()), parseInt(number2Input.value()), parseInt(number3Input.value()), parseInt(number4Input.value()), parseInt(number5Input.value()), 
      parseInt(number6Input.value()), parseInt(number7Input.value()), parseInt(number8Input.value()), parseInt(number9Input.value()), parseInt(number10Input.value()), 
      parseInt(number11Input.value()), parseInt(number12Input.value()), parseInt(number13Input.value()), parseInt(number14Input.value()), parseInt(number15Input.value()),
      parseInt(number16Input.value()), parseInt(number17Input.value()), parseInt(number18Input.value()), parseInt(number19Input.value()), parseInt(number20Input.value()),
      parseInt(number21Input.value()), parseInt(number22Input.value()), parseInt(number23Input.value()), parseInt(number24Input.value()), parseInt(number25Input.value()),
      parseInt(number26Input.value()), parseInt(number27Input.value()), parseInt(number28Input.value()), parseInt(number29Input.value()), parseInt(number30Input.value()),
      parseInt(number31Input.value()), parseInt(number32Input.value()), parseInt(number33Input.value()), parseInt(number34Input.value()), parseInt(number35Input.value()),
      parseInt(number36Input.value()), parseInt(number37Input.value()), parseInt(number38Input.value()), parseInt(number39Input.value()), parseInt(number40Input.value()),
      parseInt(number41Input.value()), parseInt(number42Input.value()), parseInt(number43Input.value()), parseInt(number44Input.value()), parseInt(number45Input.value()),
      parseInt(number46Input.value()), parseInt(number47Input.value()), parseInt(number48Input.value()), parseInt(number49Input.value()), parseInt(number50Input.value()),
    ];
}

 



var number1Input;
var number2Input;
var number3Input;
var number4Input;
var number5Input;
var number6Input;
var number7Input;
var number8Input;
var number9Input;
var number10Input;
var number11Input;
var number12Input;
var number13Input;
var number14Input;
var number15Input;
var buttonPlay;
var buttonAutoPlay;


var minhaCartela = [];

var acertoNumeros = 0;
var valorFaturado = 0;
var valorAposta = 2.50;
var valorInvestido = 0;
var acertoJogos = 0;
var quantJogadas = 0;
var mediaAcertos = 0;
var velocidadeDoJogo = 1;
var toggle = false;
var autoPlaying = false;
var playing = true;
function setup() {
  createCanvas(windowWidth, 400); 
  frameRate(velocidadeDoJogo);
  background(51);  
  drawCardInputs();
  drawButtons();
  atualizarMinhaCartela();  
}

function draw() {  
   atualizarMinhaCartela();    
  
  if(autoPlaying){
     jogar(); 
  }  
}




function jogar(){     
     background(51);
     quantJogadas++;
    
    var cartelaPremiada = gerarCartelas(1, 20);
    
    for(var i = 0; i < minhaCartela.length; i++){
        for(var x = 0; x < cartelaPremiada.length; x++){
            if(minhaCartela[i] === cartelaPremiada[x]){
                acertoNumeros++; 
            }
        }
    }
    
    switch(acertoNumeros){
        case 0:
            valorFaturado += 119906.97;
            acertoJogos++;
            break;
        case 15:
            valorFaturado += 4.97;
            acertoJogos++;
            break;
        case 16:
            valorFaturado += 21.08;
            acertoJogos++;
            break;
        case 17:
            valorFaturado += 123.11;
            acertoJogos++;
            break;
        case 18:
            valorFaturado += 1561.50;
            acertoJogos++;
            break;
        case 19:
            valorFaturado += 95605.51;
            acertoJogos++;
            break;
        case 20:
            valorFaturado += 5000000.00;
            acertoJogos++;
            break;
    }
      
      
      mediaAcertos = acertoJogos/quantJogadas;
      valorInvestido = valorAposta * quantJogadas;
      
       
      textSize(16);    
      fill(255);
      text("Valor Faturado: R$ "+valorFaturado.toFixed(2), 500, 30);
      text("Qtd Apostas Ganhadoras: "+acertoJogos, 500, 51);
      text("Qtd Apostas Feitas: "+quantJogadas, 500, 72);
      text("Média de Apostas Ganhadoras: "+mediaAcertos.toFixed(2), 800, 52 );
      text("Valor investido: R$ "+valorInvestido.toFixed(2), 800, 72);
      
      
       
       
       fill(255, 255, 0);
       var  posicaoXx = 700, posicaoYy = 129;
       for(x = 0; x < cartelaPremiada.length; x++){
           if(cartelaPremiada[x] < 10){
              text("0"+cartelaPremiada[x], posicaoXx, posicaoYy);
           }else{
            text(cartelaPremiada[x], posicaoXx, posicaoYy);
           }
           
           if(posicaoYy < height - 198){ 
            posicaoYy+=33;
           }else if(posicaoXx < width - 20){
              posicaoYy = 129;
              posicaoXx += 39;
           }
       }
       
       
       noFill();
       stroke(255);
       strokeWeight(3);
       rect(100, 20, 330, 300);
       stroke(0);
       strokeWeight(1);
       fill(255);
       text("Minha Cartela", 210, 305);
       
       noFill();
       stroke(255, 255, 0);
       strokeWeight(3);
       rect(640, 100, 290, 280);
       stroke(0);
       strokeWeight(1);
       fill(255, 255, 0);
       text("Cartela Premiada", 720, 260);
       
       textSize(20);
       text("Acertos nessa cartela",  690, 321);
       textSize(40);
       text(acertoNumeros,  780, 370);
       
       acertoNumeros = 0;
      
 }

function autoPlay(){
    if(!autoPlaying){
      autoPlaying = false;
    }else{
       autoPlaying = true;
    }
    autoPlaying = !autoPlaying;
}

function play(){
   jogar();
   autoPlaying = false;
}