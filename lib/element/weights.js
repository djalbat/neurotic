"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Weights;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _frequency = /*#__PURE__*/ _interop_require_default(require("../vector/frequency"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Weights extends _element.default {
    constructor(frequencyVectors){
        super();
        this.frequencyVectors = frequencyVectors;
    }
    getFrequencyVectors() {
        return this.frequencyVectors;
    }
    getFrequencyVectorAtRow(row) {
        const index = row, frequencyVector = this.frequencyVectors[index];
        return frequencyVector;
    }
    train(transition) {
        const row = transition.getRow(), column = transition.getColumn(), frequencyVector = this.getFrequencyVectorAtRow(row);
        frequencyVector.train(column);
    }
    forward(row) {
        const frequencyVector = this.getFrequencyVectorAtRow(row), column = frequencyVector.predict();
        return column;
    }
    getCountAtRow(row) {
        const index = row, element = this.vector.getElementAt(index), count = element; ///
        return count;
    }
    setCountAtRow(row, count) {
        const index = row, element = count; ///
        this.vector.setElementAt(index, element);
    }
    initialise(size) {
        this.frequencyVectors = [];
        for(let index = 0; index < size; index++){
            const frequencyVector = _frequency.default.fromSize(size);
            this.frequencyVectors.push(frequencyVector);
        }
    }
    toJSON() {
        const matrixJSON = this.matrix.toJSON(), matrix = matrixJSON, json = {
            matrix
        };
        return json;
    }
    static fromJJSON(json) {
        const frequencyVectors = frequencyVectorsFromJSON(json), weights = new Weights(frequencyVectors);
        return weights;
    }
    static fromNothing() {
        const properties = {}, frequencyVectors = null, weights = _element.default.fromProperties(Weights, properties, frequencyVectors);
        return weights;
    }
    static fromProperties(properties, ...remainingArguments) {
        const frequencyVectors = null, weights = _element.default.fromProperties(Weights, properties, frequencyVectors, ...remainingArguments);
        return weights;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgRnJlcXVlbmN5VmVjdG9yIGZyb20gXCIuLi92ZWN0b3IvZnJlcXVlbmN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZnJlcXVlbmN5VmVjdG9ycykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZyZXF1ZW5jeVZlY3RvcnMgPSBmcmVxdWVuY3lWZWN0b3JzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5VmVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmVxdWVuY3lWZWN0b3JzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3cocm93KSB7XG4gICAgY29uc3QgaW5kZXggPSByb3csICAvLy9cbiAgICAgICAgICBmcmVxdWVuY3lWZWN0b3IgPSB0aGlzLmZyZXF1ZW5jeVZlY3RvcnNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxuXG4gIHRyYWluKHRyYW5zaXRpb24pIHtcbiAgICBjb25zdCByb3cgPSB0cmFuc2l0aW9uLmdldFJvdygpLFxuICAgICAgICAgIGNvbHVtbiA9IHRyYW5zaXRpb24uZ2V0Q29sdW1uKCksXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gdGhpcy5nZXRGcmVxdWVuY3lWZWN0b3JBdFJvdyhyb3cpO1xuXG4gICAgZnJlcXVlbmN5VmVjdG9yLnRyYWluKGNvbHVtbik7XG4gIH1cblxuICBmb3J3YXJkKHJvdykge1xuICAgIGNvbnN0IGZyZXF1ZW5jeVZlY3RvciA9IHRoaXMuZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3cocm93KSxcbiAgICAgICAgICBjb2x1bW4gPSBmcmVxdWVuY3lWZWN0b3IucHJlZGljdCgpO1xuXG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGdldENvdW50QXRSb3cocm93KSB7XG4gICAgY29uc3QgaW5kZXggPSByb3csICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gdGhpcy52ZWN0b3IuZ2V0RWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBjb3VudCA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHNldENvdW50QXRSb3cocm93LCBjb3VudCkge1xuICAgIGNvbnN0IGluZGV4ID0gcm93LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGNvdW50OyAgLy8vXG5cbiAgICB0aGlzLnZlY3Rvci5zZXRFbGVtZW50QXQoaW5kZXgsIGVsZW1lbnQpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5mcmVxdWVuY3lWZWN0b3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZnJlcXVlbmN5VmVjdG9yID0gRnJlcXVlbmN5VmVjdG9yLmZyb21TaXplKHNpemUpO1xuXG4gICAgICB0aGlzLmZyZXF1ZW5jeVZlY3RvcnMucHVzaChmcmVxdWVuY3lWZWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYXRyaXhKU09OID0gdGhpcy5tYXRyaXgudG9KU09OKCksXG4gICAgICAgICAgbWF0cml4ID0gbWF0cml4SlNPTiwgIC8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1hdHJpeFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IGZyZXF1ZW5jeVZlY3RvcnMgPSBmcmVxdWVuY3lWZWN0b3JzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKGZyZXF1ZW5jeVZlY3RvcnMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHt9LFxuICAgICAgICAgIGZyZXF1ZW5jeVZlY3RvcnMgPSBudWxsLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIGZyZXF1ZW5jeVZlY3RvcnMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZnJlcXVlbmN5VmVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgZnJlcXVlbmN5VmVjdG9ycywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsIkVsZW1lbnQiLCJmcmVxdWVuY3lWZWN0b3JzIiwiZ2V0RnJlcXVlbmN5VmVjdG9ycyIsImdldEZyZXF1ZW5jeVZlY3RvckF0Um93Iiwicm93IiwiaW5kZXgiLCJmcmVxdWVuY3lWZWN0b3IiLCJ0cmFpbiIsInRyYW5zaXRpb24iLCJnZXRSb3ciLCJjb2x1bW4iLCJnZXRDb2x1bW4iLCJmb3J3YXJkIiwicHJlZGljdCIsImdldENvdW50QXRSb3ciLCJlbGVtZW50IiwidmVjdG9yIiwiZ2V0RWxlbWVudEF0IiwiY291bnQiLCJzZXRDb3VudEF0Um93Iiwic2V0RWxlbWVudEF0IiwiaW5pdGlhbGlzZSIsInNpemUiLCJGcmVxdWVuY3lWZWN0b3IiLCJmcm9tU2l6ZSIsInB1c2giLCJ0b0pTT04iLCJtYXRyaXhKU09OIiwibWF0cml4IiwianNvbiIsImZyb21KSlNPTiIsImZyZXF1ZW5jeVZlY3RvcnNGcm9tSlNPTiIsIndlaWdodHMiLCJmcm9tTm90aGluZyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7OztnRUFIRDtrRUFDUTs7Ozs7O0FBRWIsTUFBTUEsZ0JBQWdCQyxnQkFBTztJQUMxQyxZQUFZQyxnQkFBZ0IsQ0FBRTtRQUM1QixLQUFLO1FBRUwsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBR0E7SUFDMUI7SUFFQUMsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7SUFDOUI7SUFFQUUsd0JBQXdCQyxHQUFHLEVBQUU7UUFDM0IsTUFBTUMsUUFBUUQsS0FDUkUsa0JBQWtCLElBQUksQ0FBQ0wsZ0JBQWdCLENBQUNJLE1BQU07UUFFcEQsT0FBT0M7SUFDVDtJQUVBQyxNQUFNQyxVQUFVLEVBQUU7UUFDaEIsTUFBTUosTUFBTUksV0FBV0MsTUFBTSxJQUN2QkMsU0FBU0YsV0FBV0csU0FBUyxJQUM3Qkwsa0JBQWtCLElBQUksQ0FBQ0gsdUJBQXVCLENBQUNDO1FBRXJERSxnQkFBZ0JDLEtBQUssQ0FBQ0c7SUFDeEI7SUFFQUUsUUFBUVIsR0FBRyxFQUFFO1FBQ1gsTUFBTUUsa0JBQWtCLElBQUksQ0FBQ0gsdUJBQXVCLENBQUNDLE1BQy9DTSxTQUFTSixnQkFBZ0JPLE9BQU87UUFFdEMsT0FBT0g7SUFDVDtJQUVBSSxjQUFjVixHQUFHLEVBQUU7UUFDakIsTUFBTUMsUUFBUUQsS0FDUlcsVUFBVSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDWixRQUNuQ2EsUUFBUUgsU0FBVSxHQUFHO1FBRTNCLE9BQU9HO0lBQ1Q7SUFFQUMsY0FBY2YsR0FBRyxFQUFFYyxLQUFLLEVBQUU7UUFDeEIsTUFBTWIsUUFBUUQsS0FDUlcsVUFBVUcsT0FBUSxHQUFHO1FBRTNCLElBQUksQ0FBQ0YsTUFBTSxDQUFDSSxZQUFZLENBQUNmLE9BQU9VO0lBQ2xDO0lBRUFNLFdBQVdDLElBQUksRUFBRTtRQUNmLElBQUksQ0FBQ3JCLGdCQUFnQixHQUFHLEVBQUU7UUFFMUIsSUFBSyxJQUFJSSxRQUFRLEdBQUdBLFFBQVFpQixNQUFNakIsUUFBUztZQUN6QyxNQUFNQyxrQkFBa0JpQixrQkFBZSxDQUFDQyxRQUFRLENBQUNGO1lBRWpELElBQUksQ0FBQ3JCLGdCQUFnQixDQUFDd0IsSUFBSSxDQUFDbkI7UUFDN0I7SUFDRjtJQUVBb0IsU0FBUztRQUNQLE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sSUFDL0JFLFNBQVNELFlBQ1RFLE9BQU87WUFDTEQ7UUFDRjtRQUVOLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVRCxJQUFJLEVBQUU7UUFDckIsTUFBTTVCLG1CQUFtQjhCLHlCQUF5QkYsT0FDNUNHLFVBQVUsSUFBSWpDLFFBQVFFO1FBRTVCLE9BQU8rQjtJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUNuQixNQUFNQyxhQUFhLENBQUMsR0FDZGpDLG1CQUFtQixNQUNuQitCLFVBQVVoQyxnQkFBTyxDQUFDbUMsY0FBYyxDQUFDcEMsU0FBU21DLFlBQVlqQztRQUU1RCxPQUFPK0I7SUFDVDtJQUVBLE9BQU9HLGVBQWVELFVBQVUsRUFBRSxHQUFHRSxrQkFBa0IsRUFBRTtRQUN2RCxNQUFNbkMsbUJBQW1CLE1BQ25CK0IsVUFBVWhDLGdCQUFPLENBQUNtQyxjQUFjLENBQUNwQyxTQUFTbUMsWUFBWWpDLHFCQUFxQm1DO1FBRWpGLE9BQU9KO0lBQ1Q7QUFDRiJ9