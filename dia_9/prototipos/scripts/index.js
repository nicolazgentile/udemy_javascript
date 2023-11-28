function Libro(autor, titulo, cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let libro1 = new Libro("Isac", "el fin del ocaso", 2);
let libro2 = Object.create(libro1);