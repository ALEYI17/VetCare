import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

constructor(private veterinarioServicio:VeterinarioServiceService){}

    veterinarios!:Veterinario[];

  ngOnInit() {
    let arbolderecho: HTMLElement | null = document.getElementById("hola4");
    let arbolizquierdo: HTMLElement | null = document.getElementById("hola3");
    
    let text: HTMLElement | null = document.getElementById("text");
    
    let para: HTMLCollectionOf<Element> = document.getElementsByClassName("Paralax");
    
    //mover los arboles mientras scroll
    window.addEventListener("scroll", () => {
        let value: number = window.scrollY;
        
        if (text) {
            text.style.marginTop = value * 2.5 + 'px';
        }
    
        if (arbolderecho) {
            arbolderecho.style.left = value * 1.5 + 'px';
        }
    
        if (arbolizquierdo) {
            arbolizquierdo.style.left = value * -1.5 + 'px';
        }
    });
    
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements: Element[] = Array.from(document.querySelectorAll('.hidden'));
    hiddenElements.forEach((el) => observer.observe(el));
    
    const productContainer: HTMLElement[] = Array.from(document.querySelectorAll('.product-container'));
    const nxtBtn: HTMLElement[] = Array.from(document.querySelectorAll('.nest-button'));
    const preBtn: HTMLElement[] = Array.from(document.querySelectorAll('.pre-button'));
    
    productContainer.forEach((item: HTMLElement, i: number) => {
        let containerDimensions: DOMRect = item.getBoundingClientRect();
        let containerWidth: number = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth / 2;
        });
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth / 2;
        });
    });

    //cargar veterinario de carousel
    this.veterinarioServicio.findAll().subscribe(
        veterinarios=> this.veterinarios = veterinarios
    )
    
  }

}
