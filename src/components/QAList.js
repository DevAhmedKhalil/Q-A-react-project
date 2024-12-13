import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

const QA_List = ({ data, deleteOneItem }) => {
  // Getting Data From Local Storage
  const dataLocalStorage = JSON.parse(localStorage.getItem("items"));

  // Deleting One Question From Array
  const onDeleteItem = (ID) => {
    // if (data.length > 0) {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deleteOneItem(question);
    }
  };

  return (
    <Row className="my-3">
      <Accordion defaultActiveKey="0">
        {localStorage.getItem("items") != null ? (
          dataLocalStorage.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header className="custom-accordion-header">
                  <div>{item.que}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="px-3 d-inline">{item.ans}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color"
                  >
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد اسئله الان</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QA_List;
