import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { LoginService } from './login.service'

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{

    constructor(private log: LoginService) { }

    intercept(req: any, next: any) {
        const tokenizeReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.log.getToken()}`
            }
        })
        return next.handle(tokenizeReq);
    }
}


