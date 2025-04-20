pub fn forward(one_hot_vector: &[f32], matrix: &[f32], rows: u32, columns: u32) -> Vec<f32> {
    let logits_vector = multiply_vector_by_matrix(one_hot_vector, matrix, rows, columns);
    let logits_vector_softmax = softmax_vector(&logits_vector);
    let probabilities_vector = logits_vector_softmax; ///

    probabilities_vector
}
