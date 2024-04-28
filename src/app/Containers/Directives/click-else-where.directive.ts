import {
    Directive,
    EventEmitter,
    ElementRef,
    HostListener,
    Output,
} from '@angular/core';

@Directive({ selector: '[clickElseWhere]' })
export class ClickElseWhereDirective {
    @Output()
    clickElseWhere = new EventEmitter<MouseEvent>();

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const targetElement = event.target as HTMLElement;
        // Check if the click was outside the element
        if (
            targetElement &&
            !this.elementRef.nativeElement.contains(targetElement)
        ) {
            this.clickElseWhere.emit(event);
        }
    }
}
