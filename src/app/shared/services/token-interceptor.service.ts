import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
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


