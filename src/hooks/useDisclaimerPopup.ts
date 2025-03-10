
import { useState, useEffect } from "react";

export default function useDisclaimerPopup() {
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState<boolean>(true);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      setIsDisclaimerAccepted(false);
      setIsPopupOpen(true);
    }
  }, []);

  const acceptDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsDisclaimerAccepted(true);
    setIsPopupOpen(false);
  };

  return {
    isDisclaimerAccepted,
    isPopupOpen,
    acceptDisclaimer
  };
}
