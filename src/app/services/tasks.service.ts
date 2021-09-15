import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url: string = environment.api_url;

  constructor(private _http: HttpClient) { }

  public obtenerTareas() : Observable<any>{
    //Definir Cabezeras de la peticion AJAX
    let headers = new HttpHeaders();
    headers.append('Access-Control-Request-Headers', '*');
    headers.append('content-type', 'application/json');
    //Armar URL
    let params = this.url;
    //Realizar la peticion AJAX
    return this._http.get(this.url, { headers: headers });
  }

  public eliminarTarea(id) : Observable<any>{
    //Definir Cabezeras de la peticion AJAX
    let headers = new HttpHeaders();
    headers.append('Access-Control-Request-Headers', '*');
    headers.append('content-type', 'application/json');
    //Armar URL
    let params = this.url;
    //Realizar la peticion AJAX
    return this._http.delete(this.url + "/" + id, { headers: headers });
  }

  public actualizarTarea(id,tarea,detalle) : Observable<any>{
    //Definir Cabezeras de la peticion AJAX
    let headers = new HttpHeaders();
    headers.append('Access-Control-Request-Headers', '*');
    headers.append('content-type', 'application/json');
    //Armar URL
    let params = this.url;
    //Realizar la peticion AJAX
    return this._http.put(this.url + "/" + id, {tarea: tarea, descripcion: detalle} , { headers: headers });
  }

  public guardarTarea(tarea) : Observable<any>{
    //Definir Cabezeras de la peticion AJAX
    let headers = new HttpHeaders();
    headers.append('Access-Control-Request-Headers', '*');
    headers.append('content-type', 'application/json');
    //Armar URL
    let params = this.url;
    //Realizar la peticion AJAX
    return this._http.post(this.url, tarea , { headers: headers });
  }
}
