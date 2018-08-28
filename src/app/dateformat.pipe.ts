import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padidateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let out = value.split("T")
    return out[0];
  }

}
