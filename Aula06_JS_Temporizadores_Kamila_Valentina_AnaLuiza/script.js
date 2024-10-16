
// function acao(){
//    document.write("executando....<br/>");
// }

//temporizador
//setInterval(acao,2000);
    
//temporizador mais utilizado na programação
// setInterval(()=>{
    //document.write("executando através de arrow function.....<br/>")
//},1000);

//clearInterval(timer);

// var timer = setInterval(()=>{
   // document.write("executando através de arrow function.....<br/>")
//},1000);

function acao2(){
    document.write("Executando com o setTimeout!<br/>");
}

setTimeout(acao2,3000);

setTimeout(()=>{
    document.write("Executando com Arrow function!")
},4000);