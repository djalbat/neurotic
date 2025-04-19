"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Matrix;
    }
});
var _random = require("./utilities/random");
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
var Matrix = /*#__PURE__*/ function() {
    function Matrix(width, height, elements) {
        _class_call_check(this, Matrix);
        this.width = width;
        this.height = height;
        this.elements = elements;
    }
    _create_class(Matrix, [
        {
            key: "getWidth",
            value: function getWidth() {
                return this.width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.height;
            }
        },
        {
            key: "getElements",
            value: function getElements() {
                return this.elements;
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.width = size; ///
                this.height = size; ///
                this.elements = [];
                var cardinality = this.width * this.height, lowerBound = -1, upperBound = +1;
                for(var count = 0; count < cardinality; count++){
                    var element = (0, _random.random)(lowerBound, upperBound);
                    this.elements.push(element);
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var width = this.width, height = this.height, elements = this.elements, json = {
                    width: width,
                    height: height,
                    elements: elements
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var width = json.width, height = json.height, elements = json.elements, matrix = new Matrix(width, height, elements);
                return matrix;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var width = null, height = null, elements = null, matrix = new Matrix(width, height, elements);
                return matrix;
            }
        }
    ]);
    return Matrix;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3V0aWxpdGllcy9yYW5kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZWxlbWVudHMpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLndpZHRoID0gc2l6ZTsgIC8vL1xuICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZTsgLy8vXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgY2FyZGluYWxpdHkgPSB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgbG93ZXJCb3VuZCA9IC0xLFxuICAgICAgICAgIHVwcGVyQm91bmQgPSArMTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBjYXJkaW5hbGl0eTsgY291bnQrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQsXG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGVsZW1lbnRzIH0gPSBqc29uLCAgLy9cbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHdpZHRoLCBoZWlnaHQsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBudWxsLFxuICAgICAgICAgIGhlaWdodCA9IG51bGwsXG4gICAgICAgICAgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgod2lkdGgsIGhlaWdodCwgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hdHJpeCIsIndpZHRoIiwiaGVpZ2h0IiwiZWxlbWVudHMiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImdldEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsInNpemUiLCJjYXJkaW5hbGl0eSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwiY291bnQiLCJlbGVtZW50IiwicmFuZG9tIiwicHVzaCIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1hdHJpeCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQURoQkg7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJLENBQUNQLEtBQUssR0FBR08sTUFBTyxHQUFHO2dCQUN2QixJQUFJLENBQUNOLE1BQU0sR0FBR00sTUFBTSxHQUFHO2dCQUN2QixJQUFJLENBQUNMLFFBQVEsR0FBRyxFQUFFO2dCQUVsQixJQUFNTSxjQUFjLElBQUksQ0FBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUN0Q1EsYUFBYSxDQUFDLEdBQ2RDLGFBQWEsQ0FBQztnQkFFcEIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFILGFBQWFHLFFBQVM7b0JBQ2hELElBQU1DLFVBQVVDLElBQUFBLGNBQU0sRUFBQ0osWUFBWUM7b0JBRW5DLElBQUksQ0FBQ1IsUUFBUSxDQUFDWSxJQUFJLENBQUNGO2dCQUNyQjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1mLFFBQVEsSUFBSSxDQUFDQSxLQUFLLEVBQ2xCQyxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQkMsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJjLE9BQU87b0JBQ0xoQixPQUFBQTtvQkFDQUMsUUFBQUE7b0JBQ0FDLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBUWhCLFFBQTRCZ0IsS0FBNUJoQixPQUFPQyxTQUFxQmUsS0FBckJmLFFBQVFDLFdBQWFjLEtBQWJkLFVBQ2pCZ0IsU0FBUyxJQWxERW5CLE9Ba0RTQyxPQUFPQyxRQUFRQztnQkFFekMsT0FBT2dCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNbkIsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFdBQVcsTUFDWGdCLFNBQVMsSUEzREVuQixPQTJEU0MsT0FBT0MsUUFBUUM7Z0JBRXpDLE9BQU9nQjtZQUNUOzs7V0E5RG1CbkIifQ==