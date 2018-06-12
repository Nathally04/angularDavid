import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Request } from '../models/Request';
import { RequestState } from '../models/RequestState';
import { RequestType } from '../models/RequestType';
import { Attendant } from '../models/Attendant';
import { GLOBAL } from './global';
/*import { Observable } from 'rxjs/Observable';*/

@Injectable()
export class AttendantService {
    public url;

    constructor (public http: Http){
        this.url= GLOBAL.url;
    }

}