pub fn raindrops(n: u32) -> String {
    fn is_factor(a: u32, b: u32) -> bool {
        b % a == 0
    }

    let mut ans = String::new();

    if is_factor(3, n) {
        ans.push_str("Pling");
    }
    if is_factor(5, n) {
        ans.push_str("Plang");
    }
    if is_factor(7, n) {
        ans.push_str("Plong");
    }

    if ans.is_empty() {
        ans.push_str(&n.to_string());
    }

    ans
}
