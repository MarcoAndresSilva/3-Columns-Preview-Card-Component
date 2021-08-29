// estado culumna activa
let activeColumn = 1; //estoy constantemente guardando un registro de en cual indice tengo la clase active

//seleccionar las columnas
const columns = document.querySelectorAll(".column");
console.log(columns);

// escuchar los clicks
columns.forEach((column, index) =>{
  column.addEventListener("click", function(){
    // console.log(column, index);
    columnTogglerStatus(index);
  })
})

// cambiar el estado de las columnas
function columnTogglerStatus(index) {
  columns[activeColumn].classList.remove("active");
  columns[index].classList.add("active");
  activeColumn = index; // para saber que columna tiene la clase active
}
