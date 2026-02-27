"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrequencyVector;
    }
});
const _vector = /*#__PURE__*/ _interop_require_wildcard(require("../vector"));
const _random = require("../utilities/random");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
class FrequencyVector extends _vector.default {
    constructor(elements, count){
        super(elements);
        this.count = count;
    }
    getCount() {
        return this.count;
    }
    getLength() {
        const width = this.getWidth(), length = width;
        return length;
    }
    getFrequencies() {
        const elements = this.getElements(), frequencies = elements; ///
        return frequencies;
    }
    getFrequencyAt(index) {
        const element = this.getElementAt(index), frequency = element; ///
        return frequency;
    }
    setFrequencyAt(index, frequency) {
        const element = frequency; ///
        this.setElementAt(index, element);
    }
    getTotalFrequency() {
        const frequencies = this.getFrequencies(), totalFrequency = frequencies.reduce((totalFrequency, frequency)=>{
            totalFrequency += frequency;
            return totalFrequency;
        }, 0);
        return totalFrequency;
    }
    isEmpty() {
        const empty = this.count === 1;
        return empty;
    }
    train(row) {
        const index = row; ///
        let frequency = this.getFrequencyAt(index);
        frequency++;
        this.count++;
        this.setFrequencyAt(index, frequency);
    }
    sample() {
        const length = this.getLength(), frequencies = this.getFrequencies(), totalFrequency = this.getTotalFrequency(), lowerBound = 0, upperBound = totalFrequency, randomAccumulatedFrequency = (0, _random.random)(lowerBound, upperBound);
        let index, accumulatedFrequency = 0;
        for(index = 0; index < length; index++){
            const frequency = frequencies[index];
            accumulatedFrequency += frequency;
            if (randomAccumulatedFrequency < accumulatedFrequency) {
                break;
            }
        }
        return index;
    }
    predict() {
        let column = null;
        const empty = this.isEmpty();
        if (!empty) {
            const index = this.sample();
            column = index; ///
        }
        return column;
    }
    asString() {
        const elements = this.getElements(), elementsString = (0, _vector.elementsAsElementsString)(elements), string = `[ ${this.count}: ${elementsString} ]`;
        return string;
    }
    toJSON() {
        const elements = this.getElements(), count = this.count, json = {
            elements,
            count
        };
        return json;
    }
    static fromSize(size) {
        const count = 1, element = 0, elements = [];
        for(let index = 0; index < size; index++){
            elements.push(element);
        }
        const frequencyVector = new FrequencyVector(elements, count);
        return frequencyVector;
    }
    static fromJSON(json) {
        const { elements, count } = json, frequencyVector = new FrequencyVector(elements, count);
        return frequencyVector;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvZnJlcXVlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yYW5kb21cIjtcbmltcG9ydCB7IGVsZW1lbnRzQXNFbGVtZW50c1N0cmluZyB9IGZyb20gXCIuLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlcXVlbmN5VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIGNvdW50KSB7XG4gICAgc3VwZXIoZWxlbWVudHMpO1xuXG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbGVuZ3RoID0gd2lkdGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmNpZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgZnJlcXVlbmNpZXMgPSBlbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jaWVzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QXQoaW5kZXgpLFxuICAgICAgICAgIGZyZXF1ZW5jeSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBmcmVxdWVuY3k7XG4gIH1cblxuICBzZXRGcmVxdWVuY3lBdChpbmRleCwgZnJlcXVlbmN5KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZyZXF1ZW5jeTsgIC8vL1xuXG4gICAgdGhpcy5zZXRFbGVtZW50QXQoaW5kZXgsIGVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0VG90YWxGcmVxdWVuY3koKSB7XG4gICAgY29uc3QgZnJlcXVlbmNpZXMgPSB0aGlzLmdldEZyZXF1ZW5jaWVzKCksXG4gICAgICAgICAgdG90YWxGcmVxdWVuY3kgPSBmcmVxdWVuY2llcy5yZWR1Y2UoKHRvdGFsRnJlcXVlbmN5LCBmcmVxdWVuY3kpID0+IHtcbiAgICAgICAgICAgIHRvdGFsRnJlcXVlbmN5ICs9IGZyZXF1ZW5jeTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbXB0eSA9ICh0aGlzLmNvdW50ID09PSAxKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHRyYWluKHJvdykge1xuICAgIGNvbnN0IGluZGV4ID0gcm93OyAgLy8vXG5cbiAgICBsZXQgZnJlcXVlbmN5ID0gdGhpcy5nZXRGcmVxdWVuY3lBdChpbmRleCk7XG5cbiAgICBmcmVxdWVuY3krKztcblxuICAgIHRoaXMuY291bnQrKztcblxuICAgIHRoaXMuc2V0RnJlcXVlbmN5QXQoaW5kZXgsIGZyZXF1ZW5jeSk7XG4gIH1cblxuICBzYW1wbGUoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBmcmVxdWVuY2llcyA9IHRoaXMuZ2V0RnJlcXVlbmNpZXMoKSxcbiAgICAgICAgICB0b3RhbEZyZXF1ZW5jeSA9IHRoaXMuZ2V0VG90YWxGcmVxdWVuY3koKSxcbiAgICAgICAgICBsb3dlckJvdW5kID0gMCxcbiAgICAgICAgICB1cHBlckJvdW5kID0gdG90YWxGcmVxdWVuY3ksICAvLy9cbiAgICAgICAgICByYW5kb21BY2N1bXVsYXRlZEZyZXF1ZW5jeSA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgIGxldCBpbmRleCxcbiAgICAgICAgYWNjdW11bGF0ZWRGcmVxdWVuY3kgPSAwO1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBmcmVxdWVuY2llc1tpbmRleF07XG5cbiAgICAgIGFjY3VtdWxhdGVkRnJlcXVlbmN5ICs9IGZyZXF1ZW5jeTtcblxuICAgICAgaWYgKHJhbmRvbUFjY3VtdWxhdGVkRnJlcXVlbmN5IDwgYWNjdW11bGF0ZWRGcmVxdWVuY3kpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcHJlZGljdCgpIHtcbiAgICBsZXQgY29sdW1uID0gbnVsbDtcblxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XG5cbiAgICBpZiAoIWVtcHR5KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2FtcGxlKCk7XG5cbiAgICAgIGNvbHVtbiA9IGluZGV4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHNTdHJpbmcgPSBlbGVtZW50c0FzRWxlbWVudHNTdHJpbmcoZWxlbWVudHMpLFxuICAgICAgICAgIHN0cmluZyA9IGBbICR7dGhpcy5jb3VudH06ICR7ZWxlbWVudHNTdHJpbmd9IF1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBjb3VudCA9IHRoaXMuY291bnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpemUoc2l6ZSkge1xuICAgIGNvbnN0IGNvdW50ID0gMSxcbiAgICAgICAgICBlbGVtZW50ID0gMCxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNpemU7IGluZGV4KyspIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZnJlcXVlbmN5VmVjdG9yID0gbmV3IEZyZXF1ZW5jeVZlY3RvcihlbGVtZW50cywgY291bnQpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBlbGVtZW50cywgY291bnQgfSA9IGpzb24sXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gbmV3IEZyZXF1ZW5jeVZlY3RvcihlbGVtZW50cywgY291bnQpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZyZXF1ZW5jeVZlY3RvciIsIlZlY3RvciIsImVsZW1lbnRzIiwiY291bnQiLCJnZXRDb3VudCIsImdldExlbmd0aCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJsZW5ndGgiLCJnZXRGcmVxdWVuY2llcyIsImdldEVsZW1lbnRzIiwiZnJlcXVlbmNpZXMiLCJnZXRGcmVxdWVuY3lBdCIsImluZGV4IiwiZWxlbWVudCIsImdldEVsZW1lbnRBdCIsImZyZXF1ZW5jeSIsInNldEZyZXF1ZW5jeUF0Iiwic2V0RWxlbWVudEF0IiwiZ2V0VG90YWxGcmVxdWVuY3kiLCJ0b3RhbEZyZXF1ZW5jeSIsInJlZHVjZSIsImlzRW1wdHkiLCJlbXB0eSIsInRyYWluIiwicm93Iiwic2FtcGxlIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJyYW5kb21BY2N1bXVsYXRlZEZyZXF1ZW5jeSIsInJhbmRvbSIsImFjY3VtdWxhdGVkRnJlcXVlbmN5IiwicHJlZGljdCIsImNvbHVtbiIsImFzU3RyaW5nIiwiZWxlbWVudHNTdHJpbmciLCJlbGVtZW50c0FzRWxlbWVudHNTdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbVNpemUiLCJzaXplIiwicHVzaCIsImZyZXF1ZW5jeVZlY3RvciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dFQUxGO3dCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUixNQUFNQSx3QkFBd0JDLGVBQU07SUFDakQsWUFBWUMsUUFBUSxFQUFFQyxLQUFLLENBQUU7UUFDM0IsS0FBSyxDQUFDRDtRQUVOLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFNBQVNGO1FBRWYsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUI7UUFDZixNQUFNUCxXQUFXLElBQUksQ0FBQ1EsV0FBVyxJQUMzQkMsY0FBY1QsVUFBVyxHQUFHO1FBRWxDLE9BQU9TO0lBQ1Q7SUFFQUMsZUFBZUMsS0FBSyxFQUFFO1FBQ3BCLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxZQUFZLENBQUNGLFFBQzVCRyxZQUFZRixTQUFVLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBQyxlQUFlSixLQUFLLEVBQUVHLFNBQVMsRUFBRTtRQUMvQixNQUFNRixVQUFVRSxXQUFZLEdBQUc7UUFFL0IsSUFBSSxDQUFDRSxZQUFZLENBQUNMLE9BQU9DO0lBQzNCO0lBRUFLLG9CQUFvQjtRQUNsQixNQUFNUixjQUFjLElBQUksQ0FBQ0YsY0FBYyxJQUNqQ1csaUJBQWlCVCxZQUFZVSxNQUFNLENBQUMsQ0FBQ0QsZ0JBQWdCSjtZQUNuREksa0JBQWtCSjtZQUVsQixPQUFPSTtRQUNULEdBQUc7UUFFVCxPQUFPQTtJQUNUO0lBRUFFLFVBQVU7UUFDUixNQUFNQyxRQUFTLElBQUksQ0FBQ3BCLEtBQUssS0FBSztRQUU5QixPQUFPb0I7SUFDVDtJQUVBQyxNQUFNQyxHQUFHLEVBQUU7UUFDVCxNQUFNWixRQUFRWSxLQUFNLEdBQUc7UUFFdkIsSUFBSVQsWUFBWSxJQUFJLENBQUNKLGNBQWMsQ0FBQ0M7UUFFcENHO1FBRUEsSUFBSSxDQUFDYixLQUFLO1FBRVYsSUFBSSxDQUFDYyxjQUFjLENBQUNKLE9BQU9HO0lBQzdCO0lBRUFVLFNBQVM7UUFDUCxNQUFNbEIsU0FBUyxJQUFJLENBQUNILFNBQVMsSUFDdkJNLGNBQWMsSUFBSSxDQUFDRixjQUFjLElBQ2pDVyxpQkFBaUIsSUFBSSxDQUFDRCxpQkFBaUIsSUFDdkNRLGFBQWEsR0FDYkMsYUFBYVIsZ0JBQ2JTLDZCQUE2QkMsSUFBQUEsY0FBTSxFQUFDSCxZQUFZQztRQUV0RCxJQUFJZixPQUNBa0IsdUJBQXVCO1FBRTNCLElBQUtsQixRQUFRLEdBQUdBLFFBQVFMLFFBQVFLLFFBQVM7WUFDdkMsTUFBTUcsWUFBWUwsV0FBVyxDQUFDRSxNQUFNO1lBRXBDa0Isd0JBQXdCZjtZQUV4QixJQUFJYSw2QkFBNkJFLHNCQUFzQjtnQkFDckQ7WUFDRjtRQUNGO1FBRUEsT0FBT2xCO0lBQ1Q7SUFFQW1CLFVBQVU7UUFDUixJQUFJQyxTQUFTO1FBRWIsTUFBTVYsUUFBUSxJQUFJLENBQUNELE9BQU87UUFFMUIsSUFBSSxDQUFDQyxPQUFPO1lBQ1YsTUFBTVYsUUFBUSxJQUFJLENBQUNhLE1BQU07WUFFekJPLFNBQVNwQixPQUFPLEdBQUc7UUFDckI7UUFFQSxPQUFPb0I7SUFDVDtJQUVBQyxXQUFXO1FBQ1QsTUFBTWhDLFdBQVcsSUFBSSxDQUFDUSxXQUFXLElBQzNCeUIsaUJBQWlCQyxJQUFBQSxnQ0FBd0IsRUFBQ2xDLFdBQzFDbUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUNsQyxLQUFLLENBQUMsRUFBRSxFQUFFZ0MsZUFBZSxFQUFFLENBQUM7UUFFckQsT0FBT0U7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTXBDLFdBQVcsSUFBSSxDQUFDUSxXQUFXLElBQzNCUCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxFQUNsQm9DLE9BQU87WUFDTHJDO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPb0M7SUFDVDtJQUVBLE9BQU9DLFNBQVNDLElBQUksRUFBRTtRQUNwQixNQUFNdEMsUUFBUSxHQUNSVyxVQUFVLEdBQ1ZaLFdBQVcsRUFBRTtRQUVuQixJQUFLLElBQUlXLFFBQVEsR0FBR0EsUUFBUTRCLE1BQU01QixRQUFTO1lBQ3pDWCxTQUFTd0MsSUFBSSxDQUFDNUI7UUFDaEI7UUFFQSxNQUFNNkIsa0JBQWtCLElBQUkzQyxnQkFBZ0JFLFVBQVVDO1FBRXRELE9BQU93QztJQUNUO0lBRUEsT0FBT0MsU0FBU0wsSUFBSSxFQUFFO1FBQ3BCLE1BQU0sRUFBRXJDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdvQyxNQUN0Qkksa0JBQWtCLElBQUkzQyxnQkFBZ0JFLFVBQVVDO1FBRXRELE9BQU93QztJQUNUO0FBQ0YifQ==