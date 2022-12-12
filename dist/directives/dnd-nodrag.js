import { Directive, ElementRef, HostListener } from '@angular/core';
import { DndState, } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "../services";
var DndNoDrag = (function () {
    function DndNoDrag(element, dndState) {
        this.element = element;
        this.dndState = dndState;
        this.draggableString = 'draggable';
        this.dragState = dndState.dragState;
        this.nativeElement = element.nativeElement;
        this.nativeElement.setAttribute(this.draggableString, 'true');
    }
    DndNoDrag.prototype.handleDragStart = function (event) {
        event = event['originalEvent'] || event;
        if (!event['_dndHandle']) {
            if (!(event.dataTransfer.types && event.dataTransfer.types.length)) {
                event.preventDefault();
            }
            event.stopPropagation();
        }
    };
    DndNoDrag.prototype.handleDragEnd = function (event) {
        event = event['originalEvent'] || event;
        if (!event['_dndHandle']) {
            event.stopPropagation();
        }
    };
    DndNoDrag.ɵfac = function DndNoDrag_Factory(t) { return new (t || DndNoDrag)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DndState)); };
    DndNoDrag.ɵdir = i0.ɵɵdefineDirective({ type: DndNoDrag, selectors: [["", "dndNoDrag", ""]], hostBindings: function DndNoDrag_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragstart", function DndNoDrag_dragstart_HostBindingHandler($event) { return ctx.handleDragStart($event); })("dragend", function DndNoDrag_dragend_HostBindingHandler($event) { return ctx.handleDragEnd($event); });
        } } });
    return DndNoDrag;
}());
export { DndNoDrag };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DndNoDrag, [{
        type: Directive,
        args: [{
                selector: '[dndNoDrag]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DndState }]; }, { handleDragStart: [{
            type: HostListener,
            args: ['dragstart', ['$event']]
        }], handleDragEnd: [{
            type: HostListener,
            args: ['dragend', ['$event']]
        }] }); })();
//# sourceMappingURL=dnd-nodrag.js.map