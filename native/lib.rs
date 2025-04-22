pub mod core;

use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn softmax_vector(vector: Float32Array) -> Float32Array {
    let vector = vector.as_ref();

    let result = core::vector::softmax_vector(vector);

    Float32Array::from(result)
}

#[napi]
pub fn add_vector_to_vector(vector_a: Float32Array, vector_b: Float32Array) -> Float32Array {
    let vector_a = vector_a.as_ref();
    let vector_b = vector_b.as_ref();

    let result = core::vector::add_vector_to_vector(vector_a, vector_b);

    Float32Array::from(result)
}

#[napi]
pub fn divide_vector_by_scalar(vector: Float32Array, scalar: f64) -> Float32Array {
    let vector = vector.as_ref();
    let scalar = scalar as f32;

    let result = core::vector::divide_vector_by_scalar(vector, scalar);

    Float32Array::from(result)
}

#[napi]
pub fn multiply_vector_by_scalar(vector: Float32Array, scalar: f64) -> Float32Array {
    let vector = vector.as_ref();
    let scalar = scalar as f32;

    let result = core::vector::multiply_vector_by_scalar(vector, scalar);

    Float32Array::from(result)
}

#[napi]
pub fn multiply_vector_by_matrix(vector: Float32Array, matrix: Float32Array, rows: u32, cols: u32) -> Float32Array {
    let vector = vector.as_ref();
    let matrix = matrix.as_ref();

    let result = core::vector::multiply_vector_by_matrix(vector, matrix, rows, cols);

    Float32Array::from(result)
}

#[napi]
pub fn subtract_vector_from_vector(vector_a: Float32Array, vector_b: Float32Array) -> Float32Array {
    let vector_a = vector_a.as_ref();
    let vector_b = vector_b.as_ref();

    let result = core::vector::subtract_vector_from_vector(vector_a, vector_b);

    Float32Array::from(result)
}

#[napi]
pub fn outer_multiply_vector_by_vector(vector_a: Float32Array, vector_b: Float32Array) -> Float32Array {
    let vector_a = vector_a.as_ref();
    let vector_b = vector_b.as_ref();

    let result = core::vector::outer_multiply_vector_by_vector(vector_a, vector_b);

    Float32Array::from(result)
}

#[napi]
pub fn add_matrix_to_matrix(matrix_a: Float32Array, matrix_b: Float32Array) -> Float32Array {
    let matrix_a = matrix_a.as_ref();
    let matrix_b = matrix_b.as_ref();

    let result = core::matrix::add_matrix_to_matrix(matrix_a, matrix_b);

    Float32Array::from(result)
}

#[napi]
pub fn divide_matrix_by_scalar(matrix: Float32Array, scalar: f64) -> Float32Array {
    let matrix = matrix.as_ref();
    let scalar = scalar as f32;

    let result = core::matrix::divide_matrix_by_scalar(matrix, scalar);

    Float32Array::from(result)
}

#[napi]
pub fn multiply_matrix_by_scalar(matrix: Float32Array, scalar: f64) -> Float32Array {
    let matrix = matrix.as_ref();
    let scalar = scalar as f32;

    let result = core::matrix::multiply_matrix_by_scalar(matrix, scalar);

    Float32Array::from(result)
}

#[napi]
pub fn subtract_matrix_from_matrix(matrix_a: Float32Array, matrix_b: Float32Array) -> Float32Array {
    let matrix_a = matrix_a.as_ref();
    let matrix_b = matrix_b.as_ref();

    let result = core::matrix::subtract_matrix_from_matrix(matrix_a, matrix_b);

    Float32Array::from(result)
}
