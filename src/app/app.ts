import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Menu Viewer');
  protected viewerUrl: SafeResourceUrl;

  // Replace this with your Google Drive file ID
  // To get the file ID: Right-click file in Drive > Share > Copy link
  // The link will be: https://drive.google.com/file/d/FILE_ID_HERE/view
  private readonly driveFileId = 'YOUR_FILE_ID_HERE';

  constructor(private sanitizer: DomSanitizer) {
    // Google Drive embed URL that works for PDFs and images
    const embedUrl = `https://drive.google.com/file/d/${this.driveFileId}/preview`;
    this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
