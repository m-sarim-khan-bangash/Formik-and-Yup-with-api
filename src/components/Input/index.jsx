import React from "react";
import { Form } from "react-bootstrap";

export const Input = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
