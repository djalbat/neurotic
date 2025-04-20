pub mod core;

fn main() {
    let matrix = vec![
        1.0, 2.0, 3.0,
        4.0, 5.0, 6.0,
    ];
    let vector = vec![1.0, 0.0, 1.0];
    let rows = 2;
    let cols = 3;

    let result = core::vector_matrix_multiply(&vector, &matrix, rows, cols);

    println!("Result: {:?}", result);
}
