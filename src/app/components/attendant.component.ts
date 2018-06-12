import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/Request';
import { RequestState } from '../models/RequestState';
import { RequestType } from '../models/RequestType';
import { Attendant } from '../models/Attendant';
import { AttendantService } from '../services/attendant.service';
import { RequestService } from '../services/request.service';
import { RequestTypeService } from '../services/requestType.service';
import { RequestStateService } from '../services/requestState.service';

@Component({
    selector: 'attendant',
    templateUrl: '../views/attendant.html',
    providers: [AttendantService]
})

export class AttendantComponent{
    public title: String;
    public request: Request;
    public requestState: RequestState;
    public requestType: RequestType;
    public attendant: Attendant;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
      /*  private attendantService: AttendantService,
        public requestService: RequestService,
        public requestStateService: RequestStateService,
        public requestTypeService: RequestTypeService*/
    ){
        this.title='Consultar Solicitudes';
    }

    ngOnInit(){       
        console.log('se ha cargado el componente attendant.component.ts')
    }

    /* onSubmit(){
        this.atendantService.getSolicitudes().subscribe(
            result => {
                console.log(result);
            }, 
            error => {
                console.log(<any>error);
            }
        )
        
    }
} */
}