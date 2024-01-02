import React from "react";

// Styles
import * as Styles from "./styles";

const CustomButton = ({ children, startIcon, ...props }) => {
  return (
    <Styles.CustomButtonContainer {...props}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
