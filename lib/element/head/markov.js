"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkovHead;
    }
});
const _head = /*#__PURE__*/ _interop_require_default(require("../head"));
const _weights = /*#__PURE__*/ _interop_require_default(require("../weights"));
const _json = require("../../utilities/json");
const _types = require("../../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MarkovHead extends _head.default {
    constructor(weights){
        super();
        this.weights = weights;
    }
    getWeights() {
        return this.weights;
    }
    train(transition) {
        return this.weights.train(transition);
    }
    forward(token, vocabulary) {
        const index = vocabulary.indexOfToken(token), row = index, frequencyVector = this.weights.getFrequencyVectorAtRow(row), column = frequencyVector.predict();
        if (column === null) {
            token = null;
        } else {
            const index = column; ///
            token = vocabulary.getTokenAt(index);
        }
        return token;
    }
    initialise(vocabulary) {
        const size = vocabulary.getSize();
        this.weights.initialise(size);
    }
    toJSON() {
        const weightsJSON = this.weights.toJSON(), type = _types.MARKOV_HEAD_TYPE, weights = weightsJSON, json = {
            type,
            weights
        };
        return json;
    }
    static fromJSON(json) {
        let markovHead = null;
        const { type } = json;
        if (type === _types.MARKOV_HEAD_TYPE) {
            const weights = (0, _json.weightsFromJSON)(json);
            markovHead = new MarkovHead(weights);
        }
        return markovHead;
    }
    static fromProperties(properties, ...remainingArguments) {
        const weights = _weights.default.fromNothing(), markovHead = _head.default.fromProperties(MarkovHead, properties, weights, ...remainingArguments);
        return markovHead;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2hlYWQvbWFya292LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL3dlaWdodHNcIjtcblxuaW1wb3J0IHsgd2VpZ2h0c0Zyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBNQVJLT1ZfSEVBRF9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtvdkhlYWQgZXh0ZW5kcyBIZWFkIHtcbiAgY29uc3RydWN0b3Iod2VpZ2h0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgdHJhaW4odHJhbnNpdGlvbikgeyByZXR1cm4gdGhpcy53ZWlnaHRzLnRyYWluKHRyYW5zaXRpb24pOyB9XG5cbiAgZm9yd2FyZCh0b2tlbiwgdm9jYWJ1bGFyeSkge1xuICAgIGNvbnN0IGluZGV4ID0gdm9jYWJ1bGFyeS5pbmRleE9mVG9rZW4odG9rZW4pLFxuICAgICAgICAgIHJvdyA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gdGhpcy53ZWlnaHRzLmdldEZyZXF1ZW5jeVZlY3RvckF0Um93KHJvdyksXG4gICAgICAgICAgY29sdW1uID0gZnJlcXVlbmN5VmVjdG9yLnByZWRpY3QoKTtcblxuICAgIGlmIChjb2x1bW4gPT09IG51bGwpIHtcbiAgICAgIHRva2VuID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBjb2x1bW47IC8vL1xuXG4gICAgICB0b2tlbiA9IHZvY2FidWxhcnkuZ2V0VG9rZW5BdChpbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy53ZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdHlwZSA9IE1BUktPVl9IRUFEX1RZUEUsXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBtYXJrb3ZIZWFkID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBNQVJLT1ZfSEVBRF9UWVBFKSB7XG4gICAgICBjb25zdCB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pO1xuXG4gICAgICBtYXJrb3ZIZWFkID0gbmV3IE1hcmtvdkhlYWQod2VpZ2h0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtvdkhlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgd2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtYXJrb3ZIZWFkID0gSGVhZC5mcm9tUHJvcGVydGllcyhNYXJrb3ZIZWFkLCBwcm9wZXJ0aWVzLCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtvdkhlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrb3ZIZWFkIiwiSGVhZCIsIndlaWdodHMiLCJnZXRXZWlnaHRzIiwidHJhaW4iLCJ0cmFuc2l0aW9uIiwiZm9yd2FyZCIsInRva2VuIiwidm9jYWJ1bGFyeSIsImluZGV4IiwiaW5kZXhPZlRva2VuIiwicm93IiwiZnJlcXVlbmN5VmVjdG9yIiwiZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3ciLCJjb2x1bW4iLCJwcmVkaWN0IiwiZ2V0VG9rZW5BdCIsImluaXRpYWxpc2UiLCJzaXplIiwiZ2V0U2l6ZSIsInRvSlNPTiIsIndlaWdodHNKU09OIiwidHlwZSIsIk1BUktPVl9IRUFEX1RZUEUiLCJqc29uIiwiZnJvbUpTT04iLCJtYXJrb3ZIZWFkIiwid2VpZ2h0c0Zyb21KU09OIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiV2VpZ2h0cyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzZEQU5KO2dFQUNHO3NCQUVZO3VCQUNDOzs7Ozs7QUFFbEIsTUFBTUEsbUJBQW1CQyxhQUFJO0lBQzFDLFlBQVlDLE9BQU8sQ0FBRTtRQUNuQixLQUFLO1FBRUwsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0QsT0FBTztJQUNyQjtJQUVBRSxNQUFNQyxVQUFVLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxLQUFLLENBQUNDO0lBQWE7SUFFM0RDLFFBQVFDLEtBQUssRUFBRUMsVUFBVSxFQUFFO1FBQ3pCLE1BQU1DLFFBQVFELFdBQVdFLFlBQVksQ0FBQ0gsUUFDaENJLE1BQU1GLE9BQ05HLGtCQUFrQixJQUFJLENBQUNWLE9BQU8sQ0FBQ1csdUJBQXVCLENBQUNGLE1BQ3ZERyxTQUFTRixnQkFBZ0JHLE9BQU87UUFFdEMsSUFBSUQsV0FBVyxNQUFNO1lBQ25CUCxRQUFRO1FBQ1YsT0FBTztZQUNMLE1BQU1FLFFBQVFLLFFBQVEsR0FBRztZQUV6QlAsUUFBUUMsV0FBV1EsVUFBVSxDQUFDUDtRQUNoQztRQUVBLE9BQU9GO0lBQ1Q7SUFFQVUsV0FBV1QsVUFBVSxFQUFFO1FBQ3JCLE1BQU1VLE9BQU9WLFdBQVdXLE9BQU87UUFFL0IsSUFBSSxDQUFDakIsT0FBTyxDQUFDZSxVQUFVLENBQUNDO0lBQzFCO0lBRUFFLFNBQVM7UUFDUCxNQUFNQyxjQUFjLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ2tCLE1BQU0sSUFDakNFLE9BQU9DLHVCQUFnQixFQUN2QnJCLFVBQVVtQixhQUNWRyxPQUFPO1lBQ0xGO1lBQ0FwQjtRQUNGO1FBRU4sT0FBT3NCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUU7UUFDcEIsSUFBSUUsYUFBYTtRQUVqQixNQUFNLEVBQUVKLElBQUksRUFBRSxHQUFHRTtRQUVqQixJQUFJRixTQUFTQyx1QkFBZ0IsRUFBRTtZQUM3QixNQUFNckIsVUFBVXlCLElBQUFBLHFCQUFlLEVBQUNIO1lBRWhDRSxhQUFhLElBQUkxQixXQUFXRTtRQUM5QjtRQUVBLE9BQU93QjtJQUNUO0lBRUEsT0FBT0UsZUFBZUMsVUFBVSxFQUFFLEdBQUdDLGtCQUFrQixFQUFFO1FBQ3ZELE1BQU01QixVQUFVNkIsZ0JBQU8sQ0FBQ0MsV0FBVyxJQUM3Qk4sYUFBYXpCLGFBQUksQ0FBQzJCLGNBQWMsQ0FBQzVCLFlBQVk2QixZQUFZM0IsWUFBWTRCO1FBRTNFLE9BQU9KO0lBQ1Q7QUFDRiJ9