use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn matrixMultiplication(matrix: Float32Array, vector: Float32Array, rows: u32, cols: u32) -> Float32Array {
    let matrix = matrix.as_ref();
    let vector = vector.as_ref();

    assert_eq!(matrix.len(), (rows * cols) as usize, "Matrix size mismatch");
    assert_eq!(vector.len(), cols as usize, "Vector size mismatch");

    let mut result = Vec::with_capacity(rows as usize);

    for row in 0..rows {
        let mut sum = 0.0;
        
        for column in 0..cols {
            let index = (row * cols + column) as usize;
            
            sum += matrix[index] * vector[column as usize];
        }
        
        result.push(sum);
    }

    Float32Array::from(result)
}
