const menuSeleccion = document.getElementById("menuSeleccion");

const div = document.createElement("div");
div.className = "seleccion";
div.innerHTML = `
                
<ul>
<li><h3><a href="catalogoM.html">Catalogo Motocicletas</a></h3></li>
<li><h3><a href="Catalogo_indumentaria.html">Catalogo Indumentaria</a></h3></li>
<li><h3><a href="Noticias.html">Noticias</a></h3></li>
<li><h3><a href="TESTS.html">Tests</a></h3></li></ul>
`;
menuSeleccion.append(div);


class Bibliografia {
    constructor(bibliografia) {
        this.urlImagen = bibliografia.urlImg;
        this.titulo = bibliografia.title;
        this.descripcion = bibliografia.descripcion;
        this.urlDescarga = bibliografia.urlDescarga;
    }
}