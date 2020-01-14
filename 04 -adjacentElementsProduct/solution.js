function adjacentElementsProduct(inputArray) {
     var MaxProduct = -9000;

    for (elementA = 0; elementA < inputArray.length-1; elementA++){
        let elementB = elementA + 1;

        let currentProduct = inputArray[elementA] * inputArray[elementB];

        if (currentProduct > MaxProduct){
            MaxProduct = currentProduct;
        }
    }

    return MaxProduct;
}

exports.adjacentElementsProduct = adjacentElementsProduct;