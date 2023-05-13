import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableService } from 'src/app/services/data-table/data-table.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-angular-datatable',
  templateUrl: './angular-datatable.component.html',
  styleUrls: ['./angular-datatable.component.css']
})

export class AngularDatatableComponent implements OnInit, OnDestroy {

  alldata: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: any = DataTableDirective;

  min: any = 0;
  max: any = 0;

  constructor(private service: DataTableService) { }

  ngOnInit(): void {
    this.data();

    $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
          (Number.isNaN(this.min) && id <= this.max) ||
          (this.min <= id && Number.isNaN(this.max)) ||
          (this.min <= id && id <= this.max);
    });
  }

  // for max and min
  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  //Refresh the data as you route in pages
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  //property subscribe is validated by importing observable keyword property in services
  data(): void {
    this.service.data().subscribe((response: any) => {
      this.alldata = response;
      this.dtTrigger.next(this.data);
    });
  }
}
