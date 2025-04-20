use crate::core::vector;

pub fn forward(one_hot_vector: &[f32], matrix: &[f32], rows: u32, columns: u32) -> Vec<f32> {
    let logits_vector = vector::multiply_vector_by_matrix(one_hot_vector, matrix, rows, columns);
    let logits_vector_softmax = vector::softmax_vector(&logits_vector);
    let probabilities_vector = logits_vector_softmax;

    probabilities_vector
}

pub fn evaluate(one_hot_vector: &[f32], matrix: &[f32], rows: u32, columns: u32) -> Vec<f32> {
    let logits_vector = vector::multiply_vector_by_matrix(one_hot_vector, matrix, rows, columns);
    let probabilities_vector = vector::softmax_vector(&logits_vector);

    probabilities_vector
}

#[cfg(test)]
mod tests {
    use super::*;

    const MARGIN_OF_ERROR: f32 = 1e-4;

    #[test]
    fn test_forward() {
        let one_hot_vector = vec![0.0, 1.0];
        let matrix = vec![
            1.0, 2.0, 3.0,
            4.0, 5.0, 6.0,
        ];
        let rows = 2;
        let columns = 3;

        let probabilities_vector = forward(&one_hot_vector, &matrix, rows, columns);
        let expected = vec![0.0900, 0.2447, 0.6652];        
        for (result_element, expected_element) in probabilities_vector.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }

    #[test]
    fn test_evaluate() {
        let one_hot_vector = vec![0.0, 1.0];
        let matrix = vec![
            7.0, 8.0, 9.0,
            4.0, 5.0, 6.0
        ];
        let rows = 2;
        let columns = 3;

        let probabilities_vector = evaluate(&one_hot_vector, &matrix, rows, columns);
        let expected = vec![0.0900, 0.2447, 0.6652];
        for (result_element, expected_element) in probabilities_vector.iter().zip(expected.iter()) {
            assert!((result_element - expected_element).abs() < MARGIN_OF_ERROR);
        }
    }
}
