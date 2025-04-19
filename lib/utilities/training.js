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
    oneHotVectorsFromChunkAndTokens: function() {
        return oneHotVectorsFromChunkAndTokens;
    }
});
function oneHotVectorsFromChunkAndTokens(chunk, tokens) {
    var chunkTokens = chunk, vocabularyTokens = tokens, vocabularyTokensLength = vocabularyTokens.length, size = vocabularyTokensLength, oneHotVectors = chunkTokens.map(function(chunkToken) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHJhaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVIb3RWZWN0b3JzRnJvbUNodW5rQW5kVG9rZW5zKGNodW5rLCB0b2tlbnMpIHtcbiAgY29uc3QgY2h1bmtUb2tlbnMgPSBjaHVuaywgIC8vL1xuICAgICAgICB2b2NhYnVsYXJ5VG9rZW5zID0gdG9rZW5zLCAgLy8vXG4gICAgICAgIHZvY2FidWxhcnlUb2tlbnNMZW5ndGggPSB2b2NhYnVsYXJ5VG9rZW5zLmxlbmd0aCxcbiAgICAgICAgc2l6ZSA9IHZvY2FidWxhcnlUb2tlbnNMZW5ndGgsICAvLy9cbiAgICAgICAgb25lSG90VmVjdG9ycyA9IGNodW5rVG9rZW5zLm1hcCgoY2h1bmtUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdm9jYWJ1bGFyeVRva2Vucy5pbmRleE9mKGNodW5rVG9rZW4pO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFRoZSAke2NodW5rVG9rZW59IHRva2VuIGluIG5vdCBpbiB0aGUgdm9jYWJ1bGFyeS5gKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IG9uZUhvdFZlY3RvckZyb21TaXplQW5kSW5kZXgoc2l6ZSwgaW5kZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG9uZUhvdFZlY3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVIb3RWZWN0b3JGcm9tU2l6ZUFuZEluZGV4KHNpemUsIGluZGV4KSB7XG4gIGNvbnN0IG9uZUhvdFZlY3RvciA9IG9uZUhvdFZlY3RvckZyb21TaXplKHNpemUpO1xuXG4gIG9uZUhvdFZlY3RvcltpbmRleF0gPSAxO1xuXG4gIHJldHVybiBvbmVIb3RWZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmVIb3RWZWN0b3JGcm9tU2l6ZShzaXplKSB7XG4gIGNvbnN0IG9uZUhvdFZlY3RvciA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaXplOyBpbmRleCsrKSB7XG4gICAgb25lSG90VmVjdG9yLnB1c2goMCk7XG4gIH1cblxuICByZXR1cm4gb25lSG90VmVjdG9yO1xufVxuIl0sIm5hbWVzIjpbIm9uZUhvdFZlY3RvckZyb21TaXplIiwib25lSG90VmVjdG9yRnJvbVNpemVBbmRJbmRleCIsIm9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbmRUb2tlbnMiLCJjaHVuayIsInRva2VucyIsImNodW5rVG9rZW5zIiwidm9jYWJ1bGFyeVRva2VucyIsInZvY2FidWxhcnlUb2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJzaXplIiwib25lSG90VmVjdG9ycyIsIm1hcCIsImNodW5rVG9rZW4iLCJpbmRleCIsImluZGV4T2YiLCJFcnJvciIsIm9uZUhvdFZlY3RvciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThCZ0JBLG9CQUFvQjtlQUFwQkE7O0lBUkFDLDRCQUE0QjtlQUE1QkE7O0lBcEJBQywrQkFBK0I7ZUFBL0JBOzs7QUFBVCxTQUFTQSxnQ0FBZ0NDLEtBQUssRUFBRUMsTUFBTTtJQUMzRCxJQUFNQyxjQUFjRixPQUNkRyxtQkFBbUJGLFFBQ25CRyx5QkFBeUJELGlCQUFpQkUsTUFBTSxFQUNoREMsT0FBT0Ysd0JBQ1BHLGdCQUFnQkwsWUFBWU0sR0FBRyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFFBQVFQLGlCQUFpQlEsT0FBTyxDQUFDRjtRQUV2QyxJQUFJQyxVQUFVLENBQUMsR0FBRztZQUNoQixNQUFNRSxNQUFNLEFBQUMsT0FBaUIsT0FBWEgsWUFBVztRQUNoQztRQUVBLElBQU1JLGVBQWVmLDZCQUE2QlEsTUFBTUk7UUFFeEQsT0FBT0c7SUFDVDtJQUVOLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTVCw2QkFBNkJRLElBQUksRUFBRUksS0FBSztJQUN0RCxJQUFNRyxlQUFlaEIscUJBQXFCUztJQUUxQ08sWUFBWSxDQUFDSCxNQUFNLEdBQUc7SUFFdEIsT0FBT0c7QUFDVDtBQUVPLFNBQVNoQixxQkFBcUJTLElBQUk7SUFDdkMsSUFBTU8sZUFBZSxFQUFFO0lBRXZCLElBQUssSUFBSUgsUUFBUSxHQUFHQSxRQUFRSixNQUFNSSxRQUFTO1FBQ3pDRyxhQUFhQyxJQUFJLENBQUM7SUFDcEI7SUFFQSxPQUFPRDtBQUNUIn0=