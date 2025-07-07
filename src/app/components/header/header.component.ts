import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [RouterModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerClass = 'bg-primary text-white';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getTheme().subscribe((theme: Theme) => {
      this.headerClass = `${theme.bg_class} ${theme.text_class}`;
    });
  }
}
