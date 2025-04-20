pub fn vector_matrix_multiply(vector: &[f32], matrix: &[f32], rows: u32, cols: u32) -> Vec<f32> {
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

    result
}

pub fn vector_softmax(vector: &[f32]) -> Vec<f32> {
    let max_val = vector
        .iter()
        .cloned()
        .fold(f32::NEG_INFINITY, f32::max);

    let exp_values: Vec<f32> = vector
        .iter()
        .map(|&v| (v - max_val).exp())
        .collect();

    let sum: f32 = exp_values.iter().sum();

    exp_values.iter().map(|&v| v / sum).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_vector_matrix_multiply() {
        let vector = vec![1.0, 0.0, 1.0, 0.0];
        let matrix = vec![
            1.0,  2.0,  3.0,  4.0,
            5.0,  6.0,  7.0,  8.0,
            9.0, 10.0, 11.0, 12.0,
        ];
        let rows = 3;
        let cols = 4;

        let result = vector_matrix_multiply(&vector, &matrix, rows, cols);

        assert_eq!(result, vec![
            1.0 + 3.0,
            5.0 + 7.0,
            9.0 + 11.0
        ]);
    }

    #[test]
    fn test_softmax_output_sum() {
        let vector = vec![2.0, 1.0, 0.1];

        let result = vector_softmax(&vector);
        
        let sum: f32 = result.iter().sum();
        let margin_of_error: f32 = 1e-6;

        assert!((sum - 1.0).abs() < margin_of_error);
    }
}
