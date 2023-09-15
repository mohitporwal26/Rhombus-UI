import React from "react";
import { Form, Input } from "antd";

// size: "small" | "middle" | "large";

const InputField = ({
  placeholder,
  value,
  disabled = false,
  onChange,
  defaultValue,
  allowClear = false,
  bordered,
  size,
  required,
  name,
  className,
  ...res
}) => {
  return (
    <Form.Item className={"formItem"} required={required} name={name}>
      <Input
        size={size}
        bordered={bordered}
        allowClear={allowClear}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue || value}
        disabled={disabled}
        className={className}
        {...res}
      />
    </Form.Item>
  );
};

export default InputField;
