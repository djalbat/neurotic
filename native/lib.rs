pub mod core;

use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn vector_softmax(
    vector: Float32Array
) -> Float32Array {
    let vector = vector.as_ref();

    let result = core::vector_softmax(vector);

    Float32Array::from(result)
}

#[napi]
pub fn vector_subtract_vector(
    vector_a: Float32Array,
    vector_b: Float32Array,
) -> Float32Array {
    let vector_a = vector_a.as_ref();
    let vector_b = vector_b.as_ref();

    let result = core::vector_subtract_vector(vector_a, vector_b);

    Float32Array::from(result)
}

#[napi]
pub fn vector_multiply_matrix(
    vector: Float32Array,
    matrix: Float32Array,
    rows: u32,
    cols: u32
) -> Float32Array {
    let vector = vector.as_ref();
    let matrix = matrix.as_ref();

    let result = core::vector_multiply_matrix(vector, matrix, rows, cols);

    Float32Array::from(result)
}

#[napi]
pub fn vector_outer_multiply_vector(
    vector_a: Float32Array,
    vector_b: Float32Array,
) -> Float32Array {
    let vector_a = vector_a.as_ref();
    let vector_b = vector_b.as_ref();

    let result = core::vector_outer_multiply_vector(vector_a, vector_b);

    Float32Array::from(result)
}
