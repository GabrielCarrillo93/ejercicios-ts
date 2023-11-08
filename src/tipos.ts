/**
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
 * any - NO USAR
 * unknown
 * never
 * arrays
 * tuplas
 * enums
 * 
 * tipos inferidos
 * 
 */

console.log(typeof []); //object

let extincionDinos: number = 76_000_000;
let dinoFavorito: string = "T-Rex";
let extintos = true; //tipado inferido

function chachitoFeliz(config: any){
    return config
}

let animales: string[] = ["chanchito", "feliz", "felipe"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) autocompletado sugiere metodos del tipo de dato

let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]]

const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }

let variable1 = Talla.Grande

const enum LoadingState { Idle, Loadig, Success, Error }

const estado = LoadingState.Success