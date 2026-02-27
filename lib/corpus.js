"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Corpus;
    }
});
const _necessary = require("necessary");
const _defaults = require("./defaults");
const _json = require("./utilities/json");
const { readFile } = _necessary.fileSystemUtilities;
class Corpus {
    constructor(chunks){
        this.chunks = chunks;
    }
    getChunks() {
        return this.chunks;
    }
    getSize() {
        const chunksLength = this.chunks.length, size = chunksLength; ///
        return size;
    }
    mapChunk(callback) {
        return this.chunks.map(callback);
    }
    forEachChunk(callback) {
        this.chunks.forEach(callback);
    }
    asTokens() {
        const tokenMap = {};
        this.forEachChunk((chunk)=>{
            chunk.forEachToken((token)=>{
                tokenMap[token] = token;
            });
        });
        const tokens = Object.keys(tokenMap);
        return tokens;
    }
    toJSON() {
        const chunksJSON = (0, _json.chunksToChunksJSON)(this.chunks), chunks = chunksJSON, json = {
            chunks
        };
        return json;
    }
    static fromJSON(json) {
        const chunks = (0, _json.chunksFromJSON)(json), corpus = new Corpus(chunks);
        return corpus;
    }
    static fromFile(filePath = _defaults.DEFAULT_CORPUS_FILE_PATH) {
        const content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString), corpus = Corpus.fromJSON(json);
        return corpus;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBjaHVua3NGcm9tSlNPTiwgY2h1bmtzVG9DaHVua3NKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycHVzIHtcbiAgY29uc3RydWN0b3IoY2h1bmtzKSB7XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gIH1cblxuICBnZXRDaHVua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBjb25zdCBjaHVua3NMZW5ndGggPSB0aGlzLmNodW5rcy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZSA9IGNodW5rc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBtYXBDaHVuayhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaHVua3MubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hDaHVuayhjYWxsYmFjaykgeyB0aGlzLmNodW5rcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VuTWFwID0ge307XG5cbiAgICB0aGlzLmZvckVhY2hDaHVuaygoY2h1bmspID0+IHtcbiAgICAgIGNodW5rLmZvckVhY2hUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgdG9rZW5NYXBbdG9rZW5dID0gdG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VucyA9IE9iamVjdC5rZXlzKHRva2VuTWFwKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY2h1bmtzSlNPTiA9IGNodW5rc1RvQ2h1bmtzSlNPTih0aGlzLmNodW5rcyksXG4gICAgICAgICAgY2h1bmtzID0gY2h1bmtzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjaHVua3NcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGNodW5rcyA9IGNodW5rc0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIGNvcnB1cyA9IG5ldyBDb3JwdXMoY2h1bmtzKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZVBhdGggPSBERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oanNvbik7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29ycHVzIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZ2V0U2l6ZSIsImNodW5rc0xlbmd0aCIsImxlbmd0aCIsInNpemUiLCJtYXBDaHVuayIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaENodW5rIiwiZm9yRWFjaCIsImFzVG9rZW5zIiwidG9rZW5NYXAiLCJjaHVuayIsImZvckVhY2hUb2tlbiIsInRva2VuIiwidG9rZW5zIiwiT2JqZWN0Iiwia2V5cyIsInRvSlNPTiIsImNodW5rc0pTT04iLCJjaHVua3NUb0NodW5rc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjaHVua3NGcm9tSlNPTiIsImNvcnB1cyIsImZyb21GaWxlIiwiZmlsZVBhdGgiLCJERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgiLCJjb250ZW50IiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7OzsyQkFQZTswQkFFSztzQkFDVTtBQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyw4QkFBbUI7QUFFekIsTUFBTUY7SUFDbkIsWUFBWUcsTUFBTSxDQUFFO1FBQ2xCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtJQUNoQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNELE1BQU07SUFDcEI7SUFFQUUsVUFBVTtRQUNSLE1BQU1DLGVBQWUsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sRUFDakNDLE9BQU9GLGNBQWUsR0FBRztRQUUvQixPQUFPRTtJQUNUO0lBRUFDLFNBQVNDLFFBQVEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNRLEdBQUcsQ0FBQ0Q7SUFBVztJQUV2REUsYUFBYUYsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0g7SUFBVztJQUV4REksV0FBVztRQUNULE1BQU1DLFdBQVcsQ0FBQztRQUVsQixJQUFJLENBQUNILFlBQVksQ0FBQyxDQUFDSTtZQUNqQkEsTUFBTUMsWUFBWSxDQUFDLENBQUNDO2dCQUNsQkgsUUFBUSxDQUFDRyxNQUFNLEdBQUdBO1lBQ3BCO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUNOO1FBRTNCLE9BQU9JO0lBQ1Q7SUFFQUcsU0FBUztRQUNQLE1BQU1DLGFBQWFDLElBQUFBLHdCQUFrQixFQUFDLElBQUksQ0FBQ3JCLE1BQU0sR0FDM0NBLFNBQVNvQixZQUNURSxPQUFPO1lBQ0x0QjtRQUNGO1FBRU4sT0FBT3NCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUU7UUFDcEIsTUFBTXRCLFNBQVN3QixJQUFBQSxvQkFBYyxFQUFDRixPQUN4QkcsU0FBUyxJQUFJNUIsT0FBT0c7UUFFMUIsT0FBT3lCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTQyxXQUFXQyxrQ0FBd0IsRUFBRTtRQUNuRCxNQUFNQyxVQUFVL0IsU0FBUzZCLFdBQ25CRyxhQUFhRCxTQUNiUCxPQUFPUyxLQUFLQyxLQUFLLENBQUNGLGFBQ2xCTCxTQUFTNUIsT0FBTzBCLFFBQVEsQ0FBQ0Q7UUFFL0IsT0FBT0c7SUFDVDtBQUNGIn0=