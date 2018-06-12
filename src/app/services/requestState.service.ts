import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RequestState } from '../models/RequestState';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class RequestStateService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

}