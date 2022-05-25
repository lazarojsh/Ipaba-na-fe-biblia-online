function buscar() {
    let formb= document.querySelector('input#Busca')
    let dbusc= document.querySelector('div#busc')
    let se= document.querySelector('body#search')
    if(formb.value.length == 0) {
        alert('Busca disponivel em breve!')
    } else {
        //alert('Busca disponivel em breve!')
        dbusc.innerHTML= `${se}`
    }
}
/*function hor() {
    let h1= document.getElementById('horas')
    let h2= new Date()
    h2.getHours
    h2.getMinutes
    h2.getSeconds
    h1.innerHTML+= `${h2}`
}*/
