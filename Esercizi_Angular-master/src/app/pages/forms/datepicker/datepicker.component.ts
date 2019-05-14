import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({

  selector: 'ngx-datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
})

export class DatepickerComponent {

  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
}
}
// export class DatepickerComponent {
//   id_one : string = null
//
//   constructor(private table: Table) {}
//
//   ngOnInit(){
//     return this.table.report(this.id_one).subscribe((res:any)=>{
//       alert("ciao")
//     });
//   }
//   }
// }
