import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private access_token="";
    private refresh_token="";
    private tokenTimer: any;
    private userId="";
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}

    getAccessToken() {
        return this.access_token;
    }

    getRefreshToken() {
        return this.refresh_token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getUserId() {
        return this.userId;
    }
    

    login(email: string, password: string) {
         const authData: AuthData = {email: email, password: password};
         console.log(authData);
        
        
        if(authData.email == "19tucs157@skct.edu.in"){
            this.router.navigate(['auth/fileupload']);
        }
    }

    
    logout() {
        this.access_token = "";
        this.refresh_token = "";
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.userId = "";
        this.clearAuthData();
        this.router.navigate(['/']);
    }


    private clearAuthData() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userId');
    }

    

}