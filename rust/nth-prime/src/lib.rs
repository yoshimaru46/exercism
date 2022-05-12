pub fn nth(n: u32) -> u32 {
    use primes::{PrimeSet, Sieve};
    let mut pset = Sieve::new();
    let (_ix, x) = pset
        .iter()
        .enumerate()
        .skip(n as usize)
        .take(1)
        .next()
        .unwrap();
    x as u32
}
