"use strict";
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
import Transition from "./transition";
var Chunk = /*#__PURE__*/ function() {
    function Chunk(tokens) {
        _class_call_check(this, Chunk);
        this.tokens = tokens;
    }
    _create_class(Chunk, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "forEachToken",
            value: function forEachToken(callback) {
                this.tokens.forEach(callback);
            }
        },
        {
            key: "forEachTransition",
            value: function forEachTransition(vocabulary, callback) {
                var tokensLength = this.tokens.length, transitionsLength = tokensLength - 1;
                for(var index = 0; index < transitionsLength; index++){
                    var start = index, end = index + 2, tokens = this.tokens.slice(start, end), transition = Transition.fromTokensAndVocabulary(tokens, vocabulary);
                    callback(transition);
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var tokens = this.tokens, json = {
                    tokens: tokens
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var tokens = json, chunk = new Chunk(tokens);
                return chunk;
            }
        }
    ]);
    return Chunk;
}();
export { Chunk as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaHVuay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHVuayB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGZvckVhY2hUb2tlbihjYWxsYmFjaykgeyB0aGlzLnRva2Vucy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hUcmFuc2l0aW9uKHZvY2FidWxhcnksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHRyYW5zaXRpb25zTGVuZ3RoID0gdG9rZW5zTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0cmFuc2l0aW9uc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyAyLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gVHJhbnNpdGlvbi5mcm9tVG9rZW5zQW5kVm9jYWJ1bGFyeSh0b2tlbnMsIHZvY2FidWxhcnkpO1xuXG4gICAgICBjYWxsYmFjayh0cmFuc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgdG9rZW5zID0ganNvbiwgIC8vXG4gICAgICAgICAgY2h1bmsgPSBuZXcgQ2h1bmsodG9rZW5zKTtcblxuICAgIHJldHVybiBjaHVuaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRyYW5zaXRpb24iLCJDaHVuayIsInRva2VucyIsImdldFRva2VucyIsImZvckVhY2hUb2tlbiIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hUcmFuc2l0aW9uIiwidm9jYWJ1bGFyeSIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInRyYW5zaXRpb25zTGVuZ3RoIiwiaW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwidHJhbnNpdGlvbiIsImZyb21Ub2tlbnNBbmRWb2NhYnVsYXJ5IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY2h1bmsiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLGdCQUFnQixlQUFlO0FBRXZCLElBQUEsQUFBTUMsc0JBQU47YUFBTUEsTUFDUEMsTUFBTTtnQ0FEQ0Q7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFGR0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsUUFBUTtnQkFBSSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDRDtZQUFXOzs7WUFFeERFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFVBQVUsRUFBRUgsUUFBUTtnQkFDcEMsSUFBTUksZUFBZSxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsTUFBTSxFQUNqQ0Msb0JBQW9CRixlQUFlO2dCQUV6QyxJQUFLLElBQUlHLFFBQVEsR0FBR0EsUUFBUUQsbUJBQW1CQyxRQUFTO29CQUN0RCxJQUFNQyxRQUFRRCxPQUNSRSxNQUFNRixRQUFRLEdBQ2RWLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNhLEtBQUssQ0FBQ0YsT0FBT0MsTUFDbENFLGFBQWFoQixXQUFXaUIsdUJBQXVCLENBQUNmLFFBQVFNO29CQUU5REgsU0FBU1c7Z0JBQ1g7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJpQixPQUFPO29CQUNMakIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTWpCLFNBQVNpQixNQUNURSxRQUFRLElBcENHcEIsTUFvQ09DO2dCQUV4QixPQUFPbUI7WUFDVDs7O1dBdkNtQnBCOztBQUFyQixTQUFxQkEsbUJBd0NwQiJ9