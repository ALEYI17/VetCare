import { Tratamiento } from "./tratamiento";

export interface Medicamento {
    id: number;
    Nombre: string;
    Precio: number;
    tratamiento?: Tratamiento; 
  }
  
  
  