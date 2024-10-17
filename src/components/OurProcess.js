import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OurProcess = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container my-4">
            <h2>Our Process to Help You</h2>
            <div className="accordion" id="accordionExample">
                {/* First Question */}
               <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(1)}
                            aria-expanded={openIndex === 1}
                        >
                            A Customer reports Question – What is a cloud server?
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 1 ? 'show' : ''}`}
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            A cloud server is a server that runs in a cloud computing environment, offering scalable resources over the internet.
                        </div>
                    </div>
                </div>

                {/* Second Question */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(2)}
                            aria-expanded={openIndex === 2}
                        >
                            What happens if my cloud server goes down?
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 2 ? 'show' : ''}`}
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            We have a service level agreement to ensure that our server will maintain uptime. If for any reason your server is experiencing an outage, please contact customer support.
                        </div>
                    </div>
                </div>

                {/* Add more questions in the same format... */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(3)}
                            aria-expanded={openIndex === 3}
                        >
                            What support options are available?
                        </button>
                    </h2>
                    <div
                        className={`accordion-collapse collapse ${openIndex === 3 ? 'show' : ''}`}
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Our support options include email, phone, online documents, and text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
