import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})

export class PaginationComponent implements OnInit {
  private pagerTotalItems: number;
  private pagerPageSize: number;

  totalPages: number;
  pages: string[] = [];
  currentPage = 1;
  isVisible = false;
  previousEnabled = false;
  nextEnabled = true;

  @Input() get pageSize(): number {
    return this.pagerPageSize;
  }

  set pageSize(size: number) {
    this.pagerPageSize = size;
    this.update();
  }

  @Input() get totalItems(): number {
    return this.pagerTotalItems;
  }

  set totalItems(itemCount: number) {
    this.pagerTotalItems = itemCount;
    this.update();
  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  update() {
    if (this.pagerTotalItems && this.pagerPageSize) {
      this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
    let current = this.currentPage,
      last = this.totalPages,
      delta = 2,
      left = current - delta + 1,
      right = current + delta + 2,
      range = [],
      rangeWithDots = [],
    l
  
    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) range.push(i)
    }
  
    for (let i = 0; i < range.length; i++) {
      if (l) {
        if (range[i] - l === 2) rangeWithDots.push(l + 1)
        else if (range[i] - l !== 1) rangeWithDots.push('...')
      }
  
      rangeWithDots.push(range[i])
      l = range[i]
    }
  
     this.pages = rangeWithDots



      this.isVisible = true;
      return;
    }
    this.isVisible = false;
  }

  previousNext(direction: number, event?: MouseEvent) {
    let page: number = this.currentPage;
    if (direction === -1) {
        if (page > 1) {
            page--;
        }
    } else {
        if (page < this.totalPages) {
            page++;
        }
    }
    this.changePage(page, event);
  }



  changePage(page: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (this.currentPage === page) { return; }
    window.scrollTo(0,350);
    this.currentPage = page;
    this.update();
    this.previousEnabled = this.currentPage > 1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
  }

}