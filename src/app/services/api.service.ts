import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { map, switchMap, tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

const url = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)
  token = null
  private userSubject: BehaviorSubject<any>
  public user: Observable<any>
  constructor(
    private http: HttpClient,
    private router: Router,
    private platform: Platform
  ) {
    this.loadToken()
    this.userSubject = new BehaviorSubject<any>(null)
    this.user = this.userSubject.asObservable()
  }
  public get userValue(): any { return this.userSubject.value }

  async loadToken() {
    const token = await Storage.get({ key: 'TW_TOKEN' })

    if (token && token.value) {
      this.token = token.value
      this.http.post(`${url}/init`, {}).subscribe((user) => {
        console.log(user);
        this.userSubject.next(user)
        console.log(this.userValue);
        this.isAuthenticated.next(true)
      })
    } else this.isAuthenticated.next(false)
  }

  getByUID(params: any) {
    return this.http.post(`${url}/users/uid`, params)
  }
  login(params: any) {
    return this.http.post(`${url}/login`, params)
    .pipe(
      switchMap((res: { token, user }) => {
        this.token = res.token
        console.log(res.user, res.token);

        this.userSubject.next(res.user)
        return from(Storage.set({key: 'TW_TOKEN', value: res.token}))
      }),
      tap(() => this.isAuthenticated.next(true))
    )
  }
  loginByUID(params: any) {
    return this.http.post(`${url}/login/uid`, params)
    .pipe(
      switchMap((res: { token, user }) => {
        this.token = res.token
        console.log(res.user, res.token);

        this.userSubject.next(res.user)
        return from(Storage.set({key: 'TW_TOKEN', value: res.token}))
      }),
      tap(() => this.isAuthenticated.next(true))
    )
  }
  register(params: any) {
    return this.http.post(`${url}/register`, params)
    .pipe(
      switchMap((res: { token, user }) => {
        this.token = res.token
        console.log(res.user, res.token);

        this.userSubject.next(res.user)
        return from(Storage.set({key: 'TW_TOKEN', value: res.token}))
      }),
      tap(() => this.isAuthenticated.next(true))
    )
  }
  registerByUID(params: any) {
    return this.http.post(`${url}/register/uid`, params)
    .pipe(
      switchMap((res: { token, user }) => {
        this.token = res.token
        console.log(res.user, res.token);

        this.userSubject.next(res.user)
        return from(Storage.set({key: 'TW_TOKEN', value: res.token}))
      }),
      tap(() => this.isAuthenticated.next(true))
    )
  }
  logout() {
    Storage.remove({key: 'TW_TOKEN'})
    return this.http.post(`${url}/logout`, {}).pipe(
      switchMap(_ => {
        this.token = null
        this.userSubject.next(null)
        return from(Storage.remove({key: 'TW_TOKEN'}))
      }),
      tap(() => {
        this.isAuthenticated.next(false)
        this.router.navigateByUrl('/entry', { replaceUrl: true })
      })
    ).subscribe()
  }
  addTipoff(params: any) {
    return this.http.post(`${url}/tipoffs`, params)
  }
  addMedia(params: any) {
    return this.http.post(`${url}/media`, params)
  }
  getTips() {
    console.log(this.userValue.id);

    return this.http.get(`${url}/tipoffs/${this.userValue.id}`)
  }
}
