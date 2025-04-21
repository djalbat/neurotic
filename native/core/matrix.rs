pub fn add_matrix_to_matrix(matrix_a: &[f32], matrix_b: &[f32]) -> Vec<f32> {
    let result: Vec<f32> = matrix_a
        .iter()
        .zip(matrix_b.iter())
        .map(|(element_a, element_b)| element_a + element_b)
        .collect();

    result
}

pub fn divide_matrix_by_scalar(matrix: &[f32], scalar: f32) -> Vec<f32> {
    let result = matrix.iter()
        .map(|element_a| element_a / scalar)
        .collect();

    result
}

pub fn multiply_matrix_by_scalar(matrix: &[f32], scalar: f32) -> Vec<f32> {
    let result = matrix.iter()
        .map(|element_a| element_a * scalar)
        .collect();

    result
}

pub fn subtract_matrix_from_matrix(matrix_a: &[f32], matrix_b: &[f32]) -> Vec<f32> {
    let result: Vec<f32> = matrix_a
        .iter()
        .zip(matrix_b.iter())
        .map(|(element_a, element_b)| element_b - element_a)
        .collect();

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    const MARGIN_OF_ERROR: f32 = 1e-6;

    #[test]
    fn test_add_matrix_to_matrix() {
        let matrix_a = vec![1.8, 2.1];
        let matrix_b = vec![1.0, 0.0];

        let result = add_matrix_to_matrix(&matrix_a, &matrix_b);
        let expected = vec![2.8, 2.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_divide_matrix_by_scalar() {
        let matrix = vec![2.0, 1.0, 0.1];
        let scalar = 2.0;

        let result = divide_matrix_by_scalar(&matrix, scalar);
        let expected = vec![1.0, 0.5, 0.05];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_multiply_matrix_by_scalar() {
        let matrix = vec![2.0, 1.0, 0.1];
        let scalar = 2.3;

        let result = multiply_matrix_by_scalar(&matrix, scalar);
        let expected = vec![4.6, 2.3, 0.23];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_subtract_matrix_from_matrix() {
        let matrix_a = vec![0.8, 0.1, 0.1, 0.2];
        let matrix_b = vec![0.0, 1.0, 0.0, 0.3];

        let result = subtract_matrix_from_matrix(&matrix_a, &matrix_b);
        let expected = vec![-0.8, 0.9, -0.1, 0.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }
}
