pub mod core;

use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn vector_matrix_multiply(
    vector: Float32Array,
    matrix: Float32Array,
    rows: u32,
    cols: u32
) -> Float32Array {
    let vector = vector.as_ref();
    let matrix = matrix.as_ref();

    let result = core::vector_matrix_multiply(vector, matrix, rows, cols);
    
    Float32Array::from(result)
}

#[napi]
pub fn vector_softmax(
    vector: Float32Array
) -> Float32Array {
    let vector = vector.as_ref();

    let result = core::vector_softmax(vector);

    Float32Array::from(result)
}
