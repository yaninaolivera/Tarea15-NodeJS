let urlEndpoint = 'http://localhost:3000/users'

async function traerUsuarios() {
    let respuesta = await fetch(urlEndpoint)
    let data = await respuesta.json()

    data.forEach(index => {
        let html = `
            <tr>
                <td>${index.nombre}</td>
                <td>${index.apellido}</td>
                <td>${index.correo}</td>
            </tr>
        `
        $("#lista").append(html)
    });
}

traerUsuarios()