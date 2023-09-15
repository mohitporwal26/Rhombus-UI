import { Button as BaseButton } from "antd";
import React from "react";

// type: "default" | "primary" | "ghost" | "dashed" | "link" | "text";
// size: "small" | "middle" | "large";
// htmlType: "button" | "submit" | "reset";

const Button = ({
  label,
  autoFocus = false,
  icon,
  type,
  onClick,
  htmlType,
  ...res
}) => {
  return (
    <BaseButton
      type={type}
      htmlType={htmlType}
      autoFocus={autoFocus}
      icon={icon}
      onClick={onClick}
      {...res}
    >
      {label}
    </BaseButton>
  );
};

export default Button;
