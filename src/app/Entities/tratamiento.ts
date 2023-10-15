import { Mascota } from "./mascota";
import { Medicamento } from "./medicamento";
import { Veterinario } from "./veterinario";

export interface Tratamiento {
    id: number; 
    Fecha: Date;
    precio: number;
    medicamentos?: Medicamento[]; 
    mascota?: Mascota; 
    veterinario?: Veterinario; 
    activo:boolean;
  }
  
  // Asegúrate de definir las interfaces para las entidades Medicamento, Mascota y Veterinario si también las necesitas en tu proyecto.
  