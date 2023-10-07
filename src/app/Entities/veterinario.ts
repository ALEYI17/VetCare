import { Tratamiento } from "./tratamiento";

export interface Veterinario {
    cedula: string;
    contrasena: string;
    especialidad: string;
    foto: string;
    nombre : string;
    id: number; 
    tratamientos?: Tratamiento[]; 
  }
  
  
  