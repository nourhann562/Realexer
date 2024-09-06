import { Pipe, PipeTransform } from '@angular/core';
import { viewData } from '../athunotcation/intrfaces/all-proud';

@Pipe({
  name: 'serchPipe',
  standalone: true
})
export class SerchPipePipe implements PipeTransform {

  transform(allProud:viewData[] , userWord:string ): viewData[]
   {
    return allProud.filter((item)=> item.title.toLowerCase().includes(userWord.toLowerCase()));
  }

}
