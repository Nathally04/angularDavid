import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../models/Answer';
import { EditService } from '../services/Edit.service';

@Component({
    selector: 'Edit',
    templateUrl: '../views/edit.html',
    providers: [EditService]
})

export class EditComponent{
    public titulo: string;
    public answer: Answer;

    constructor(
        private editService: EditService,
        private route: ActivatedRoute,
        private router: Router,
    ){
        this.titulo='Editar Solicitud';
        this.answer= new Answer("");
    }

    ngOnInit(){       
        console.log('se ha cargado el componente edit.component.ts') 
    }

    /**onSubmit(){
        console.log(this.vehiculo);
        this._salidasService.patchVehiculo(this.vehiculo).subscribe( 
            response => {
                if (response.code == 200){
                    this._router.navigate(['/paginaPrincipal']);
                }else{
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        )
    }*/
}