function centuryFromYear(year) {
    
    let s_year = year.toString( );
    let i_return = 0;
    
    
    if (year <= 100){
        i_return = 1;
    }else{
        
        
        if(year < 1000){
            i_return = parseInt(s_year[0]);
        }else{
            i_return = parseInt(s_year.substring(0,2));
        }

        
        if (parseInt(s_year[s_year.length-2]) > 0 || parseInt(s_year[s_year.length-1]) > 0){
            i_return += 1;
        }
        
    } 
    
    return i_return;
    
}
