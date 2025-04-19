pub mod core;

use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn matrix_multiply(
    matrix: Float32Array,
    vector: Float32Array,
    rows: u32,
    cols: u32
) -> Float32Array {
    let matrix = matrix.as_ref();
    let vector = vector.as_ref();

    let result = core::matrix_multiply(matrix, vector, rows, cols);
    
    Float32Array::from(result)
}
