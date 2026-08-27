function agregarTarea() {

    const input = document.getElementById("tarea");
    const texto = input.value;

    if (texto === "") {
        return;
    }

    const lista = document.getElementById("listaTareas");

    const tarea = document.createElement("li");

    tarea.textContent = texto;

    lista.appendChild(tarea);

    input.value = "";
}
