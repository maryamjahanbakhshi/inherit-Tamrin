import { Injectable } from '@angular/core';
import { BaseService } from '../../+security/+base/base-Service';
import { BorowsItem } from './borowspage';

@Injectable({
  providedIn: 'root',
})
export class BorowsService extends BaseService<BorowsItem> {
    override data: BorowsItem[] = [
      { id: 1, titel: 'پدرپولدار', fullName: 'سارا غلامی', Dateborows:'2024/7/10', reternDate:'2024/7/15'},
      { id: 2, titel: 'جرات داشته باش', fullName: 'فرهاد غلامی', Dateborows:'2024/8/10', reternDate:'2024/8/25'},
      { id: 3, titel: 'پدرپولدار', fullName: ' مهسا امیری', Dateborows:'2025/10/10', reternDate:'2025/10/15'},
      
    ]
    override Update(destination: BorowsItem, source: BorowsItem): void {
      destination.id = source.id;
      destination.titel = source.titel;
      destination.fullName = source.fullName;
      destination.Dateborows = source.Dateborows;
      destination.reternDate = source.reternDate;
    }
  
}
