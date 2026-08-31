import {Component, computed, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.sass',
})
export class Header {
  private router = inject(Router);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects)
    ),
    { initialValue: '/' }
  );

  gradientTransform = computed(() => {
    const url = this.currentUrl();
    if (url.includes('/projets')) return 'translateX(10vw)';
    if (url.includes('/contact')) return 'translateX(20vw)';
    return  'translateX(0)';
  })
}
