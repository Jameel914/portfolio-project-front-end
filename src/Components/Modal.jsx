import React from "react";

function Modal({ handleDeleteButton, setModalShowing }) {
  return (
    <div
      className="container"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        height: "100vh",
        width: "100vw",
        zindex: "2",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className=""
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog" style={{ backgroundColor: "white" }}>
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center mt-5">
              <h1 className="modal-title fs-5 " id="staticBackdropLabel">
                Are you sure?
              </h1>
            </div>
            <div className="modal-body mb-5"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger px-5 m-5"
                data-bs-dismiss="modal"
                onClick={() => setModalShowing(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success text-dark px-5 m-5"
                onClick={handleDeleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
