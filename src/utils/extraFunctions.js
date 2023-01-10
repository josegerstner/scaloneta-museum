// recibe una url y una función a la cual 
export async function fetchData(url, setData) {
    const response = await fetch(url)
    console.log('response', response);
    if(response.status==200){
        const data = await response.json()
        setData(data)
    } else {
        setData(null)
    }
}

// Obtiene el código de bandera del país pasado dentro del array pasado
export const getCode = (country, flags) => {
    let code
    for (var key in flags)
        if(flags[key]==country) code = key
    return code
}

// Obtiene el nombre de la imagen de la formación inicial del partido
export const getFormation = (partido) => {
    const dia = partido?.fecha?.substring(0,2)
    const mes = partido?.fecha?.substring(3,5)
    const anio = partido?.fecha?.substring(6)
    const local = partido?.localia=='L'?"ARG":partido?.vs?.substring(0,3).toUpperCase()
    const visitante = partido?.localia=='V'?"ARG":partido?.vs?.substring(0,3).toUpperCase()
    return anio+mes+dia+"_"+removeAccents(local)+"-"+removeAccents(visitante)
}

// Reemplaza las letras con tilde por letras sin tilde (sí, la ñ también)
const removeAccents = (str) => {
    return str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 