import React from "react";
import { LayoutContainer } from "../../layout";
import { AdForm, ComponentContainer } from "../../components";

const TextAd = () => {
  return (
    <LayoutContainer>
      <ComponentContainer title="Create Text & Media">
        <AdForm />
      </ComponentContainer>
    </LayoutContainer>
  );
};

export default TextAd;
