import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/Request';
import { RequestState } from '../models/RequestState';
import { RequestType } from '../models/RequestType';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';

@Component ({
    selector: 'customer',
    templateUrl: '../views/customer.html',
    providers: [CustomerService]
})

export class  CustomerComponent {
    public title: String;
    public request: Request;
    public requestState: RequestState;
    public requestType: RequestType;
    public customer: Customer;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        /*private usuarioService: UsuarioSerice;*/
    ){
        this.title='Crear Solicitud';
        this.request = new Request( '');
        this.requestState = new RequestState( '');
        this.requestType = new RequestType( '');
        this.customer= new Customer('','', '', '', '', '');
    }

    ngOnInit(){
        console.log('se ha cargado el componente customer.component.ts')
    }

    onSubmit(){
        console.log(this.customer);
        /*this.customerService.addRequest(this.vehiculo).subscribe( 
            response => {
                if (response.code == 200){
                    this.router.navigate(['/homepage']);
                }else{
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        )*/
    }
}