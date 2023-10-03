import { Cliente } from "./cliente";
import { Tratamiento } from "./tratamiento";


// Declara la interfaz Mascota
export interface Mascota {
    Nombre: string;
    Raza: string;
    Edad: number;
    Peso: number;
    Enfermedad: string;
    Foto: string;
    ID: number;
    cliente? :Cliente
    tratamientos? : Tratamiento[]
}
