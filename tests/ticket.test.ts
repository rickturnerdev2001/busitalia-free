import { TicketDuration } from "@/types/TicketDuration";
import { TicketType } from "@/types/TicketType";
import { TicketZone } from "@/types/TicketZone";
import { composeTicketName } from "@/utils/functions";

test("genera la label per un biglietto", () => {
  expect(
    composeTicketName(
      TicketZone.URB_PD_T1,
      TicketType.URBANO_PD_TU1_90_MINUTI,
      TicketDuration.NINETY_MINUTES
    )
  ).toBe("BIGL. URB. PD TU1 DA 90'");

  expect(
    composeTicketName(
      TicketZone.URB_PD_T1,
      TicketType.FAMIGLIA_PD_TU1_6H_5_PERSONE,
      TicketDuration.SIX_HOURS
    )
  ).toBe("BIGL. FAMIGLIA PD TU1 6H X 5 PERS");

  expect(
    composeTicketName(
      TicketZone.URB_PD_T1,
      TicketType.URBANO_PD_TU1_GIORNALIERO,
      TicketDuration.DAILY
    )
  ).toBe("BIGL. URB. PD TU1 GIORNALIERO");

  expect(
    composeTicketName(
      TicketZone.URB_PD_T2,
      TicketType.TURISTICO_3_GIORNI,
      TicketDuration.THREE_DAYS
    )
  ).toBe("BIGL. TURISTICO 3 GIORNI");
  expect(
    composeTicketName(
      TicketZone.URB_PD_T2,
      TicketType.URBANO_PD_TU2_DA_100_MINUTI,
      TicketDuration.ONE_HUNDRED_MINUTES
    )
  ).toBe("BIGL. URB. PD TU2 DA 100'");
  expect(
    composeTicketName(TicketZone.EXTURB_PD, TicketType.CS_PD_CL1, null)
  ).toBe("CORSA SEMPLICE PADOVA CL. 01");
});
