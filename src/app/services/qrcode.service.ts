import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {
  private apiUrl = 'http://localhost:2003/generate-qr';

  constructor(
    private http: HttpClient
  ) {}

  generateQrCode(text: string): Observable<{ qrCodeImage: string }> {
    return this.http.post<{ qrCodeImage: string }>(this.apiUrl, { text });
  }
}
