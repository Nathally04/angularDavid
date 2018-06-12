import { Component } from '@angular/core'

@Component({
    selector: 'HomePage',
    templateUrl: '../views/homePage.html'
})

export class HomePageComponent{
    public titulo: string;

    constructor(){
        this.titulo='Pagina Principal';
    }

    ngOnInit(){       
        console.log('se ha cargado el componente homePage.component.ts')
    }
}