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
const _libnode = require("../lib.node");
const _constants = require("./constants");
class Matrix {
    constructor(rows, columns, elements){
        this.rows = rows;
        this.columns = columns;
        this.elements = elements;
    }
    getRows() {
        return this.rows;
    }
    getColumns() {
        return this.columns;
    }
    getElements() {
        return this.elements;
    }
    getVectorAtRow(Vector, row) {
        const start = row * this.columns, end = start + this.columns, elements = this.elements.slice(start, end), vector = Vector.fromElements(elements);
        return vector;
    }
    setVectorAtRow(row, vector) {
        const start = row * this.columns, deleteCount = this.columns, elements = vector.getElements();
        this.elements.splice(start, deleteCount, ...elements);
    }
    addMatrix(matrix) {
        const matrixA = matrix, matrixB = this, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.addMatrixToMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
        return resultMatrix;
    }
    subtractMatrix(matrix) {
        const matrixA = matrix, matrixB = this, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.subtractMatrixFromMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
        return resultMatrix;
    }
    divideByScalar(scalar) {
        scalar = Number(scalar); ///
        const matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.divideMatrixByScalar)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
        return resultMatrix;
    }
    multiplyByScalar(scalar) {
        scalar = Number(scalar); ///
        const matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.multiplyMatrixByScalar)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
        return resultMatrix;
    }
    initialise(size) {
        this.rows = size; ///
        this.columns = size; ///
        this.elements = [];
        const element = 1 / size, cardinality = size * size;
        for(let count = 0; count < cardinality; count++){
            this.elements.push(element);
        }
    }
    asString() {
        let string = "[\n";
        const lastRow = this.rows - 1, lastColumn = this.columns - 1;
        for(let row = 0; row < this.rows; row++){
            string += "  ";
            for(let column = 0; column < this.columns; column++){
                const index = row * this.columns + column, element = this.elements[index], number = Number(element), roundedNumber = number.toFixed(_constants.DECIMAL_PLACES);
                if (roundedNumber >= 0) {
                    string += "+";
                }
                string += roundedNumber;
                if (column < lastColumn) {
                    string += ", ";
                }
            }
            if (row < lastRow) {
                string += ",\n";
            }
        }
        string += "\n]";
        return string;
    }
    toJSON() {
        const rows = this.rows, columns = this.columns, elements = this.elements, json = {
            rows,
            columns,
            elements
        };
        return json;
    }
    toFloat32Array() {
        const float32Array = new Float32Array(this.elements);
        return float32Array;
    }
    static fromJSON(json) {
        const { rows, columns, elements } = json, matrix = new Matrix(rows, columns, elements);
        return matrix;
    }
    static fromNothing() {
        const rows = null, columns = null, elements = null, matrix = new Matrix(rows, columns, elements);
        return matrix;
    }
    static fromRowsAndColumns(rows, columns) {
        const elements = [], cardinality = rows * columns;
        for(let index = 0; index < cardinality; index++){
            const element = 0;
            elements.push(element);
        }
        const matrix = new Matrix(rows, columns, elements);
        return matrix;
    }
    static fromRowsColumnsAndFloat32Array(rows, columns, float32Array) {
        const elements = Array.from(float32Array), matrix = new Matrix(rows, columns, elements);
        return matrix;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZE1hdHJpeFRvTWF0cml4LCBcbiAgICAgICAgIGRpdmlkZU1hdHJpeEJ5U2NhbGFyLCBcbiAgICAgICAgIG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIFxuICAgICAgICAgc3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IERFQ0lNQUxfUExBQ0VTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0VmVjdG9yQXRSb3coVmVjdG9yLCByb3cpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgdmVjdG9yID0gVmVjdG9yLmZyb21FbGVtZW50cyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc2V0VmVjdG9yQXRSb3cocm93LCB2ZWN0b3IpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHZlY3Rvci5nZXRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5lbGVtZW50cyk7XG4gIH1cblxuICBhZGRNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBhZGRNYXRyaXhUb01hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuICAgIFxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBzdWJ0cmFjdE1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCBtYXRyaXhBID0gbWF0cml4LCAvLy9cbiAgICAgICAgICBtYXRyaXhCID0gdGhpcywgLy8vXG4gICAgICAgICAgbWF0cml4QUZsb2F0MzJBcnJheSA9IG1hdHJpeEEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhCRmxvYXQzMkFycmF5ID0gbWF0cml4Qi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIHNjYWxhciA9IE51bWJlcihzY2FsYXIpOyAgLy8vXG5cbiAgICBjb25zdCBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlTWF0cml4QnlTY2FsYXIobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBzY2FsYXIgPSBOdW1iZXIoc2NhbGFyKTsgIC8vL1xuXG4gICAgY29uc3QgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5TWF0cml4QnlTY2FsYXIobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5yb3dzID0gc2l6ZTsgIC8vL1xuICAgIHRoaXMuY29sdW1ucyA9IHNpemU7IC8vL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSAxIC8gc2l6ZSxcbiAgICAgICAgICBjYXJkaW5hbGl0eSA9IHNpemUgKiBzaXplO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiW1xcblwiO1xuXG4gICAgY29uc3QgbGFzdFJvdyA9IHRoaXMucm93cyAtMSxcbiAgICAgICAgICBsYXN0Q29sdW1uID0gdGhpcy5jb2x1bW5zIC0xO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgc3RyaW5nICs9IFwiICBcIjtcblxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5jb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJvdyAqIHRoaXMuY29sdW1ucyArIGNvbHVtbixcbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaW5kZXhdLFxuICAgICAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgICAgIHJvdW5kZWROdW1iZXIgPSBudW1iZXIudG9GaXhlZChERUNJTUFMX1BMQUNFUyk7XG5cbiAgICAgICAgaWYgKHJvdW5kZWROdW1iZXIgPj0gMCkge1xuICAgICAgICAgIHN0cmluZyArPSBcIitcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZyArPSByb3VuZGVkTnVtYmVyO1xuXG4gICAgICAgIGlmIChjb2x1bW4gPCBsYXN0Q29sdW1uKSB7XG4gICAgICAgICAgc3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocm93IDwgbGFzdFJvdykge1xuICAgICAgICBzdHJpbmcgKz0gXCIsXFxuXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nICs9IFwiXFxuXVwiO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByb3dzID0gdGhpcy5yb3dzLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMsXG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucywgZWxlbWVudHMgfSA9IGpzb24sICAvL1xuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCByb3dzID0gbnVsbCxcbiAgICAgICAgICBjb2x1bW5zID0gbnVsbCxcbiAgICAgICAgICBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvd3NBbmRDb2x1bW5zKHJvd3MsIGNvbHVtbnMpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICAgIGNhcmRpbmFsaXR5ID0gcm93cyAqIGNvbHVtbnM7XG4gICAgXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhcmRpbmFsaXR5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gMDtcblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkocm93cywgY29sdW1ucywgZmxvYXQzMkFycmF5KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWF0cml4Iiwicm93cyIsImNvbHVtbnMiLCJlbGVtZW50cyIsImdldFJvd3MiLCJnZXRDb2x1bW5zIiwiZ2V0RWxlbWVudHMiLCJnZXRWZWN0b3JBdFJvdyIsIlZlY3RvciIsInJvdyIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ2ZWN0b3IiLCJmcm9tRWxlbWVudHMiLCJzZXRWZWN0b3JBdFJvdyIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiYWRkTWF0cml4IiwibWF0cml4IiwibWF0cml4QSIsIm1hdHJpeEIiLCJtYXRyaXhBRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJtYXRyaXhCRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5IiwiYWRkTWF0cml4VG9NYXRyaXgiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJzdWJ0cmFjdE1hdHJpeCIsInN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeCIsImRpdmlkZUJ5U2NhbGFyIiwic2NhbGFyIiwiTnVtYmVyIiwibWF0cml4RmxvYXQzMkFycmF5IiwiZGl2aWRlTWF0cml4QnlTY2FsYXIiLCJtdWx0aXBseUJ5U2NhbGFyIiwibXVsdGlwbHlNYXRyaXhCeVNjYWxhciIsImluaXRpYWxpc2UiLCJzaXplIiwiZWxlbWVudCIsImNhcmRpbmFsaXR5IiwiY291bnQiLCJwdXNoIiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYXN0Um93IiwibGFzdENvbHVtbiIsImNvbHVtbiIsImluZGV4IiwibnVtYmVyIiwicm91bmRlZE51bWJlciIsInRvRml4ZWQiLCJERUNJTUFMX1BMQUNFUyIsInRvSlNPTiIsImpzb24iLCJmbG9hdDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJmcm9tSlNPTiIsImZyb21Ob3RoaW5nIiwiZnJvbVJvd3NBbmRDb2x1bW5zIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7O3lCQUpvQjsyQkFFVjtBQUVoQixNQUFNQTtJQUNuQixZQUFZQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxDQUFFO1FBQ25DLElBQUksQ0FBQ0YsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtJQUN0QjtJQUVBSSxlQUFlQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtRQUMxQixNQUFNQyxRQUFRRCxNQUFNLElBQUksQ0FBQ1AsT0FBTyxFQUMxQlMsTUFBTUQsUUFBUSxJQUFJLENBQUNSLE9BQU8sRUFDMUJDLFdBQVcsSUFBSSxD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