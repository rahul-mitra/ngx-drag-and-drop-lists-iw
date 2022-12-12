import { Directive, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { DndState } from '../services';
import { ALL_EFFECTS, MIME_TYPE, EDGE_MIME_TYPE, MSIE_MIME_TYPE, } from '../index';
import { dropAccepted } from './dnd-list';
import * as i0 from "@angular/core";
import * as i1 from "../services";
var DndDraggable = (function () {
    function DndDraggable(element, dndState) {
        this.element = element;
        this.dndState = dndState;
        this.dndDragStart = new EventEmitter();
        this.dndDragEnd = new EventEmitter();
        this.dndCopied = new EventEmitter();
        this.dndLinked = new EventEmitter();
        this.dndMoved = new EventEmitter();
        this.dndCanceled = new EventEmitter();
        this.dndSelected = new EventEmitter();
        this.draggableString = 'draggable';
        this.dragState = dndState.dragState;
        this.element.nativeElement.setAttribute(this.draggableString, 'true');
        this.element.nativeElement.onselectstart = function () {
            if (this.dragDrop)
                this.dragDrop();
        };
    }
    Object.defineProperty(DndDraggable.prototype, "option", {
        get: function () {
            return this.optionP;
        },
        set: function (v) {
            if (v)
                this.optionP = v;
            else
                this.optionP = { draggable: true };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DndDraggable.prototype, "disableDrag", {
        set: function (disable) {
            if (disable !== undefined) {
                this.element.nativeElement.setAttribute(this.draggableString, (!disable).toString());
            }
        },
        enumerable: false,
        configurable: true
    });
    DndDraggable.prototype.ngOnInit = function () {
        var _this = this;
        this.dropSubscription = dropAccepted.subscribe(function (_a) {
            var item = _a.item, list = _a.list;
            if (JSON.stringify(_this.dndObject) === JSON.stringify(item)) {
                var cb = { copy: 'dndCopied', link: 'dndLinked', move: 'dndMoved', none: 'dndCanceled' };
                if (_this.dragState) {
                    _this[cb[_this.dragState.effectAllowed]].emit();
                }
                _this.dndDragEnd.emit();
            }
        });
    };
    DndDraggable.prototype.ngOnDestroy = function () {
        this.dropSubscription.unsubscribe();
    };
    DndDraggable.prototype.handleDragStart = function (event) {
        var _this = this;
        if (this.element.nativeElement.getAttribute(this.draggableString) === 'false')
            return;
        this.dragState.isDragging = true;
        this.dragState.itemType = this.dndType;
        this.dragState.dropEffect = 'none';
        if (!this.option) {
            this.option = { draggable: true };
        }
        this.dragState.effectAllowed = this.option.effectAllowed || ALL_EFFECTS[0];
        event.dataTransfer.effectAllowed = this.dragState.effectAllowed;
        var mimeType = MIME_TYPE + (this.dragState.itemType ? ('-' + this.dragState.itemType) : '');
        try {
            event.dataTransfer.setData(mimeType, JSON.stringify(this.dndObject));
        }
        catch (e) {
            var data = JSON.stringify({ item: this.dndObject, type: this.dragState.itemType });
            try {
                event.dataTransfer.setData(EDGE_MIME_TYPE, data);
            }
            catch (e) {
                var effectsAllowed = this.dndState.filterEffects(ALL_EFFECTS, this.dragState.effectAllowed);
                event.dataTransfer.effectAllowed = effectsAllowed[0];
                event.dataTransfer.setData(MSIE_MIME_TYPE, data);
            }
        }
        this.element.nativeElement.classList.add('dndDragging');
        setTimeout(function () {
            if (_this.dragState.effectAllowed === 'move') {
                _this.element.nativeElement.style.display = 'none';
            }
        });
        if (event._dndHandle && event.dataTransfer.setDragImage) {
            event.dataTransfer.setDragImage(this.element.nativeElement, 0, 0);
        }
        this.dndDragStart.emit();
        event.stopPropagation();
    };
    DndDraggable.prototype.handleDragEnd = function (event) {
        var _this = this;
        this.dragState.isDragging = false;
        this.element.nativeElement.classList.remove('dndDragging');
        this.element.nativeElement.style.removeProperty('display');
        event.stopPropagation();
        setTimeout((function () { return _this.element.nativeElement.classList.remove('dndDraggingSource'); }), 0);
    };
    DndDraggable.prototype.handleClick = function (event) {
        if (this.element.nativeElement.hasAttribute('dndSelected'))
            return;
        event = event['originalEvent'] || event;
        this.dndSelected.emit();
        event.stopPropagation();
    };
    DndDraggable.prototype.findElementWithAttribute = function (element, attr) {
        if (element.hasAttribute(attr))
            return element;
        if (element.parentElement === null)
            return;
        return this.findElementWithAttribute(element.parentElement, attr);
    };
    DndDraggable.ɵfac = function DndDraggable_Factory(t) { return new (t || DndDraggable)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DndState)); };
    DndDraggable.ɵdir = i0.ɵɵdefineDirective({ type: DndDraggable, selectors: [["", "dndDraggable", ""]], hostBindings: function DndDraggable_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragstart", function DndDraggable_dragstart_HostBindingHandler($event) { return ctx.handleDragStart($event); })("dragend", function DndDraggable_dragend_HostBindingHandler($event) { return ctx.handleDragEnd($event); })("click", function DndDraggable_click_HostBindingHandler($event) { return ctx.handleClick($event); });
        } }, inputs: { option: ["dndDraggable", "option"], dndType: "dndType", dndObject: "dndObject", disableDrag: ["dndDragDisabled", "disableDrag"] }, outputs: { dndDragStart: "dndDragStart", dndDragEnd: "dndDragEnd", dndCopied: "dndCopied", dndLinked: "dndLinked", dndMoved: "dndMoved", dndCanceled: "dndCanceled", dndSelected: "dndSelected" } });
    return DndDraggable;
}());
export { DndDraggable };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DndDraggable, [{
        type: Directive,
        args: [{
                selector: '[dndDraggable]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DndState }]; }, { option: [{
            type: Input,
            args: ['dndDraggable']
        }], dndType: [{
            type: Input,
            args: ['dndType']
        }], dndObject: [{
            type: Input,
            args: ['dndObject']
        }], disableDrag: [{
            type: Input,
            args: ['dndDragDisabled']
        }], dndDragStart: [{
            type: Output,
            args: ['dndDragStart']
        }], dndDragEnd: [{
            type: Output,
            args: ['dndDragEnd']
        }], dndCopied: [{
            type: Output,
            args: ['dndCopied']
        }], dndLinked: [{
            type: Output,
            args: ['dndLinked']
        }], dndMoved: [{
            type: Output,
            args: ['dndMoved']
        }], dndCanceled: [{
            type: Output,
            args: ['dndCanceled']
        }], dndSelected: [{
            type: Output,
            args: ['dndSelected']
        }], handleDragStart: [{
            type: HostListener,
            args: ['dragstart', ['$event']]
        }], handleDragEnd: [{
            type: HostListener,
            args: ['dragend', ['$event']]
        }], handleClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=dnd-draggable.js.map