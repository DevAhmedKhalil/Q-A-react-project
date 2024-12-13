import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);

  // Adding New Question
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تمت الإضافة بنجاح", "Success");
  };

  // Deleting All Questions
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حزف الكل بنجاح", "Success");
  };

  // Deleting One Question From Array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    if (items.length <= 0) {
      deleteAllItems();
    }
    notify("تم حزف السؤال بنجاح", "Success");
  };

  // Toast Notification
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">أسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="w-100 my-3 btn-color">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
