import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Request } from '../models/Request';
import { RequestState } from '../models/RequestState';
import { RequestType } from '../models/RequestType';
import { Customer } from '../models/Customer';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class CustomerService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

    
}