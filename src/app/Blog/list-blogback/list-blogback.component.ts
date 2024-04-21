import { Component, OnInit } from '@angular/core';
import { Publication } from '../../Models/Blog/publication';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-blogback',
  templateUrl: './list-blogback.component.html',
  styleUrls: ['./list-blogback.component.css']
})
export class ListBlogbackComponent implements OnInit {
  publications: Publication[] = [];
  filteredPublications: Publication[] = [];
  searchInput: string = '';
  sortBy: keyof Publication = 'dateCreation';

  constructor(private blogService: BlogServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPublications();
  }
  fetchPublications(): void {
    this.blogService.getBlogList()
      .subscribe({
        next: (publications) => {
          this.publications = publications;
          console.log('Fetched publications:', this.publications); // Log the fetched publications
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}

