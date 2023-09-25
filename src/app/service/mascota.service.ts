import { Injectable } from '@angular/core';
import { Mascota } from '../Entities/mascota';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  listaDeMascotas: Mascota[] = [
    {
        Nombre: 'Quinta',
        Raza: 'Siamese',
        Edad: 14,
        Peso: 5.0,
        Enfermedad: 'Cistitis',
        Foto: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg?quality=75&auto=webp',
        ID: 1,
    },
    {
        Nombre: 'Lolly',
        Raza: 'Persian',
        Edad: 18,
        Peso: 4.9,
        Enfermedad: 'Perionitis',
        Foto: 'https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?resize=1200:*',
        ID: 2,
    },
    {
        Nombre: 'Ranice',
        Raza: 'Lykoi',
        Edad: 10,
        Peso: 4.3,
        Enfermedad: 'Virus de la leucemia felina',
        Foto: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
        ID: 3,
    },
    {
        Nombre: 'Mattheus',
        Raza: 'Siamese',
        Edad: 9,
        Peso: 4.4,
        Enfermedad: 'Virus de la leucemia felina',
        Foto: 'https://assets-jpcust.jwpsrv.com/thumbnails/1lgumtzy-720.jpg',
        ID: 4,
    },
    {
        Nombre: 'Cly',
        Raza: 'Maine Coon',
        Edad: 15,
        Peso: 4.4,
        Enfermedad: 'Cistitis',
        Foto: 'https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?resize=1200:*',
        ID: 5,
    },
    {
        Nombre: 'Olag',
        Raza: 'Siamese',
        Edad: 6,
        Peso: 5.8,
        Enfermedad: 'Virus de la inmunodeficiencia felina',
        Foto: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
        ID: 6,
    },
    {
        Nombre: 'Dix',
        Raza: 'Persian',
        Edad: 15,
        Peso: 5.7,
        Enfermedad: 'Otitis',
        Foto: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
        ID: 7,
    },
    {
        Nombre: 'Gilberto',
        Raza: 'ceilán',
        Edad: 2,
        Peso: 4.5,
        Enfermedad: 'cojo',
        Foto: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
        ID: 8,
    },
    {
        Nombre: 'Derek',
        Raza: 'Lykoi',
        Edad: 17,
        Peso: 3.2,
        Enfermedad: 'Conjuntivitis',
        Foto: 'https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?resize=1200:*',
        ID: 9,
    },
    {
        Nombre: 'Cassandra',
        Raza: 'Lykoi',
        Edad: 19,
        Peso: 4.0,
        Enfermedad: 'cojo',
        Foto: 'https://assets-jpcust.jwpsrv.com/thumbnails/1lgumtzy-720.jpg',
        ID: 10,
    },
];

  findAll(){
    return this.listaDeMascotas;
  }

  findById(id: number): Mascota {
    const mascota = this.listaDeMascotas.find(o => o.ID === id)!;
    return mascota;
  }

  eliminarMascota(mascota:Mascota){
    var index = this.listaDeMascotas.indexOf(mascota)
    this.listaDeMascotas.splice(index,1)
  }
  
}
