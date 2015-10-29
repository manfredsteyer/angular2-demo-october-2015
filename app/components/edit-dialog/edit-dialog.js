var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var EditDialog = (function () {
    function EditDialog() {
        this.save = new angular2_1.EventEmitter();
    }
    EditDialog.prototype.innerSave = function () {
        this.save.next(this.data);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], EditDialog.prototype, "title");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], EditDialog.prototype, "data");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], EditDialog.prototype, "save");
    EditDialog = __decorate([
        angular2_2.Component({
            selector: 'edit-dialog'
        }),
        angular2_2.View({
            templateUrl: 'app/components/edit-dialog/edit-dialog.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], EditDialog);
    return EditDialog;
})();
exports.EditDialog = EditDialog;
//# sourceMappingURL=edit-dialog.js.map