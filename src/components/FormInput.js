import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const FormInput = ({ onAdd, notify }) => {
  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");

  const addNewItem = () => {
    if (!que || !ans) {
      notify("من فضلك اكمل البيانات", "Error");
      return;
    }

    const newItem = { id: Math.random(), que, ans };
    onAdd(newItem);

    setQue("");
    setAns("");
  };

  return (
    <Row className="p-2">
      <Col sm="5">
        <Form.Control
          value={que}
          onChange={(e) => setQue(e.target.value)}
          type="text"
          placeholder="أدخل السؤال"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          type="text"
          placeholder="أدخل الاجابة"
        />
      </Col>
      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100">
          إضافة
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
