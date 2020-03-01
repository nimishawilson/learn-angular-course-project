import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component"
import { LoadiingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';

@NgModule({
    declarations: [
        AlertComponent,
        LoadiingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadiingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule

    ],
    entryComponents: [
        AlertComponent
      ],
      providers: [LoggingService]
})
export class SharedModule {}