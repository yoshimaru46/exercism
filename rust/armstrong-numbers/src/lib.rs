pub fn is_armstrong_number(num: u32) -> bool {
    let digits: Vec<_> = num
        .to_string()
        .chars()
        .map(|d| d.to_digit(10).unwrap())
        .collect();

    digits
        .iter()
        .map(|d| d.pow(digits.len() as u32))
        .sum::<u32>()
        == num
}
