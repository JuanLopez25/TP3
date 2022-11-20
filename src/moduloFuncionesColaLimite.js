var funcionesColaLimites= (function(){
    return {
        espacioEnCola: function(limiteCola,cola) {
            return (limiteCola-cola.length);
        },

        limitesCola:function(num1,num2,limiteColaDeEspera) {
            if (limiteColaDeEspera<num1){
                limiteColaDeEspera=num1;
            } else if (limiteColaDeEspera>num2) {
                limiteColaDeEspera=num2;
            }
            return limiteColaDeEspera;
        },
    }
})();


module.exports=funcionesColaLimites;