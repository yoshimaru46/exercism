fn is_yelling(message: &str) -> bool {
    let have_letters: bool = message.chars().filter(|x| x.is_alphabetic()).count() > 0;
    message.to_uppercase() == message && have_letters
}

pub fn reply(message: &str) -> &str {
    match message.trim() {
        m if m.trim().len() == 0 => "Fine. Be that way!",
        m if m.ends_with("?") && is_yelling(m) => "Calm down, I know what I'm doing!",
        m if m.ends_with("?") => "Sure.",
        m if is_yelling(m) => "Whoa, chill out!",
        _ => "Whatever.",
    }
}
