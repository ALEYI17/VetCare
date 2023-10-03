import { Component ,Input} from '@angular/core';
import { Mascota } from '../../Entities/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascota-find-id',
  templateUrl: './mascota-find-id.component.html',
  styleUrls: ['./mascota-find-id.component.css']
})
export class MascotaFindIdComponent {
  @Input()
  Mascota!:Mascota

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router
    ){}

    ngOnInit():void{
      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get("id"));
        this.MascotaService.findById(id).subscribe(
          mascotaget=>this.Mascota= mascotaget
          )
         
      })
    }
}
