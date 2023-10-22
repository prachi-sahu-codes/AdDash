import React, { useState } from "react";
import { LayoutContainer } from "../../layout";
import { AdForm, ComponentContainer, SuccessModal } from "../../components";

const TextAd = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <LayoutContainer>
        <ComponentContainer title="Create Text & Media">
          <AdForm setShowModal={setShowModal} />
        </ComponentContainer>
      </LayoutContainer>
      {showModal && <SuccessModal />}
    </div>
  );
};

export default TextAd;
