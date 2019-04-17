function ekle(){
    var sayici=0;
    sayici++;
    return sayici;
}


var ekle2=(function(){
    var sayici=0;
    return function(){
        return sayici+=1; 
    }
})();


