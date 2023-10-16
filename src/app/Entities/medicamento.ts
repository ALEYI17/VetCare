import { Tratamiento } from "./tratamiento";

export interface Medicamento {
    id: number;
    nombre: string;
    Precio: number;
    tratamiento?: Tratamiento; 
    activo:boolean;
  }
  
  
  