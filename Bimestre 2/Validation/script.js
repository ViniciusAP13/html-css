function autenticar() {
    let usuario = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let form = document.getElementById("formulario");
    if (usuario=== "usuario" && senha=== "123") {
        document.getElementById("mensagem").innerHTML="Usuário autenticado.";
        form.style.backgroundColor = "rgb(0, 255, 0)";
    } else {
        document.getElementById("mensagem").innerHTML="Autenticação inválida.";
        form.style.backgroundColor = "rgb(255, 0, 0)";
    }
}