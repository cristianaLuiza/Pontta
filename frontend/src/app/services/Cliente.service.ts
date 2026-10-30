import { Injectable } from '@angular/core';
import { ClienteDto } from '../dto/Cliente.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
private apiUrl = 'http://localhost:8080/cliente';

constructor(
 private http:HttpClient
){}

criarCliente(cliente: ClienteDto): Observable<ClienteDto>{
  return this.http.post<ClienteDto>(this.apiUrl,cliente)
}

listarCliente():Observable<ClienteDto[]>{
  return this.http.get<ClienteDto[]>(this.apiUrl)
}

atualizarCliente(cliente: ClienteDto, id: number){
  
  return this.http.put(`${this.apiUrl}/${id}`, cliente)
}

deletarCliente(id:number):Observable<void>{
 return this.http.delete<void>(`${this.apiUrl}/${id}`)
}

}
