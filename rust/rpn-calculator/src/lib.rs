#[derive(Debug)]
pub enum CalculatorInput {
    Add,
    Subtract,
    Multiply,
    Divide,
    Value(i32),
}

pub fn evaluate(inputs: &[CalculatorInput]) -> Option<i32> {
    let mut stack: Vec<i32> = Vec::new();

    for e in inputs.iter() {
        match e {
            CalculatorInput::Value(val) => stack.push(*val),
            _ => {
                if stack.len() < 2 {
                    return None;
                } else {
                    let b = stack.pop().unwrap();
                    let a = stack.pop().unwrap();
                    match e {
                        CalculatorInput::Add => stack.push(a + b),
                        CalculatorInput::Subtract => stack.push(a - b),
                        CalculatorInput::Multiply => stack.push(a * b),
                        CalculatorInput::Divide => stack.push(a / b),
                        _ => {}
                    };
                }
            }
        }
    }
    match stack.len() {
        1 => stack.pop(),
        _ => None,
    }
}
