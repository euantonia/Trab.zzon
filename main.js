const button = document.getElementById("buttonForm");
button.addEventListener("click", () => {
    let arr = document.querySelectorAll("[data-form]");
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            ans++;
        }
    }
    if(ans){
        alert("Preencha os campos necessários!");
    }
    else{
        alert("Enviado com sucesso!")
    }
})