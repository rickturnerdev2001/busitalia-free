import { TicketDuration } from "@/types/TicketDuration";
import { TicketType } from "@/types/TicketType";
import { TicketZone } from "@/types/TicketZone";
import {
  EXT_BAGAGLIO,
  EXT_CLASSE_1,
  EXT_CLASSE_10,
  EXT_CLASSE_11,
  EXT_CLASSE_12,
  EXT_CLASSE_13,
  EXT_CLASSE_2,
  EXT_CLASSE_3,
  EXT_CLASSE_4,
  EXT_CLASSE_5,
  EXT_CLASSE_6,
  EXT_CLASSE_7,
  EXT_CLASSE_8,
  EXT_CLASSE_9,
  EXT_CS_PD,
  EXT_MG_JESOLO,
  EXT_MG_VMP,
  EXT_PD,
  EXT_PD_JESOLO,
  FAMILY_LABEL,
  FIVE_DAYS_LABEL,
  FIVE_PEOPLE_LABEL,
  GIORNALIERO_LABEL,
  NINETY_MINUTES_LABEL,
  ONE_HUNDRED_MINUTES_LABEL,
  PADOVA_LABEL,
  SIX_HOURS_LABEL,
  THREE_DAYS_LABEL,
  TICKET_LABEL,
  TURISTICO_LABEL,
  URBAN_LABEL,
  URBAN_TYPE_1_LABEL,
  URBAN_TYPE_2_LABEL,
} from "./tickets/constants";
import { WHITESPACE } from "./typography";

export function getTicketNameFromTicketType(ticketType: TicketType) {
  switch (ticketType) {
    case TicketType.CS_PD_CL1:
    //
    case TicketType.CS_PD_CL2:
    //
    case TicketType.CS_PD_CL3:
    //
    case TicketType.CS_PD_CL4:
    //
    case TicketType.CS_PD_CL5:
    //
    case TicketType.CS_PD_CL6:
    //
    case TicketType.CS_PD_CL7:
    //
    case TicketType.CS_PD_CL8:
    //
    case TicketType.CS_PD_CL9:
    //
    case TicketType.CS_PD_CL10:
    //
    case TicketType.CS_PD_CL11:
    //
    case TicketType.CS_PD_CL12:
    //
    case TicketType.CS_PD_CL13:
    //
    case TicketType.FAMIGLIA_PD_TU1_6H_5_PERSONE:
    //

    case TicketType.MGAB_AEROPORTO_VENEZIA_MP_BAGAGLIO:
    //
    case TicketType.MG_JESOLO_BAGAGLIO:
    //
    case TicketType.TURISTICO_3_GIORNI:
    //
    case TicketType.FAMILGLIA_PD_TU2_6H_5_PERSONE:
    //
    case TicketType.PD_JESOLO_BAGAGLIO:
    //
    case TicketType.PD_AEROPORTO_VENEZIA_MP_BAGAGLIO:
    //
    case TicketType.TURISTICO_5_GIORNI:
    //
    case TicketType.URBANO_PD_TU1_90_MINUTI:
    //
    case TicketType.URBANO_PD_TU1_90_MINUTI:
    //
    case TicketType.URBANO_PD_TU1_GIORNALIERO:
    //
    case TicketType.URBANO_PD_TU2_DA_100_MINUTI:
    //
    case TicketType.URBANO_PD_TU2_GIORNALIERO:
    //
  }
}

