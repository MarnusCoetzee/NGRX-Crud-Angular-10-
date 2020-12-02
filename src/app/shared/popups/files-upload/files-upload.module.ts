import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from './files-upload.directive';
import { FilesUploadComponent } from './files-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperComponent } from './components/cropper/cropper.component';
import { UploadComponent } from './components/upload/upload.component';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size/file-size.pipe';
@NgModule({
  declarations: [
    FilesUploadDirective,
    FilesUploadComponent,
    CropperComponent,
    UploadComponent,
    DropZoneDirective,
    FileSizePipe,
  ],
  imports: [CommonModule, MatDialogModule, ImageCropperModule],
  exports: [FilesUploadDirective],
})
export class FilesUploadModule {}
