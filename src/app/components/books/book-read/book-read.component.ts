import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  books: Book[];
  displayedColumns = ['details','title', 'isbn', 'quantityInStock', 'authorName', 'price', 'categories', 'action' ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.read().subscribe(books =>{
      this.books = books;
    })
  }

}