// Questa funzione dovrebbe essere privata, ma la exporto per i test
export function composeTicketName(
  zone: TicketZone,
  type: TicketType,
  duration: TicketDuration | null
) {
  let ticketName = "";
  const isUrban = zone !== TicketZone.EXTURB_PD;
  const isTurist = [
    TicketType.TURISTICO_3_GIORNI,
    TicketType.TURISTICO_5_GIORNI,
  ].includes(type);
  const isFamily = [
    TicketType.FAMIGLIA_PD_TU1_6H_5_PERSONE,
    TicketType.FAMILGLIA_PD_TU2_6H_5_PERSONE,
  ].includes(type);
  const isTu1 = [
    TicketType.URBANO_PD_TU1_90_MINUTI,
    TicketType.URBANO_PD_TU1_GIORNALIERO,
    TicketType.FAMIGLIA_PD_TU1_6H_5_PERSONE,
  ].includes(type);

  if (isUrban) {
    let ticketName = TICKET_LABEL;
    if (isFamily) {
      ticketName = appendToTicketLabel(ticketName, FAMILY_LABEL);
    }
    if (isTurist) {
      ticketName = appendToTicketLabel(ticketName, TURISTICO_LABEL);
    }
    if (!isFamily && !isTurist) {
      ticketName = appendToTicketLabel(ticketName, URBAN_LABEL);
    }
    if (!isTurist) {
      ticketName = appendToTicketLabel(ticketName, PADOVA_LABEL);
      if (isTu1) {
        ticketName = appendToTicketLabel(ticketName, URBAN_TYPE_1_LABEL);
      } else {
        ticketName = appendToTicketLabel(ticketName, URBAN_TYPE_2_LABEL);
      }
    }

    switch (duration) {
      case TicketDuration.DAILY:
        ticketName = appendToTicketLabel(ticketName, GIORNALIERO_LABEL);
        break;
      case TicketDuration.FIVE_DAYS:
        ticketName = appendToTicketLabel(ticketName, FIVE_DAYS_LABEL);

        break;
      case TicketDuration.NINETY_MINUTES:
        ticketName = appendToTicketLabel(ticketName, NINETY_MINUTES_LABEL);

        break;
      case TicketDuration.ONE_HUNDRED_MINUTES:
        ticketName = appendToTicketLabel(ticketName, ONE_HUNDRED_MINUTES_LABEL);

        break;
      case TicketDuration.SIX_HOURS:
        ticketName = appendToTicketLabel(ticketName, SIX_HOURS_LABEL);

        break;
      case TicketDuration.THREE_DAYS:
        ticketName = appendToTicketLabel(ticketName, THREE_DAYS_LABEL);

        break;
    }

    if (isFamily) {
      ticketName = appendToTicketLabel(ticketName, FIVE_PEOPLE_LABEL);
    }
  } else {
    if (type == TicketType.MGAB_AEROPORTO_VENEZIA_MP_BAGAGLIO) {
      ticketName = appendToTicketLabel(ticketName, EXT_MG_VMP);
      ticketName = appendToTicketLabel(ticketName, EXT_BAGAGLIO);
    } else if (type == TicketType.PD_JESOLO_BAGAGLIO) {
      ticketName = appendToTicketLabel(ticketName, EXT_PD_JESOLO);
      ticketName = appendToTicketLabel(ticketName, EXT_BAGAGLIO);
    } else if (type == TicketType.MG_JESOLO_BAGAGLIO) {
      ticketName = appendToTicketLabel(ticketName, EXT_MG_JESOLO);
      ticketName = appendToTicketLabel(ticketName, EXT_BAGAGLIO);
    } else if (type == TicketType.CS_PD_CL1) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_1);
    } else if (type == TicketType.CS_PD_CL2) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_2);
    } else if (type == TicketType.CS_PD_CL3) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_3);
    } else if (type == TicketType.CS_PD_CL4) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_4);
    } else if (type == TicketType.CS_PD_CL5) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_5);
    } else if (type == TicketType.CS_PD_CL6) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_6);
    } else if (type == TicketType.CS_PD_CL7) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_7);
    } else if (type == TicketType.CS_PD_CL8) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_8);
    } else if (type == TicketType.CS_PD_CL9) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_9);
    } else if (type == TicketType.CS_PD_CL10) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_10);
    } else if (type == TicketType.CS_PD_CL11) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_11);
    } else if (type == TicketType.CS_PD_CL12) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_12);
    } else if (type == TicketType.CS_PD_CL13) {
      ticketName = appendToTicketLabel(ticketName, EXT_CS_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_PD);
      ticketName = appendToTicketLabel(ticketName, EXT_CLASSE_13);
    }
  }
  return ticketName;
}

function appendToTicketLabel(ticketLabel: string, additionalLabel: string) {
  ticketLabel += WHITESPACE;
  ticketLabel += additionalLabel;

  return ticketLabel;
}
