type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number, 
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona 
    = {id: 1, 
        nombre: "Hola mundo", 
        talla: Talla.Mediana,
        direccion: {
            numero: 1,
            calle: "siempreviva",
            pais: "Chanchitolandia"
        }
    };

const arr: Persona[] = []