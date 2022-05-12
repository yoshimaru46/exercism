use time::{Duration, PrimitiveDateTime as DateTime};

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
    let gigaseconds = Duration::new(1_000_000_000, 0);
    start + gigaseconds
}
