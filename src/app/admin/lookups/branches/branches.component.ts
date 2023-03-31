import { BaseService } from 'base/services/base.service';
import { AfterContentInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent extends BaseService implements OnInit, AfterContentInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['ID', 'name', 'actions'];
  dataSource: any = [
    { ID: 1, nameAr: 'مدينة نصر', nameEn: 'Nasr city' },
    { ID: 2, nameAr: 'الهرم', nameEn: 'Haram' },
    { ID: 3, nameAr: 'الدقي', nameEn: 'Dokki' },
  ];
  viewType: 'Grid' | 'Card' = 'Grid';
  constructor(
    public override injector: Injector,

  ) {
    super(injector);
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    if (this.viewType === 'Grid' && this.paginator) {
      this.paginator.pageIndex = 0;
      console.log(this.paginator);
      this.paginator.page.pipe(tap(() => {
        console.log(this.paginator.pageIndex);
        console.log(this.paginator.pageSize);
      })).subscribe();
    }
  }

  GetTableType(event: any) {
    console.log(event);
    event.checked = !event.checked;
    if (event.checked)
      this.viewType = 'Grid'
    else
      this.viewType = 'Card'
  }
}
