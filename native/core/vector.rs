pub fn softmax_vector(vector: &[f32]) -> Vec<f32> {
    let maximum_value = vector
        .iter()
        .cloned()
        .fold(f32::NEG_INFINITY, f32::max);

    let exponential_values: Vec<f32> = vector
        .iter()
        .map(|&element| (element - maximum_value).exp())
        .collect();

    let sum: f32 = exponential_values.iter().sum();
    let result = exponential_values.iter().map(|&element| element / sum).collect();
    
    result
}

pub fn add_vector_to_vector(vector_a: &[f32], vector_b: &[f32]) -> Vec<f32> {
    let result: Vec<f32> = vector_a
        .iter()
        .zip(vector_b.iter())
        .map(|(element_a, element_b)| element_a + element_b)
        .collect();

    result
}

pub fn divide_vector_by_scalar(vector: &[f32], scalar: f32) -> Vec<f32> {
    let result = vector.iter()
        .map(|element_a| element_a / scalar)
        .collect();

    result
}

pub fn multiply_vector_by_scalar(vector: &[f32], scalar: f32) -> Vec<f32> {
    let result = vector.iter()
        .map(|element_a| element_a * scalar)
        .collect();

    result
}

pub fn multiply_vector_by_matrix(vector: &[f32], matrix: &[f32], rows: u32, columns: u32) -> Vec<f32> {
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

pub fn subtract_vector_from_vector(vector_a: &[f32], vector_b: &[f32]) -> Vec<f32> {
    let result: Vec<f32> = vector_a
        .iter()
        .zip(vector_b.iter())
        .map(|(element_a, element_b)| element_b - element_a)
        .collect();

    result
}

pub fn outer_multiply_vector_by_vector(vector_a: &[f32], vector_b: &[f32]) -> Vec<f32> {
    let vector_a_length = vector_a.len();
    let vector_b_length = vector_b.len();
    let rows = vector_a_length;
    let columns = vector_b_length;

    let mut result = Vec::with_capacity(rows * columns);

    for &element_a in vector_a {
        for &element_b in vector_b {
            result.push(element_a * element_b);
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    const MARGIN_OF_ERROR: f32 = 1e-6;

    #[test]
    fn test_softmax_vector() {
        let vector = vec![2.0, 1.0, 0.1];

        let result = softmax_vector(&vector);
        let sum: f32 = result.iter().sum();

        assert!((sum - 1.0).abs() < MARGIN_OF_ERROR);
    }

    #[test]
    fn test_add_vector_to_vector() {
        let vector_a = vec![0.8, 0.1];
        let vector_b = vec![0.8, 1.0];

        let result = add_vector_to_vector(&vector_a, &vector_b);
        let expected = vec![1.6, 1.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_divide_vector_by_scalar() {
        let vector = vec![4.0, 1.0, 0.1];
        let scalar = 2.0;

        let result = divide_vector_by_scalar(&vector, scalar);
        let expected = vec![2.0, 0.5, 0.05];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_multiply_vector_by_scalar() {
        let vector = vec![2.0, 1.0, 0.1];
        let scalar = 2.3;

        let result = multiply_vector_by_scalar(&vector, scalar);
        let expected = vec![4.6, 2.3, 0.23];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_multiply_vector_by_matrix() {
        let vector = vec![1.0, 0.0, 1.0, 0.0];
        let matrix = vec![
            1.0, 5.0,  9.0,
            2.0, 6.0, 10.0,
            3.0, 7.0, 11.0,
            4.0, 8.0, 12.0,
        ];
        let rows = 4;
        let columns = 3;

        let result = multiply_vector_by_matrix(&vector, &matrix, rows, columns);
        let expected = vec![4.0, 12.0, 20.0];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_subtract_vector_from_vector() {
        let vector_a = vec![0.8, 0.1, 0.1];
        let vector_b = vec![0.0, 1.0, 0.0];

        let result = subtract_vector_from_vector(&vector_a, &vector_b);
        let expected = vec![-0.8, 0.9, -0.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_outer_multiply_vector_by_vector() {
        let vector_a = vec![1.0, 2.0];
        let vector_b = vec![3.0, 4.0];

        let result = outer_multiply_vector_by_vector(&vector_a, &vector_b);
        let expected = vec![3.0, 4.0, 6.0, 8.0];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }
}
