import Item from "./componentes/Item/Item";

const misProductos= [
    
    {
        id: "1",
        nombre: "Dog chow adutlos razas grandes y medianas 21kg",
        precio: 60000,
        categoria: "perros",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-Ld6wlvaGoFipaSb4_kIZIPfjMEe89uT7w&s"
    },
    {
        id: "2",
        nombre: "Dog chow adultos razas pequeñas y minis 21kg",
        precio: 57000,
        categoria: "perros",
        img: "https://kangoopetfoodar.vtexassets.com/arquivos/ids/155703/dog-chow-perro-adulto-raza-mini-pequena-x-3-kg-01.jpg?v=638317984403170000"
    },
    {
        id: "3",
        nombre: "Cat chow adultos 15kg",
        precio: 67500,
        categoria: "gatos",
        img: "https://acdn-us.mitiendanube.com/stores/830/783/products/cat_chow_carne1-53c0a1b6703fc458e916822816676391-1024-1024.jpg"
    },
    {
        id: "4",
        nombre: "Cat chow gatitos 15kg",
        precio: 69000,
        categoria: "gatos",
        img: "https://catycanar.vtexassets.com/arquivos/ids/160083/18714.jpg?v=637733200168230000"
    },
    {
        id: "5",
        nombre: "Dogui adultos 21kg",
        precio: 36000,
        categoria: "perros",
        img: "https://www.purina.com.ar/sites/default/files/styles/webp/public/2022-11/dogui-adultos-con-carne-pollo-cereales-y-vegetalles.jpg.webp?itok=mI_SO-b6"
    },
    {
        id: "6",
        nombre: "Dogui cachorros 21kg",
        precio: 39000,
        categoria: "perros",
        img: "https://www.purina.com.ar/sites/default/files/styles/webp/public/2022-11/dogui-cachorros-con-carne-pollo-cereales-vegetalles-y-leche.jpg.webp?itok=Xq2JHjx2"
    },
    {
        id: "7",
        nombre: "Pedigree adulto 21kg",
        precio: 57000,
        categoria: "perros",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02WfbLs7qwVU4rvO45bzg2NbFXulPNBeBog&s"
    },
    {
        id: "8",
        nombre: "Pedigree cachorro 21kg",
        precio: 59000,
        categoria: "perros",
        img: "https://www.pedigree.com.ar/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1506/files/2022-10/7797453972529-product-image-1.png"
    },
    {
        id: "9",
        nombre: "Gati 15kg",
        precio: 41000,
        categoria: "gatos",
        img: "https://www.purina.com.ar/sites/default/files/styles/webp/public/2023-01/gati_carne_pollo_a_la_jardinera.png.webp?itok=6Bohb5zo"
    },
    {
        id: "10",
        nombre: "Excellent maintence 21kg",
        precio: 57000,
        categoria: "perros",
        img: "https://www.purina.com.ar/sites/default/files/styles/webp/public/2024-03/Excellent_Perros_AdultMantenimiento.png.webp?itok=-ih86p5V"
    },
    {
        id: "11",
        nombre: "Excellent gato 15kg",
        precio: 87000,
        categoria: "gatos",
        img: "http://kangoopetfoodar.vtexassets.com/arquivos/ids/157786/excellent-gato-adulto-x-1-kg-01.jpg?v=638567350111970000"
    },
    {
        id: "12",
        nombre: "Excellent gatito 15kg",
        precio: 91000,
        categoria: "gatos",
        img: "https://acdn-us.mitiendanube.com/stores/001/426/797/products/purina-excellent-kitten1-6ddd2673d6130aba2616106686132268-640-0.png"
    },
    {
        id: "13",
        nombre: "Comprimido power 2,5 a 5kg",
        precio: 6000,
        categoria: "compriPipetas",
        img: "https://acdn-us.mitiendanube.com/stores/830/783/products/power_comprimidos_11-2f45d091eac10304bb16863224594725-640-0.jpg"
    },
    {
        id: "14",
        nombre: "Comprimido power de 5 a 10",
        precio: 6500,
        categoria: "compriPipetas",
        img: "https://www.crazypet.com.ar/wp-content/uploads/2020/07/3847.jpg"
    },
    {
        id: "15",
        nombre: "Comprimido power de 10 a 20",
        precio: 7200,
        categoria: "compriPipetas",
        img: "https://acdn-us.mitiendanube.com/stores/830/783/products/power_comprimidos_31-c999fd10a4423cfea016863225386011-640-0.jpg"
    },
    {
        id: "16",
        nombre: "Comprimido power de 20 a 30kg",
        precio: 8000,
        categoria: "compriPipetas",
        img: "https://www.crazypet.com.ar/wp-content/uploads/2020/07/3849.jpg"
    },
    {
        id: "17",
        nombre: "Pipeta power 2 a 4kg",
        precio: 3000,
        categoria: "compriPipetas",
        img: "https://catycanar.vtexassets.com/arquivos/ids/161564/7302.jpg?v=637762997706300000"
    },
    {
        id: "18",
        nombre: "Pipeta power 5 a 10kg",
        precio: 3800,
        categoria: "compriPipetas",
        img: "https://acdn-us.mitiendanube.com/stores/068/331/products/pipeta-power-10kg-51cb705e243b71d77817099307794120-1024-1024.jpg"
    },
    {
        id: "19",
        nombre: "Pipeta power 10 a 20",
        precio: 4500,
        categoria: "compriPipetas",
        img: "https://acdn-us.mitiendanube.com/stores/068/331/products/pipeta-power-1120kg-ff544791f3f80632ba17099323693767-640-0.jpg"
    },
    {
        id: "20",
        nombre: "Pipeta power 20 a 30",
        precio: 5000,
        categoria: "compriPipetas",
        img: "https://rodeovet.com.ar/wp-content/uploads/2023/07/power-20-a-40.jpg"
    }
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 1000);
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        const producto = misProductos.find(Item => Item.id === id)
        resolve(producto)
    }, 1000)
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoCategoria = misProductos.filter(Item => Item.categoria === idCategoria)
            resolve(productoCategoria)
        }, 1000);
    })
}
