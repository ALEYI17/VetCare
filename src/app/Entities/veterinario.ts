import { Tratamiento } from "./tratamiento";

export interface Veterinario {
    cedula: string;
    contrasena: string;
    especialidad: string;
    foto: string;
    numeroDeAtenciones: number;
    id: number; 
    tratamientos?: Tratamiento[]; 
  }
  
  
  