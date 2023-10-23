import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mascota } from '../../Entities/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {
  
  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  @Input()
  formMascota!: Mascota; 

  isSubmited : boolean = false

  duenoCedula!:number;

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router
    ){}

  ngOnInit():void{
    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get("id"));
      this.MascotaService.findById(id).subscribe(
        mascota => this.formMascota =mascota
      )
      this.MascotaService.findDueno(id).subscribe(
        dueno=> this.duenoCedula = dueno
        
        
      )
    })
    
  }
  updateMascota() {
    this.sendMascota = Object.assign({}, this.formMascota);
    console.log('Mascota added:', this.sendMascota);
    this.addMascotaEvent.emit(this.sendMascota);
    this.MascotaService.updateMascota(this.sendMascota,this.duenoCedula.toString()).subscribe(
      data=>{
        complete:{
          
          this.isSubmited = false
          this.router.navigate(['/mascotas/todas']);
        }
      }
    );
  }

  findById(mascota:Mascota){
    this.formMascota = mascota
  }
  
}
