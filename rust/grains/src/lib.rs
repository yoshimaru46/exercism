pub fn square(s: u32) -> u64 {
    if !(1..=64).contains(&s) {
        panic!("Square must be between 1 and 64");
    }
    2_u64.pow(s - 1)
}

pub fn total() -> u64 {
    (1..=64).into_iter().map(square).sum()
}
