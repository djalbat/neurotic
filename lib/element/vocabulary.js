"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Vocabulary;
    }
});
const _main = require("necessary/lib/main");
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _constants = require("../constants");
const _defaults = require("../defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { readFile } = _main.fileSystemUtilities;
class Vocabulary extends _element.default {
    constructor(tokens, filePath){
        super();
        this.tokens = tokens;
        this.filePath = filePath;
    }
    getTokens() {
        return this.tokens;
    }
    getFilePath() {
        return this.filePath;
    }
    getSize() {
        const tokensLength = this.tokens.length, size = tokensLength; ///
        return size;
    }
    getTokenAt(index) {
        const token = this.tokens[index];
        return token;
    }
    initialise() {
        if (this.tokens !== null) {
            return;
        }
        const content = readFile(this.filePath);
        this.tokens = content.split(_constants.CARRIAGE_RETURN);
    }
    indexOfToken(token) {
        const index = this.tokens.indexOf(token);
        return index;
    }
    toJSON() {
        const tokens = this.tokens, json = {
            tokens
        };
        return json;
    }
    static fromJJSON(json) {
        const { tokens } = json, vocabulary = new Vocabulary(tokens);
        return vocabulary;
    }
    static fromProperties(properties, ...remainingArguments) {
        const { tokens = _defaults.DEFAULT_VOCABULARY_TOKENS, filePath = _defaults.DEFAULT_VOCABULARY_FILE_PATH } = properties, vocabulary = _element.default.fromProperties(Vocabulary, properties, tokens, filePath, ...remainingArguments);
        return vocabulary;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5L2xpYi9tYWluXCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMsIERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9jYWJ1bGFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHNpemUgPSB0b2tlbnNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgZ2V0VG9rZW5BdChpbmRleCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUodGhpcy5maWxlUGF0aCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGNvbnRlbnQuc3BsaXQoQ0FSUklBR0VfUkVUVVJOKTtcbiAgfVxuXG4gIGluZGV4T2ZUb2tlbih0b2tlbikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZih0b2tlbik7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBqc29uLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBuZXcgVm9jYWJ1bGFyeSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHZvY2FidWxhcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgPSBERUZBVUxUX1ZPQ0FCVUxBUllfVE9LRU5TLCBmaWxlUGF0aCA9IERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVm9jYWJ1bGFyeSwgcHJvcGVydGllcywgdG9rZW5zLCBmaWxlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB2b2NhYnVsYXJ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVm9jYWJ1bGFyeSIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsIkVsZW1lbnQiLCJ0b2tlbnMiLCJmaWxlUGF0aCIsImdldFRva2VucyIsImdldEZpbGVQYXRoIiwiZ2V0U2l6ZSIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInNpemUiLCJnZXRUb2tlbkF0IiwiaW5kZXgiLCJ0b2tlbiIsImluaXRpYWxpc2UiLCJjb250ZW50Iiwic3BsaXQiLCJDQVJSSUFHRV9SRVRVUk4iLCJpbmRleE9mVG9rZW4iLCJpbmRleE9mIiwidG9KU09OIiwianNvbiIsImZyb21KSlNPTiIsInZvY2FidWxhcnkiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJERUZBVUxUX1ZPQ0FCVUxBUllfVE9LRU5TIiwiREVGQVVMVF9WT0NBQlVMQVJZX0ZJTEVfUEFUSCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7OztzQkFUZTtnRUFFaEI7MkJBRVk7MEJBQ3dDOzs7Ozs7QUFFeEUsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MseUJBQW1CO0FBRXpCLE1BQU1GLG1CQUFtQkcsZ0JBQU87SUFDN0MsWUFBWUMsTUFBTSxFQUFFQyxRQUFRLENBQUU7UUFDNUIsS0FBSztRQUVMLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNGLE1BQU07SUFDcEI7SUFFQUcsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLFVBQVU7UUFDUixNQUFNQyxlQUFlLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBQyxXQUFXQyxLQUFLLEVBQUU7UUFDaEIsTUFBTUMsUUFBUSxJQUFJLENBQUNWLE1BQU0sQ0FBQ1MsTUFBTTtRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQ1gsTUFBTSxLQUFLLE1BQU07WUFDeEI7UUFDRjtRQUVBLE1BQU1ZLFVBQVVmLFNBQVMsSUFBSSxDQUFDSSxRQUFRO1FBRXRDLElBQUksQ0FBQ0QsTUFBTSxHQUFHWSxRQUFRQyxLQUFLLENBQUNDLDBCQUFlO0lBQzdDO0lBRUFDLGFBQWFMLEtBQUssRUFBRTtRQUNsQixNQUFNRCxRQUFRLElBQUksQ0FBQ1QsTUFBTSxDQUFDZ0IsT0FBTyxDQUFDTjtRQUVsQyxPQUFPRDtJQUNUO0lBRUFRLFNBQVM7UUFDUCxNQUFNakIsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJrQixPQUFPO1lBQ0xsQjtRQUNGO1FBRU4sT0FBT2tCO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVRCxJQUFJLEVBQUU7UUFDckIsTUFBTSxFQUFFbEIsTUFBTSxFQUFFLEdBQUdrQixNQUNiRSxhQUFhLElBQUl4QixXQUFXSTtRQUVsQyxPQUFPb0I7SUFDVDtJQUVBLE9BQU9DLGVBQWVDLFVBQVUsRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUN2RCxNQUFNLEVBQUV2QixTQUFTd0IsbUNBQXlCLEVBQUV2QixXQUFXd0Isc0NBQTRCLEVBQUUsR0FBR0gsWUFDbEZGLGFBQWFyQixnQkFBTyxDQUFDc0IsY0FBYyxDQUFDekIsWUFBWTBCLFlBQVl0QixRQUFRQyxhQUFhc0I7UUFFdkYsT0FBT0g7SUFDVDtBQUNGIn0=