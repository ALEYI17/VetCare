import { Cliente } from "./cliente";
import { Tratamiento } from "./tratamiento";


// Declara la interfaz Mascota
export interface Mascota {
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    enfermedad: string;
    foto: string;
    id: number;
    cliente? :Cliente
    tratamientos? : Tratamiento[]
}
