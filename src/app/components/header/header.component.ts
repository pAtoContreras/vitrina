import { Component, OnInit, HostListener, NgModule } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [RouterModule, CommonModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerClass = 'bg-primary text-white';
  isScrolling = false;
  private scrollTimeout: any;


  constructor(private themeService: ThemeService) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = true;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 300); // ajustá si querés que reaparezca más lento o rápido
  }
  ngOnInit() {
    this.themeService.getTheme().subscribe((theme: Theme) => {
      this.headerClass = `${theme.bg_class} ${theme.text_class}`;
    });
  }
}
