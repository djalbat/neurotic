"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    registryAssigned: function() {
        return registryAssigned;
    }
});
var registry = {};
function registryAssigned(Class) {
    var name = Class.name;
    registry[name] = Class;
    return Class;
}
var _default = registry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3RyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcmVnaXN0cnkgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdHJ5QXNzaWduZWQoQ2xhc3MpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSBDbGFzcztcblxuICByZWdpc3RyeVtuYW1lXSA9IENsYXNzO1xuXG4gIHJldHVybiBDbGFzcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsInJlZ2lzdHJ5IiwiQ2xhc3MiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQUF3QjtlQUF4Qjs7SUFSZ0JBLGdCQUFnQjtlQUFoQkE7OztBQUZoQixJQUFNQyxXQUFXLENBQUM7QUFFWCxTQUFTRCxpQkFBaUJFLEtBQUs7SUFDcEMsSUFBTSxBQUFFQyxPQUFTRCxNQUFUQztJQUVSRixRQUFRLENBQUNFLEtBQUssR0FBR0Q7SUFFakIsT0FBT0E7QUFDVDtJQUVBLFdBQWVEIn0=