import { Component ,Input} from '@angular/core';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascota-find-id',
  templateUrl: './mascota-find-id.component.html',
  styleUrls: ['./mascota-find-id.component.css']
})
export class MascotaFindIdComponent {
  @Input()
  Mascota!:Mascota

  constructor(){}

}
