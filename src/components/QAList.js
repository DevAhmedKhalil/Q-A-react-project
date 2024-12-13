import React from "react";
import { Accordion, Row } from "react-bootstrap";

const QAList = ({ data, deleteOneItem }) => {
  return (
    <Row className="my-3">
      <Accordion defaultActiveKey="0">
        {data.length > 0 ? (
          data.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header className="custom-accordion-header">
                <div>{item.que}</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="px-3 d-inline justify-content-spacebetween">
                  {item.ans}
                </div>
                <button
                  onClick={() => deleteOneItem(item.id)}
                  className="btn-color"
                >
                  مسح السؤال
                </button>
              </Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد أسئلة الآن</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
