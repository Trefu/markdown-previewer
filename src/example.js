export default function example() {
  return `
 # Bienvenidos a mi previewer!
 ## Este es un subtítulo <h2>!
 ### Y aquí hay algunas otras cosas interesantes:
 Aquí hay un código en una linea ->
 \`<div>let ejemplo = 'test' </div>\`
 entre 2 comillas invertidas. \` \`
 
\`\`\`
// este es un bloque de codigo->

function otroEjemplo (principio, final) {
  if (principio == '\`\`\`' && final == '\`\`\`') {
    return bloqueDeCodigo;
  }
}
\`\`\`

También puede hacer que el texto sea **negrita**
O _italic_.
O  **_ambos_**
Tambien puedes ~~tachar cosas~~.

También hay [enlaces](https://www.freecodecamp.org) e incluso las tablas:

Encabezado 1 | Encabezado 2 | ¿Otro encabezado?
------------ | ------------- | -------------
contenido del 1 | segunda tabla | tercer tabla
aquí. | contenido | Creo que lo conseguimos.

- Y por supuesto que hay listas.
  - Algunos tienen viñetas.
     - Con diferentes niveles de sangría.
        - Eso se parece a esto.

        1. Listas numeradas.
        1. ¡Utilice solo 1 si lo desea!
        1. Y por último, pero no menos importante, no olvidemos las imágenes incrustadas:
        

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
}