function listaDeCompras() {
    const categorias = {
        frutas: [],
        lacteos:[],
        verduras:[],
        almacen:[],
        otros:[]
    };
    let agregarAlimento = true;
    while (agregarAlimento) {
        const respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)").toLowerCase();
        if (respuesta === 'si') {
            const alimento = prompt("¿Qué alimento deseas agregar?");
            const categoria = prompt("¿En qué categoria se encaja ese alimento? (frutas, lácteos, verduras, almacen, otros)").toLowerCase();
            if (categorias[categoria] !== undefined) {
                categorias[categoria].push(alimento);
            } else {
                console.log("Categoría no válida, el alimento se añadirá a 'otros'.");
                categorias.otros.push(alimento);
            }
        } else if (respuesta === 'no') {
            agregarAlimento = false;
        } else {
            console.log("Por favor, responde con 'sí' o 'no'.");
        }
    }
    console.log("Lista de compras:");
    for (const [categoria, alimentos] of Object.entries(categorias)) {
        if (alimentos.length > 0) {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${alimentos.join(', ')}`);
        }
    }
    }
listaDeCompras();
