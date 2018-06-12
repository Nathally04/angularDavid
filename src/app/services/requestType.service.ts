import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RequestType } from '../models/RequestType';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class RequestTypeService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

}