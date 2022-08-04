package blackjack

// ParseCard returns the integer sum of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	value1 := ParseCard(card1)
	value2 := ParseCard(card2)
	dealerValue := ParseCard(dealerCard)
	sum := value1 + value2
	switch {
	case sum <= 11:
		return "H"
	case sum >= 12 && sum <= 16:
		if dealerValue >= 7 {
			return "H"
		} else {
			return "S"
		}
	case sum >= 17 && sum <= 20:
		return "S"
	case sum == 21:
		if dealerValue >= 10 {
			return "S"
		} else {
			return "W"
		}
	case sum == 22:
		return "P"
	}
	panic("should not reach here")
}
