import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("items")) || [];
    setData(storedData);
  }, []);

  // Add a new question
  const addItem = (newItem) => {
    const updatedData = [...data, newItem];
    setData(updatedData);
    localStorage.setItem("items", JSON.stringify(updatedData));
    notify("تمت الإضافة بنجاح", "Success");
  };

  // Delete all questions
  const deleteAllItems = () => {
    setData([]);
    localStorage.removeItem("items");
    notify("تم حزف الكل بنجاح", "Success");
  };

  // Delete a single question
  const deleteOneItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("items", JSON.stringify(updatedData));
    notify("تم حزف السؤال بنجاح", "Success");
  };

  // Toast notifications
  const notify = (message, type) => {
    type === "Error" ? toast.error(message) : toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container
        className="p-5 d-flex align-items-center justify-content-center min-vh-100"
        style={{ position: "relative" }}
      >
        <Row className="justify-content-center w-100">
          <Col xs={12} sm={8} md={6} lg={5}>
            <div className="fs-3 text-center py-2">أسئلة وأجوبة شائعة</div>
          </Col>
          <Col xs={12} sm={10} md={8} lg={7}>
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {data.length > 0 && (
              <button onClick={deleteAllItems} className="w-100 my-3 btn-color">
                مسح الكل
              </button>
            )}
          </Col>
        </Row>
        <ToastContainer position="top-right" autoClose={2000} />
      </Container>
    </div>
  );
}

export default App;
