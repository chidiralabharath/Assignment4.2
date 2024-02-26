import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addPlayer(playerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, playerData);
  }

  updatePlayer(id: string, playerData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, playerData);
  }

  deletePlayer(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getAllPlayers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPlayerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Perform query to find players by nationality
  findPlayersByNationality(nationality: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/query/nationality`, { nationality });
  }

  // Perform query to find players by age range
  findPlayersByAgeRange(minAge: number, maxAge: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/query/age`, { minAge, maxAge });
  }

  // Perform query to find players by total stats range
  findPlayersByTotalStats(minTotalStats: number, maxTotalStats: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/query/totalStats`, { minTotalStats, maxTotalStats });
  }

  // Implement other queries as needed
}
