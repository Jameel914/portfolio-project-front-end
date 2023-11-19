import React from "react";

function ContactUsPage() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="fs-5 m-5">
          <ul class="list-group list-group-flush ">
            <li class="list-group-item">750 Main Street</li>
            <li class="list-group-item">Hartford, CT - 06103</li>
            <li class="list-group-item">
              <i class="bi bi-telephone"></i> (123) 456-7890
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.9166156859337!2d-72.67562488860213!3d41.76545557113453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6537b18ea5175%3A0x6cc3bed7c246603c!2s750%20Main%20St%2C%20Hartford%2C%20CT%2006103!5e0!3m2!1sen!2sus!4v1700193033024!5m2!1sen!2sus"
            style={{
              border: "0",
              width: "600px",
              height: "350px",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
