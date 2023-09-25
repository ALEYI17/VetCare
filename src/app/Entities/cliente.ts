import { Mascota } from "./mascota";

export interface Cliente {
    cedula: string;
    nombre: string;
    corre: string;
    celular: string;
    id: number; 
    misMascotas?: Mascota[]; 
  }
  

  