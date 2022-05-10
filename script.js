function tabuada(){
   let num = document.getElementById('txtn')
   let tab = document.getElementById('seltab')

   if(num.value.length == 0){
    alert('Por favor, Digite um numero!')
   
    }
    else{
        let n = Number(num.value)

        tab.innerHTML = ' '
    

    for(i = 0; i <= 10; i++){
        let res = n * i
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${res} `
        item.value = `tab${i}`
        tab.appendChild(item)
        
        }
    }




}