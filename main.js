let EluxNavigateTo = {
    'ELUX_BR': (params) => go(domains.elux_br,params),
    'CUIDA_BR': (params) => go(domains.cuida,params),
    'PROJETA_BR': (params) => go(domains.projeta,params),
    'CONT_BR': (params) => go(domains.conti,params),
    'SHOPCLUB_BR': (params) => go(domains.sc_br),
    'MADEMSA_CL': (params) => go(domains.mad_cl),
    'FENSA_CL': (params) => go(domains.fensa_cl),
    'ELUX_CL': (params) => go(domains.elux_cl),
    'SOMELA_CL': (params) => go(domains.somela_cl),
    'SHOPCLUB_CL': (params) => go(domains.sc_cl),
    'ELUX_AR': (params) => go(domains.elux_ar),
    'GAFA_AR': (params) => go(domains.gafa_ar),
    'SHOPCLUB_AR': (params) => go(domains.sc_ar),
    'ELUX_CO': (params) => go(domains.elux_co),
    'ELUX_PE': (params) => go(domains.elux_pe),
    'ELUX_EC': (params) => go(domains.elux_ec),
    'SHOPCLUB_CO': (params) => go(domains.sc_co),
    'FRIGIDAIRE_MX': (params) => go(domains.fr_mx),
    'FRIGIDAIRE_PR': (params) => go(domains.fr_pr),
    'INSTALA_BR': (params) => go(domains.inst_br),
    'SHOPCLUB_PE': (params) => go(domains.sc_pe)
}

let domains = {
    elux_br : "https://loja.electrolux.com.br/",
    cuida : "https://cuida.electrolux.com.br/",
    projeta : "https://projeta.electrolux.com.br",
    conti : "https://www.continentalbrasil.com.br/",
    sc_br : "https://www.shopclub.com.br/",
    mad_cl : "https://www.tiendamademsa.cl/",
    fensa_cl : "https://www.tiendafensa.cl/",
    elux_cl : "https://www.electrolux.cl/",
    somela_cl : "https://www.somela.cl/",
    sc_cl : "https://www.shopclub.cl/",
    elux_ar : "https://www.tienda.electrolux.com.ar/",
    gafa_ar : "https://www.tienda.gafa.com.ar/",
    sc_ar : "https://www.shopclub.com.ar/",
    sc_pe: "https://www.shopclub.com.pe/",
    elux_co : "https://www.electrolux.com.co/",
    elux_pe : "https://www.electrolux.com.pe/",
    elux_ec : "https://www.electrolux.com.ec/",
    sc_co : "https://www.shopclub.com.co/",
    fr_mx : "https://www.frigidaire.com.mx/",
    fr_pr : "https://www.frigidaire.com.pr/",
    inst_br : "https://instala.electrolux.com.br/",

}

let go = (domain, params = false) => {
    let parsedParams = params? '' : Object.entries(params).map(item => item.join('=')).join('&');
    let parsedUrl = `${domain}?${parsedParams}`;
    location = parsedUrl;
    return go
}
