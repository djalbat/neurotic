"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AttentionHead;
    }
});
const _head = /*#__PURE__*/ _interop_require_default(require("../head"));
const _weights = /*#__PURE__*/ _interop_require_default(require("../weights"));
const _types = require("../../types");
const _json = require("../../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AttentionHead extends _head.default {
    constructor(qWeights, kWeights, vWeights){
        super();
        this.qWeights = qWeights;
        this.kWeights = kWeights;
        this.vWeights = vWeights;
    }
    getQWeights() {
        return this.qWeights;
    }
    getKWeights() {
        return this.kWeights;
    }
    getVWeights() {
        return this.vWeights;
    }
    train(transition) {
        debugger;
    }
    forward(token, vocabulary) {
        const index = vocabulary.indexOfToken(token);
        debugger;
        return token;
    }
    initialise(vocabulary) {
        const size = vocabulary.getSize();
        this.qWeights.initialise(size);
        this.kWeights.initialise(size);
        this.vWeights.initialise(size);
    }
    toJSON() {
        const qWeightsJSON = this.qWeights.toJSON(), kWeightsJSON = this.kWeights.toJSON(), vWeightsJSON = this.vWeights.toJSON(), type = _types.ATTENTION_HEAD_TYPE, qWeights = qWeightsJSON, kWeights = kWeightsJSON, vWeights = vWeightsJSON, json = {
            type,
            qWeights,
            kWeights,
            vWeights
        };
        return json;
    }
    static fromJSON(json) {
        let attentionHead = null;
        const { type } = json;
        if (type === _types.ATTENTION_HEAD_TYPE) {
            const qWeights = (0, _json.qWeightsFromJSON)(json), kWeights = (0, _json.kWeightsFromJSON)(json), vWeights = (0, _json.vWeightsFromJSON)(json);
            attentionHead = new AttentionHead(qWeights, kWeights, vWeights);
        }
        return attentionHead;
    }
    static fromProperties(properties, ...remainingArguments) {
        const qWeights = _weights.default.fromNothing(), kWeights = _weights.default.fromNothing(), vWeights = _weights.default.fromNothing(), attentionHead = _head.default.fromProperties(AttentionHead, properties, qWeights, kWeights, vWeights, ...remainingArguments);
        return attentionHead;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2hlYWQvYXR0ZW50aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL3dlaWdodHNcIjtcblxuaW1wb3J0IHsgQVRURU5USU9OX0hFQURfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcVdlaWdodHNGcm9tSlNPTiwga1dlaWdodHNGcm9tSlNPTiwgdldlaWdodHNGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRlbnRpb25IZWFkIGV4dGVuZHMgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKHFXZWlnaHRzLCBrV2VpZ2h0cywgdldlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cyA9IHFXZWlnaHRzO1xuICAgIHRoaXMua1dlaWdodHMgPSBrV2VpZ2h0cztcbiAgICB0aGlzLnZXZWlnaHRzID0gdldlaWdodHM7XG4gIH1cblxuICBnZXRRV2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy5xV2VpZ2h0cztcbiAgfVxuXG4gIGdldEtXZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmtXZWlnaHRzO1xuICB9XG5cbiAgZ2V0VldlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudldlaWdodHM7XG4gIH1cblxuICB0cmFpbih0cmFuc2l0aW9uKSB7XG5cbiAgICBkZWJ1Z2dlclxuXG4gIH1cblxuICBmb3J3YXJkKHRva2VuLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbik7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICAgIHRoaXMua1dlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgICB0aGlzLnZXZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcVdlaWdodHNKU09OID0gdGhpcy5xV2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICBrV2VpZ2h0c0pTT04gPSB0aGlzLmtXZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZXZWlnaHRzSlNPTiA9IHRoaXMudldlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdHlwZSA9IEFUVEVOVElPTl9IRUFEX1RZUEUsXG4gICAgICAgICAgcVdlaWdodHMgPSBxV2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGtXZWlnaHRzID0ga1dlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBxV2VpZ2h0cyxcbiAgICAgICAgICAgIGtXZWlnaHRzLFxuICAgICAgICAgICAgdldlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBhdHRlbnRpb25IZWFkID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBBVFRFTlRJT05fSEVBRF9UWVBFKSB7XG4gICAgICBjb25zdCBxV2VpZ2h0cyA9IHFXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBrV2VpZ2h0cyA9IGtXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGF0dGVudGlvbkhlYWQgPSBuZXcgQXR0ZW50aW9uSGVhZChxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0ZW50aW9uSGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBxV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBrV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB2V2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhdHRlbnRpb25IZWFkID0gSGVhZC5mcm9tUHJvcGVydGllcyhBdHRlbnRpb25IZWFkLCBwcm9wZXJ0aWVzLCBxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dGVudGlvbkhlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBdHRlbnRpb25IZWFkIiwiSGVhZCIsInFXZWlnaHRzIiwia1dlaWdodHMiLCJ2V2VpZ2h0cyIsImdldFFXZWlnaHRzIiwiZ2V0S1dlaWdodHMiLCJnZXRWV2VpZ2h0cyIsInRyYWluIiwidHJhbnNpdGlvbiIsImZvcndhcmQiLCJ0b2tlbiIsInZvY2FidWxhcnkiLCJpbmRleCIsImluZGV4T2ZUb2tlbiIsImluaXRpYWxpc2UiLCJzaXplIiwiZ2V0U2l6ZSIsInRvSlNPTiIsInFXZWlnaHRzSlNPTiIsImtXZWlnaHRzSlNPTiIsInZXZWlnaHRzSlNPTiIsInR5cGUiLCJBVFRFTlRJT05fSEVBRF9UWVBFIiwianNvbiIsImZyb21KU09OIiwiYXR0ZW50aW9uSGVhZCIsInFXZWlnaHRzRnJvbUpTT04iLCJrV2VpZ2h0c0Zyb21KU09OIiwidldlaWdodHNGcm9tSlNPTiIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVy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