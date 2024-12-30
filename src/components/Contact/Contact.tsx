import React, { useState } from "react";
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.min.css";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to submit the form. Please try again.");
      }
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { name, email, subject, message } = formData;

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3889ef3f op-section elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="3889ef3f"
      data-element_type="section"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="elementor-container elementor-column-gap-no"
      >
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-102358d5"
          data-id="102358d5"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-64c9b273 elementor-widget elementor-widget-heading"
              data-id="64c9b273"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  CONTACT
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-741b4645 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="741b4645"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Viverra tristique placerat massa estimos consectetur quisque
                  nu fames lorem ipsum
                </p>
              </div>
            </div>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-1371fab6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="1371fab6"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2042a67d"
                  data-id="2042a67d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-5b7362e3 elementor-widget elementor-widget-text-editor"
                      data-id="5b7362e3"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          <strong>FULL NAME:</strong> Jacob B. Hawkins
                          <br />
                          <strong>BIRTHDAY:</strong> 25. 03. 1987.
                          <br />
                          <strong>ADDRESS:</strong> Some Street 987, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3a7d3c87"
                  data-id="3a7d3c87"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-24fd1963 elementor-widget elementor-widget-text-editor"
                      data-id="24fd1963"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          <strong>PHONE:</strong> (+98) 765 4321
                          <br />
                          <strong>EMAIL:</strong> company@youremail.com
                          <br />
                          <strong>WEBSITE:</strong> www.yourwebsite.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="elementor-element elementor-element-554e9c50 extra-width parallax_0_-20 elementor-widget elementor-widget-image"
              data-id="554e9c50"
              data-element_type="widget"
              data-widget_type="image.default"
              data-jarallax-element="0 -20"
            >
              <div className="elementor-widget-container">
                <a
                  href="https://www.google.com/maps/place/Central+Park/@40.7828647,-73.9653551,15z/data=!4m5!3m4!1s0x0:0xb9df1f7387a94119!8m2!3d40.7828647!4d-73.9653551"
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="450"
                    src="/images/map.png"
                    className="attachment-large size-large wp-image-186"
                    alt=""
                    srcSet="/images/map.png 900w, /images/map-300x150.png 300w, /images/map-768x384.png 768w"
                    sizes="(max-width: 900px) 100vw, 900px"
                  />
                </a>
              </div>
              <div id="jarallax-container-5">
                <div></div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-21766d8d elementor-widget elementor-widget-shortcode"
              data-id="21766d8d"
              data-element_type="widget"
              data-widget_type="shortcode.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  <div
                    className="wpcf7 js"
                    id="wpcf7-f8-p181-o1"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div className="screen-reader-response">
                      <p
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                      ></p>
                      <ul></ul>
                    </div>
                    {/* Form submission feedback */}
                    {submitSuccess && (
                      <p>Thank you! Your message has been sent.</p>
                    )}
                    {submitError && (
                      <p style={{ color: "red" }}>{submitError}</p>
                    )}
                    <form
                      onSubmit={handleSubmit}
                      action="/ukko-wp/#wpcf7-f8-p181-o1"
                      method="post"
                      className="wpcf7-form init demo"
                      aria-label="Contact form"
                      data-status="init"
                    >
                      <p>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-name"
                        >
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="NAME"
                            value={name}
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                          />
                        </span>
                      </p>
                      <p>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="email"
                        >
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="EMAIL"
                            value={email}
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                          />
                        </span>
                      </p>
                      <p>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-subject"
                        >
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text"
                            aria-invalid="false"
                            placeholder="SUBJECT"
                            value={subject}
                            onChange={handleInputChange}
                            type="text"
                            name="subject"
                          />
                        </span>
                      </p>
                      <p>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-message"
                        >
                          <textarea
                            cols={40}
                            rows={10}
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="MESSAGE"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                          ></textarea>
                        </span>
                      </p>
                      <button className="contact-submit-holder">
                        <input
                          className="wpcf7-form-control wpcf7-submit has-spinner"
                          type="submit"
                          value="SEND"
                          readOnly
                        />
                        <span className="wpcf7-spinner"></span>
                      </button>
                      <div
                        className="wpcf7-response-output"
                        aria-hidden="true"
                      ></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
