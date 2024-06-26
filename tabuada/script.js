function gerar(){
    let num = document.querySelector("input#tnum")
    let Tab = document.querySelector("select#tTab")

    if(num.value.lenght == 0 ){
        alert("Digite um número")
    }else{
        let n = Number(num.value)
        let c = 1
        Tab.innerHTML = ""
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} X ${c} =  ${n*c}`
            item.value = `tTab${c}`
            Tab.appendChild(item)
            c++
        }
        
    }
}
