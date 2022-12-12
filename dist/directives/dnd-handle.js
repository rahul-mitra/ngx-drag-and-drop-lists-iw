import { Directive, ElementRef, HostListener } from '@angular/core';
import { DndState, } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "../services";
var DndHandle = (function () {
    function DndHandle(element, dndState) {
        this.element = element;
        this.dndState = dndState;
        this.draggableString = 'draggable';
        this.dragState = dndState.dragState;
        this.nativeElement = element.nativeElement;
        this.nativeElement.setAttribute(this.draggableString, 'true');
    }
    DndHandle.prototype.handleDragStart = function (event) {
        event = event['originalEvent'] || event;
        event['_dndHandle'] = true;
    };
    DndHandle.prototype.handleDragEnd = function (event) {
        event = event['originalEvent'] || event;
        if (!event['_dndHandle']) {
            event.stopPropagation();
        }
    };
    DndHandle.ɵfac = function DndHandle_Factory(t) { return new (t || DndHandle)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DndState)); };
    DndHandle.ɵdir = i0.ɵɵdefineDirective({ type: DndHandle, selectors: [["", "dndHandle", ""]], hostBindings: function DndHandle_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragstart", function DndHandle_dragstart_HostBindingHandler($event) { return ctx.handleDragStart($event); })("dragend", function DndHandle_dragend_HostBindingHandler($event) { return ctx.handleDragEnd($event); });
        } } });
    return DndHandle;
}());
export { DndHandle };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DndHandle, [{
        type: Directive,
        args: [{
                selector: '[dndHandle]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DndState }]; }, { handleDragStart: [{
            type: HostListener,
            args: ['dragstart', ['$event']]
        }], handleDragEnd: [{
            type: HostListener,
            args: ['dragend', ['$event']]
        }] }); })();
//# sourceMappingURL=dnd-handle.js.map