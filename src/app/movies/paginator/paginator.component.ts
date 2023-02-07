import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageIndex: number;
  showPageSizeOptions: boolean = true;
  pageSizeOptions: number[] = [5, 10, 25];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  handlePageChange(e: PageEvent) {
    const pageIndex = e.pageIndex;
    this.pageChange.emit(pageIndex);
  }
}
