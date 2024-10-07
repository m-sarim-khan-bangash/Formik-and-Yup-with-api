import React from "react";
import { Form } from "react-bootstrap";

export const TextArea = ({
  name,
  rows = 3,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        as="textarea"
        name={name}
        rows={rows}
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
