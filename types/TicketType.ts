/*
    ESEMPI:
        - Un biglietto da Noventa a Padova centro conta come URBANO_PD_TU2_DA_100_MINUTI,
        - Un biglietto da Padova a Rovolon conta come CS_PD_CL4
*/

export enum TicketType {
    // Urbano Padova TU1
    URBANO_PD_TU1_90_MINUTI,
    FAMIGLIA_PD_TU1_6H_5_PERSONE,
    URBANO_PD_TU1_GIORNALIERO,
    
    //  Conurbazione Padova TU2
    URBANO_PD_TU2_DA_100_MINUTI,
    FAMILGLIA_PD_TU2_6H_5_PERSONE,
    URBANO_PD_TU2_GIORNALIERO,
    TURISTICO_3_GIORNI,
    TURISTICO_5_GIORNI,

    // TODO: Urbano Rovigo

    // Extraurbano Padova
    PD_AEROPORTO_VENEZIA_MP_BAGAGLIO,
    MGAB_AEROPORTO_VENEZIA_MP_BAGAGLIO,
    PD_JESOLO_BAGAGLIO,
    MG_JESOLO_BAGAGLIO,
    CS_PD_CL1,
    CS_PD_CL2,
    CS_PD_CL3,
    CS_PD_CL4,
    CS_PD_CL5,
    CS_PD_CL6,
    CS_PD_CL7,
    CS_PD_CL8,
    CS_PD_CL9,
    CS_PD_CL10,
    CS_PD_CL11,
    CS_PD_CL12,
    CS_PD_CL13,

    // TODO: Extraurbano Rovigo
    
}