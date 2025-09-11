"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Transition;
    }
});
var _array = require("./utilities/array");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Transition = /*#__PURE__*/ function() {
    function Transition(row, column) {
        _class_call_check(this, Transition);
        this.row = row;
        this.column = column;
    }
    _create_class(Transition, [
        {
            key: "getRow",
            value: function getRow() {
                return this.row;
            }
        },
        {
            key: "getColumn",
            value: function getColumn() {
                return this.column;
            }
        }
    ], [
        {
            key: "fromTokensAndVocabulary",
            value: function fromTokensAndVocabulary(tokens, vocabulary) {
                var firstToken = (0, _array.first)(tokens), secondToken = (0, _array.second)(tokens);
                tokens = vocabulary.getTokens();
                var row = tokens.indexOf(firstToken), column = tokens.indexOf(secondToken), transition = new Transition(row, column);
                return transition;
            }
        }
    ]);
    return Transition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbikge1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgZ2V0Um93KCkge1xuICAgIHJldHVybiB0aGlzLnJvdztcbiAgfVxuXG4gIGdldENvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFZvY2FidWxhcnkodG9rZW5zLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgZmlyc3RUb2tlbiA9IGZpcnN0KHRva2VucyksXG4gICAgICAgICAgc2Vjb25kVG9rZW4gPSBzZWNvbmQodG9rZW5zKTtcblxuICAgIHRva2VucyA9IHZvY2FidWxhcnkuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCByb3cgPSB0b2tlbnMuaW5kZXhPZihmaXJzdFRva2VuKSxcbiAgICAgICAgICBjb2x1bW4gPSB0b2tlbnMuaW5kZXhPZihzZWNvbmRUb2tlbiksXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHJvdywgY29sdW1uKTtcblxuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHJhbnNpdGlvbiIsInJvdyIsImNvbHVtbiIsImdldFJvdyIsImdldENvbHVtbiIsImZyb21Ub2tlbnNBbmRWb2NhYnVsYXJ5IiwidG9rZW5zIiwidm9jYWJ1bGFyeSIsImZpcnN0VG9rZW4iLCJmaXJzdCIsInNlY29uZFRva2VuIiwic2Vjb25kIiwiZ2V0VG9rZW5zIiwiaW5kZXhPZiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FCQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsR0FBRyxFQUFFQyxNQUFNO2dDQURKRjtRQUVqQixJQUFJLENBQUNDLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsR0FBRztZQUNqQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLE1BQU0sRUFBRUMsVUFBVTtnQkFDL0MsSUFBTUMsYUFBYUMsSUFBQUEsWUFBSyxFQUFDSCxTQUNuQkksY0FBY0MsSUFBQUEsYUFBTSxFQUFDTDtnQkFFM0JBLFNBQVNDLFdBQVdLLFNBQVM7Z0JBRTdCLElBQU1YLE1BQU1LLE9BQU9PLE9BQU8sQ0FBQ0wsYUFDckJOLFNBQVNJLE9BQU9PLE9BQU8sQ0FBQ0gsY0FDeEJJLGFBQWEsSUF0QkZkLFdBc0JpQkMsS0FBS0M7Z0JBRXZDLE9BQU9ZO1lBQ1Q7OztXQXpCbUJkIn0=