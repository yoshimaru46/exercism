package lasagna

const (
	DefaultTimePerLayer          = 2
	NoodlesQuantityPerLayerGrams = 50
	SauceQuantityPerLayerLiters  = 0.2
	NoodlesLayerName             = "noodles"
	SauceLayerName               = "sauce"
)

func PreparationTime(layers []string, timePerLayer int) int {
	if timePerLayer == 0 {
		timePerLayer = DefaultTimePerLayer
	}
	return len(layers) * timePerLayer
}

func Quantities(layers []string) (noodlesQuantity int, sauceQuantity float64) {
	for _, layer := range layers {
		switch layer {
		case NoodlesLayerName:
			noodlesQuantity += NoodlesQuantityPerLayerGrams
		case SauceLayerName:
			sauceQuantity += SauceQuantityPerLayerLiters
		}
	}
	return
}

func AddSecretIngredient(friendList []string, ownList []string) []string {
	if len(friendList) > 0 {
		ownList[len(ownList)-1] = friendList[len(friendList)-1]
	}
	return ownList
}

func ScaleRecipe(amounts []float64, portionsCount int) []float64 {
	scaledAmounts := make([]float64, len(amounts))
	scaleFactor := float64(portionsCount) / 2
	for i, amount := range amounts {
		scaledAmounts[i] = amount * scaleFactor
	}
	return scaledAmounts
}
