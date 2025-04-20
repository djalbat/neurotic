pub fn matrix_scalar_multiply(matrix: &[f32], scalar: f32) -> Vec<f32> {
    let result = matrix.iter()
        .map(|element_a| element_a * scalar)
        .collect();

    result
}

pub fn matrix_subtract_matrix(matrix_a: &[f32], matrix_b: &[f32]) -> Vec<f32> {
    assert_eq!(matrix_a.len(), matrix_b.len(), "Matrices must be the same length");

    let result: Vec<f32> = matrix_a
        .iter()
        .zip(matrix_b.iter())
        .map(|(element_a, element_b)| element_a - element_b)
        .collect();

    result
}

pub fn vector_multiply_matrix(vector: &[f32], matrix: &[f32], rows: u32, columns: u32) -> Vec<f32> {
    assert_eq!(matrix.len(), (rows * columns) as usize, "Matrix size mismatch");
    assert_eq!(vector.len(), rows as usize, "Vector size mismatch");

    let mut result = Vec::with_capacity(rows as usize);

    for column in 0..columns {
        let mut sum = 0.0;

        for row in 0..rows {
            let index = (row * columns + column) as usize;

            sum += matrix[index] * vector[row as usize];
        }

        result.push(sum);
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    const MARGIN_OF_ERROR: f32 = 1e-6;

    #[test]
    fn test_vector_multiply_matrix() {
        let vector = vec![1.0, 0.0, 1.0, 0.0];
        let matrix = vec![
            1.0, 5.0,  9.0,
            2.0, 6.0, 10.0,
            3.0, 7.0, 11.0,
            4.0, 8.0, 12.0,
        ];
        let rows = 4;
        let columns = 3;

        let result = vector_multiply_matrix(&vector, &matrix, rows, columns);
        let expected = vec![4.0, 12.0, 20.0];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_matrix_subtract_matrix() {
        let matrix_a = vec![0.8, 0.1, 0.1];
        let matrix_b = vec![0.0, 1.0, 0.0];

        let result = matrix_subtract_matrix(&matrix_a, &matrix_b);
        let expected = vec![0.8, -0.9, 0.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_matrix_scalar_multiply() {
        let matrix = vec![2.0, 1.0, 0.1];
        let scalar = 2.3;

        let result = matrix_scalar_multiply(&matrix, scalar);
        let expected = vec![4.6, 2.3, 0.23];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }
}
