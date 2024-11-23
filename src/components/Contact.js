import { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert2

export const Contact = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [submissions, setSubmissions] = useState([]);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [showVisitorList, setShowVisitorList] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // To track which item is being edited

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika dikonfirmasi, lanjutkan pengiriman
        setButtonText("Sending...");

        const currentDate = new Date().toLocaleString();

        if (editingIndex !== null) {
          // Update pesan yang sudah ada
          const updatedSubmissions = submissions.map((submission, index) =>
            index === editingIndex
              ? { ...submission, ...formDetails }
              : submission
          );
          setSubmissions(updatedSubmissions);
          setEditingIndex(null);
          setStatus({ success: true, message: "Message updated successfully" });
        } else {
          // Tambahkan pesan baru
          const newSubmission = {
            id: submissions.length + 1,
            name: formDetails.name,
            email: formDetails.email,
            message: formDetails.message,
            date: currentDate,
          };
          setSubmissions([...submissions, newSubmission]);
          setStatus({ success: true, message: "Message saved successfully" });
        }

        // Reset form
        setFormDetails(formInitialDetails);
        setButtonText("Send");

        // Tampilkan notifikasi sukses
        Swal.fire("Sent!", "Your message has been sent.", "success");
      }
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const submissionToEdit = submissions[index];
    setFormDetails({
      name: submissionToEdit.name,
      email: submissionToEdit.email,
      message: submissionToEdit.message,
    });
    setShowVisitorList(false);
  };

  const handleDelete = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        {!showVisitorList ? (
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center mb-4">
                {editingIndex !== null ? "Edit Message" : "Message To Me"}
              </h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} className="mb-3">
                    <input
                      type="text"
                      value={formDetails.name}
                      placeholder="Full Name"
                      className="form-control"
                      onChange={(e) => onFormUpdate("name", e.target.value)}
                    />
                  </Col>
                  <Col xs={12} className="mb-3">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      className="form-control"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col xs={12} className="mb-3">
                    <textarea
                      rows="5"
                      value={formDetails.message}
                      placeholder="Message"
                      className="form-control"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                  </Col>
                  <Col xs={12} className="text-center">
                    <button type="submit" className="btn btn-primary">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col xs={12} className="text-center mt-3">
                      <p className={status.success ? "text-success" : "text-danger"}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
              <div className="text-center mt-4">
                <Button variant="primary" onClick={() => setShowVisitorList(true)}>
                  View Visitor List
                </Button>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12}>
              <h2 className="text-center">Visitor List</h2>
              <Table striped bordered hover className="custom-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Message</th>
      <th>Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {submissions.length > 0 ? (
      submissions.map((submission, index) => (
        <tr key={submission.id}>
        <td className="text-white">{index + 1}</td>
        <td className="text-white">{submission.name}</td>
        <td className="text-white">{submission.email}</td>
        <td className="text-white">{submission.message}</td>
        <td className="text-white">{submission.date}</td>
          <td>
            <Button
              variant="warning"
              className="me-2"
              onClick={() => handleEdit(index)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="text-center">
          No submissions yet.
        </td>
      </tr>
    )}
  </tbody>
</Table>

              <div className="text-center mt-4">
                <Button variant="secondary" onClick={() => setShowVisitorList(false)}>
                  Back to Form
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};
