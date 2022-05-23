const formExemplo = document.querySelector("#form-exemplo")
const termsContact = document.querySelector("#checado")

/*/Mostrar tds os formularios
const form2 = document.forms

console.log(form2)
console.log(typeof form2)
*/
const isEmpty = form =>{
    let state = false
    for(let field in form){
        //console.log(input)
        if (field instanceof HTMLButtonElement) continue
        if(!field.value){
            return true
        }
    }
    return false
}

const isAccepted =()=>{
    //console.log(termsContact.checked)
    return termsContact.checked === "checked"
}

const disableButtonSubmit = () =>{
    //console.log(isAccepted)
    if(isEmpty(formExemplo) && !isAccepted()){
        //console.log(formExemplo)
        document.querySelector("#btn-enviar").classList.add("disabled")
    }else{
        document.querySelector("#btn-enviar").classList.remove("disabled")
    }
}
//validação de envio
formExemplo.addEventListener("submit", evento =>{
    if(isEmpty(formExemplo) || !isAccepted){
        evento.preventDefault()
    }
})

formExemplo.addEventListener("change", disableButtonSubmit)
termsContact.addEventListener("change", isAccepted)

disableButtonSubmit()