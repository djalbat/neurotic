"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Model;
    }
});
const _necessary = require("necessary");
const _head = /*#__PURE__*/ _interop_require_default(require("../element/head"));
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _vocabulary = /*#__PURE__*/ _interop_require_default(require("./vocabulary"));
const _defaults = require("../defaults");
const _element1 = require("../utilities/element");
const _json = require("../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { writeFile } = _necessary.fileSystemUtilities;
class Model extends _element.default {
    constructor(vocabulary, head){
        super();
        this.vocabulary = vocabulary;
        this.head = head;
    }
    getVocabulary() {
        return this.vocabulary;
    }
    getHead() {
        return this.head;
    }
    train(corpus) {
        corpus.forEachChunk((chunk)=>{
            chunk.forEachTransition(this.vocabulary, (transition)=>{
                this.head.train(transition);
            });
        });
    }
    infer(token, length) {
        const tokens = [];
        for(let count = 0; count < length; count++){
            token = this.forward(token);
            if (token === null) {
                break;
            }
            tokens.push(token);
        }
        return tokens;
    }
    forward(token) {
        return this.head.forward(token, this.vocabulary);
    }
    serialise(filePath = _defaults.DEFAULT_MODEL_FILE_PATH) {
        const json = this.toJSON(), jsonString = JSON.stringify(json), content = jsonString; ///
        writeFile(filePath, content);
    }
    initialise() {
        this.vocabulary.initialise();
        this.head.initialise(this.vocabulary);
    }
    toJSON() {
        const vocabularyJSON = this.vocabulary.toJSON(), headJSON = this.head.toJSON(), vocabulary = vocabularyJSON, head = headJSON, json = {
            vocabulary,
            head
        };
        return json;
    }
    static fromJSON(json) {
        const vocabulary = (0, _json.vocabularyFromJSON)(json), head = (0, _json.headFromJSON)(json), model = new MOdel(vocabulary, head);
        return model;
    }
    static fromProperties(properties, ...remainingArguments) {
        const { childElements } = properties, vocabulary = (0, _element1.elementFromChildElements)(childElements, _vocabulary.default), head = (0, _element1.elementFromChildElements)(childElements, _head.default), model = _element.default.fromProperties(Model, properties, vocabulary, head, ...remainingArguments);
        model.initialise();
        return model;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vZWxlbWVudC9oZWFkXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBoZWFkRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iodm9jYWJ1bGFyeSwgaGVhZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5O1xuICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRIZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICB0cmFpbihjb3JwdXMpIHtcbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY2h1bmsuZm9yRWFjaFRyYW5zaXRpb24odGhpcy52b2NhYnVsYXJ5LCAodHJhbnNpdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmhlYWQudHJhaW4odHJhbnNpdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICAgIHRva2VuID0gdGhpcy5mb3J3YXJkKHRva2VuKTtcblxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZvcndhcmQodG9rZW4pIHsgcmV0dXJuIHRoaXMuaGVhZC5mb3J3YXJkKHRva2VuLCB0aGlzLnZvY2FidWxhcnkpOyB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICB0aGlzLmhlYWQuaW5pdGlhbGlzZSh0aGlzLnZvY2FidWxhcnkpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIGhlYWRKU09OID0gdGhpcy5oZWFkLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIGhlYWQgPSBoZWFkSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICBoZWFkXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIGhlYWQgPSBoZWFkRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgaGVhZCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgaGVhZCA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBIZWFkKSxcbiAgICAgICAgICBtb2RlbCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTW9kZWwsIHByb3BlcnRpZXMsIHZvY2FidWxhcnksIGhlYWQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBtb2RlbC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNb2RlbCIsIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJFbGVtZW50Iiwidm9jYWJ1bGFyeSIsImhlYWQiLCJnZXRWb2NhYnVsYXJ5IiwiZ2V0SGVhZCIsInRyYWluIiwiY29ycHVzIiwiZm9yRWFjaENodW5rIiwiY2h1bmsiLCJmb3JFYWNoVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJpbmZlciIsInRva2VuIiwibGVuZ3RoIiwidG9rZW5zIiwiY291bnQiLCJmb3J3YXJkIiwicHVzaCIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiaW5pdGlhbGlzZSIsInZvY2FidWxhcnlKU09OIiwiaGVhZEpTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsImhlYWRGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiVm9jYWJ1bGFyeSIsIkhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBcUJBOzs7MkJBWmU7NkRBRW5CO2dFQUNHO21FQUNHOzBCQUVpQjswQkFDQztzQkFDUTs7Ozs7O0FBRWpELE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFtQjtBQUUxQixNQUFNRixjQUFjRyxnQkFBTztJQUN4QyxZQUFZQyxVQUFVLEVBQUVDLElBQUksQ0FBRTtRQUM1QixLQUFLO1FBRUwsSUFBSSxDQUFDRCxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxNQUFNQyxNQUFNLEVBQUU7UUFDWkEsT0FBT0MsWUFBWSxDQUFDLENBQUNDO1lBQ25CQSxNQUFNQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNSLFVBQVUsRUFBRSxDQUFDUztnQkFDeEMsSUFBSSxDQUFDUixJQUFJLENBQUNHLEtBQUssQ0FBQ0s7WUFDbEI7UUFDRjtJQUNGO0lBRUFDLE1BQU1DLEtBQUssRUFBRUMsTUFBTSxFQUFFO1FBQ25CLE1BQU1DLFNBQVMsRUFBRTtRQUVqQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUYsUUFBUUUsUUFBUztZQUMzQ0gsUUFBUSxJQUFJLENBQUNJLE9BQU8sQ0FBQ0o7WUFFckIsSUFBSUEsVUFBVSxNQUFNO2dCQUNsQjtZQUNGO1lBRUFFLE9BQU9HLElBQUksQ0FBQ0w7UUFDZDtRQUVBLE9BQU9FO0lBQ1Q7SUFFQUUsUUFBUUosS0FBSyxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNWLElBQUksQ0FBQ2MsT0FBTyxDQUFDSixPQUFPLElBQUksQ0FBQ1gsVUFBVTtJQUFHO0lBRW5FaUIsVUFBVUMsV0FBV0MsaUNBQXVCLEVBQUU7UUFDNUMsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE1BQU0sSUFDbEJDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0osT0FDNUJLLFVBQVVILFlBQVksR0FBRztRQUUvQnpCLFVBQVVxQixVQUFVTztJQUN0QjtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDMUIsVUFBVSxDQUFDMEIsVUFBVTtRQUUxQixJQUFJLENBQUN6QixJQUFJLENBQUN5QixVQUFVLENBQUMsSUFBSSxDQUFDMUIsVUFBVTtJQUN0QztJQUVBcUIsU0FBUztRQUNQLE1BQU1NLGlCQUFpQixJQUFJLENBQUMzQixVQUFVLENBQUNxQixNQUFNLElBQ3ZDTyxXQUFXLElBQUksQ0FBQzNCLElBQUksQ0FBQ29CLE1BQU0sSUFDM0JyQixhQUFhMkIsZ0JBQ2IxQixPQUFPMkIsVUFDUFIsT0FBTztZQUNMcEI7WUFDQUM7UUFDRjtRQUVOLE9BQU9tQjtJQUNUO0lBRUEsT0FBT1MsU0FBU1QsSUFBSSxFQUFFO1FBQ3BCLE1BQU1wQixhQUFhOEIsSUFBQUEsd0JBQWtCLEVBQUNWLE9BQ2hDbkIsT0FBTzhCLElBQUFBLGtCQUFZLEVBQUNYLE9BQ3BCWSxRQUFRLElBQUlDLE1BQU1qQyxZQUFZQztRQUVwQyxPQUFPK0I7SUFDVDtJQUVBLE9BQU9FLGVBQWVDLFVBQVUsRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUN2RCxNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHRixZQUNwQm5DLGFBQWFzQyxJQUFBQSxrQ0FBd0IsRUFBQ0QsZUFBZUUsbUJBQVUsR0FDL0R0QyxPQUFPcUMsSUFBQUEsa0NBQXdCLEVBQUNELGVBQWVHLGFBQUksR0FDbkRSLFFBQVFqQyxnQkFBTyxDQUFDbUMsY0FBYyxDQUFDdEMsT0FBT3VDLFlBQVluQyxZQUFZQyxTQUFTbUM7UUFFN0VKLE1BQU1OLFVBQVU7UUFFaEIsT0FBT007SUFDVDtBQUNGIn0=