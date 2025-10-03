"use client"

import { useModalState } from "@/hooks/use-modal-state"
import { AdvertiserDisclosureModal } from "./modals/advertiser-disclosure-modal"
import { TermsConditionsModal } from "./modals/terms-conditions-modal"

export function ModalProvider() {
  const { modalState, closeModal, openModal } = useModalState()

  return (
    <>
      <AdvertiserDisclosureModal
        isOpen={modalState.advertiserDisclosure}
        onClose={() => closeModal("advertiserDisclosure")}
      />

      <TermsConditionsModal isOpen={modalState.termsConditions} onClose={() => closeModal("termsConditions")} />
    </>
  )
}
