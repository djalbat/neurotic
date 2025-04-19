fn main() {
    let greeting = get_message();
    println!("{}", greeting);
}

fn get_message() -> &'static str {
    "Hello again from Rust"
}
