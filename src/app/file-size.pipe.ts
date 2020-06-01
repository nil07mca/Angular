import { Pipe, PipeTransform } from '@angular/core';

import { from } from 'rxjs';
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  bytesToSize(size: number) {
    if (isNaN(size))
      size = 0;
    if (size < 1024)
      return size + ' Bytes';
    size /= 1024;
    if (size < 1024)
      return size.toFixed(2) + ' Kb';
    size /= 1024;
    if (size < 1024)
      return size.toFixed(2) + ' Mb';
    size /= 1024;
    if (size < 1024)
      return size.toFixed(2) + ' Gb';
    size /= 1024;
      return size.toFixed(2) + ' Tb';
  }

  transform(value: any): string {
    return this.bytesToSize(value);
  }
  
}
