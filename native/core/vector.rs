pub fn vector_softmax(vector: &[f32]) -> Vec<f32> {
    let maximum_value = vector
        .iter()
        .cloned()
        .fold(f32::NEG_INFINITY, f32::max);

    let exponential_values: Vec<f32> = vector
        .iter()
        .map(|&v| (v - maximum_value).exp())
        .collect();

    let sum: f32 = exponential_values.iter().sum();
    let result = exponential_values.iter().map(|&v| v / sum).collect();
    
    result
}

pub fn vector_scalar_multiply(vector: &[f32], scalar: f32) -> Vec<f32> {
    let result = vector.iter()
        .map(|element_a| element_a * scalar)
        .collect();

    result
}

pub fn vector_subtract_vector(vector_a: &[f32], vector_b: &[f32]) -> Vec<f32> {
    assert_eq!(vector_a.len(), vector_b.len(), "Vectors must be the same length");

    let result: Vec<f32> = vector_a
        .iter()
        .zip(vector_b.iter())
        .map(|(a, b)| a - b)
        .collect();

    result
}

pub fn vector_outer_multiply_vector(vector_a: &[f32], vector_b: &[f32]) -> Vec<f32> {
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
    fn test_vector_softmax() {
        let vector = vec![2.0, 1.0, 0.1];

        let result = vector_softmax(&vector);
        let sum: f32 = result.iter().sum();

        assert!((sum - 1.0).abs() < MARGIN_OF_ERROR);
    }

    #[test]
    fn test_vector_scalar_multiply() {
        let vector = vec![2.0, 1.0, 0.1];
        let scalar = 2.3;

        let result = vector_scalar_multiply(&vector, scalar);
        let expected = vec![4.6, 2.3, 0.23];
        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_vector_subtract_vector() {
        let vector_a = vec![0.8, 0.1, 0.1];
        let vector_b = vec![0.0, 1.0, 0.0];

        let result = vector_subtract_vector(&vector_a, &vector_b);
        let expected = vec![0.8, -0.9, 0.1];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_vector_outer_multiply_vector() {
        let vector_a = vec![1.0, 2.0];
        let vector_b = vec![3.0, 4.0];

        let result = vector_outer_multiply_vector(&vector_a, &vector_b);
        let expected = vec![3.0, 4.0, 6.0, 8.0];

        for (result_element, expected_element) in result.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }
}
