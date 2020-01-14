function shapeArea(n) {
    var area = 0;
  
        for (i=1; i<=n; i++){
            area += horizontalLine(i);
        }
        if (n > 1){
            area = area * 2 - horizontalLine(n);
        }
          
    return area;

    function horizontalLine( i ) {
        return i * 2 - 1;
    }
}

exports.shapeArea = shapeArea;