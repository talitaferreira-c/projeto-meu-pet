function mostrarCuriosidade() {
    let texto = document.getElementById("curiosidade")
    
    if (texto.innerText === ""){
        texto.innerText = "Sptiz Alemão adora brincar e é super inteligente!";
    } else {
        texto.innerText = "";
    }
}