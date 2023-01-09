// Obtiene el código de bandera del país pasado dentro del array pasado
export const getCode = (country, flags) => {
    let code
    for (var key in flags)
        if(flags[key]==country) code = key
    return code
}

// 
export const getFormation = (partido) => {
    const dia = partido?.fecha?.substring(0,2)
    const mes = partido?.fecha?.substring(3,5)
    const anio = partido?.fecha?.substring(6)
    const local = partido?.localia=='L'?"ARG":partido?.vs?.substring(0,3).toUpperCase()
    const visitante = partido?.localia=='V'?"ARG":partido?.vs?.substring(0,3).toUpperCase()
    return anio+mes+dia+"_"+removeAccents(local)+"-"+removeAccents(visitante)
}

const removeAccents = (str) => {
    return str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 