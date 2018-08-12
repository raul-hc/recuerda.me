import { Component, NgModule } from '@angular/core';
import { MatIconRegistry } from '../../../node_modules/@angular/material';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  version = '0.1';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favorite',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/favorite-icon.svg'));
  }

}

@NgModule({
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {}
