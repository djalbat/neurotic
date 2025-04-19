"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    oneHotVectorFromSize: function() {
        return oneHotVectorFromSize;
    },
    oneHotVectorFromSizeAndIndex: function() {
        return oneHotVectorFromSizeAndIndex;
    },
    oneHotVectorsFromChunkSizeAndTokens: function() {
        return oneHotVectorsFromChunkSizeAndTokens;
    }
});
function oneHotVectorsFromChunkSizeAndTokens(chunk, size, tokens) {
    var chunkTokens = chunk, vocabularyTokens = tokens, oneHotVectors = chunkTokens.map(function(chunkToken) {
        var index = vocabularyTokens.indexOf(chunkToken);
        if (index === -1) {
            throw Error("The ".concat(chunkToken, " token in not in the vocabulary."));
        }
        var oneHotVector = oneHotVectorFromSizeAndIndex(size, index);
        return oneHotVector;
    });
    return oneHotVectors;
}
function oneHotVectorFromSizeAndIndex(size, index) {
    var oneHotVector = oneHotVectorFromSize(size);
    oneHotVector[index] = 1;
    return oneHotVector;
}
function oneHotVectorFromSize(size) {
    var oneHotVector = [];
    for(var index = 0; index < size; index++){
        oneHotVector.push(0);
    }
    return oneHotVector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVIb3RWZWN0b3JzRnJvbUNodW5rU2l6ZUFuZFRva2VucyhjaHVuaywgc2l6ZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGNodW5rVG9rZW5zID0gY2h1bmssICAvLy9cbiAgICAgICAgdm9jYWJ1bGFyeVRva2VucyA9IHRva2VucywgIC8vL1xuICAgICAgICBvbmVIb3RWZWN0b3JzID0gY2h1bmtUb2tlbnMubWFwKChjaHVua1Rva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSB2b2NhYnVsYXJ5VG9rZW5zLmluZGV4T2YoY2h1bmtUb2tlbik7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgVGhlICR7Y2h1bmtUb2tlbn0gdG9rZW4gaW4gbm90IGluIHRoZSB2b2NhYnVsYXJ5LmApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgb25lSG90VmVjdG9yID0gb25lSG90VmVjdG9yRnJvbVNpemVBbmRJbmRleChzaXplLCBpbmRleCk7XG5cbiAgICAgICAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gb25lSG90VmVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uZUhvdFZlY3RvckZyb21TaXplQW5kSW5kZXgoc2l6ZSwgaW5kZXgpIHtcbiAgY29uc3Qgb25lSG90VmVjdG9yID0gb25lSG90VmVjdG9yRnJvbVNpemUoc2l6ZSk7XG5cbiAgb25lSG90VmVjdG9yW2luZGV4XSA9IDE7XG5cbiAgcmV0dXJuIG9uZUhvdFZlY3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uZUhvdFZlY3RvckZyb21TaXplKHNpemUpIHtcbiAgY29uc3Qgb25lSG90VmVjdG9yID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNpemU7IGluZGV4KyspIHtcbiAgICBvbmVIb3RWZWN0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHJldHVybiBvbmVIb3RWZWN0b3I7XG59XG4iXSwibmFtZXMiOlsib25lSG90VmVjdG9yRnJvbVNpemUiLCJvbmVIb3RWZWN0b3JGcm9tU2l6ZUFuZEluZGV4Iiwib25lSG90VmVjdG9yc0Zyb21DaHVua1NpemVBbmRUb2tlbnMiLCJjaHVuayIsInNpemUiLCJ0b2tlbnMiLCJjaHVua1Rva2VucyIsInZvY2FidWxhcnlUb2tlbnMiLCJvbmVIb3RWZWN0b3JzIiwibWFwIiwiY2h1bmtUb2tlbiIsImluZGV4IiwiaW5kZXhPZiIsIkVycm9yIiwib25lSG90VmVjdG9yIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNEJnQkEsb0JBQW9CO2VBQXBCQTs7SUFSQUMsNEJBQTRCO2VBQTVCQTs7SUFsQkFDLG1DQUFtQztlQUFuQ0E7OztBQUFULFNBQVNBLG9DQUFvQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU07SUFDckUsSUFBTUMsY0FBY0gsT0FDZEksbUJBQW1CRixRQUNuQkcsZ0JBQWdCRixZQUFZRyxHQUFHLENBQUMsU0FBQ0M7UUFDL0IsSUFBTUMsUUFBUUosaUJBQWlCSyxPQUFPLENBQUNGO1FBRXZDLElBQUlDLFVBQVUsQ0FBQyxHQUFHO1lBQ2hCLE1BQU1FLE1BQU0sQUFBQyxPQUFpQixPQUFYSCxZQUFXO1FBQ2hDO1FBRUEsSUFBTUksZUFBZWIsNkJBQTZCRyxNQUFNTztRQUV4RCxPQUFPRztJQUNUO0lBRU4sT0FBT047QUFDVDtBQUVPLFNBQVNQLDZCQUE2QkcsSUFBSSxFQUFFTyxLQUFLO0lBQ3RELElBQU1HLGVBQWVkLHFCQUFxQkk7SUFFMUNVLFlBQVksQ0FBQ0gsTUFBTSxHQUFHO0lBRXRCLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTZCxxQkFBcUJJLElBQUk7SUFDdkMsSUFBTVUsZUFBZSxFQUFFO0lBRXZCLElBQUssSUFBSUgsUUFBUSxHQUFHQSxRQUFRUCxNQUFNTyxRQUFTO1FBQ3pDRyxhQUFhQyxJQUFJLENBQUM7SUFDcEI7SUFFQSxPQUFPRDtBQUNUIn0=