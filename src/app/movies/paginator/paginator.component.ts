import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() length: number;
  @Input() pageIndex: number;

  pageSize: number = 10;
  showPageSizeOptions: boolean = true;
  pageSizeOptions: number[] = [4, 6, 8, 10];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  handlePageChange(e: PageEvent) {
    this.pageChange.emit(e.pageIndex);
    console.log('page: ', e.pageIndex);
    // this.pageSizeChange.emit(pageSize);
  }
}
