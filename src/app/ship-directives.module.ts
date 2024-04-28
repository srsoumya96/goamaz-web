import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickElseWhereDirective } from './Containers/Directives/click-else-where.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ClickElseWhereDirective,
    ],
    exports: [
        ClickElseWhereDirective,
    ],
})
export class ShipDirectivesModule {}
