import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VetCare';
  //myScriptElement:HTMLScriptElement;

  constructor() {
    // this.myScriptElement = document.createElement("script")
    // this.myScriptElement.defer = true
    // this.myScriptElement.src= "assets/scripts/script.js"
    
    // document.body.appendChild(this.myScriptElement)
  }

}
