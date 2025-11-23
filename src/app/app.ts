import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly driveFileId = '13fwT5XhDajOqdAsO_kCt7BpOQpwr81ha';
  private readonly embedUrl =`https://drive.google.com/file/d/${this.driveFileId}/preview`;
  protected viewerUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
}
