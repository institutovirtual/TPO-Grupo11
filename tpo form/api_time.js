const apiUrl = "http://worldtimeapi.org/api/ip"

async function obtenerfechahora(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    let fechahora = data.datetime.split('.');
    let fechayhora = fechahora[0].split('T')
    
    document.getElementById("fecha").innerHTML = fechayhora[0]
    document.getElementById("hora").innerHTML = fechayhora[1]
}

obtenerfechahora()