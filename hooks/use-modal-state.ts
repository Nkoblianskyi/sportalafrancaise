"use client"

import { useState } from "react"
import type { ModalState } from "@/types/betting"

export function useModalState() {
  const [modalState, setModalState] = useState<ModalState>({
    ageVerification: false,
    advertiserDisclosure: false,
    termsConditions: false,
    cookieBanner: false,
  })

  const closeModal = (modalType: keyof ModalState) => {
    setModalState((prev) => ({ ...prev, [modalType]: false }))
  }

  const openModal = (modalType: keyof ModalState) => {
    setModalState((prev) => ({ ...prev, [modalType]: true }))
  }

  return { modalState, closeModal, openModal }
}
