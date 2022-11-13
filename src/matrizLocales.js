const Local=require('./local');

function MatrizLocales(locales,centros){
    var contador=0;
    while(contador<locales){
        this.locales[contador]=new Local(centros);
        contador+=1;
    }
}

module.exports= MatrizLocales;