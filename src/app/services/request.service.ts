import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Request } from '../models/Request';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class RequestService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

}