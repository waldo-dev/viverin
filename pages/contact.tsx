import Layout from "../layouts/Main";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_CONTACT_EMAILJS;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS;

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = React.useCallback((e: any) => {
    e.preventDefault();
    if (serviceId && templateId && publicKey) {
      emailjs
        .sendForm(serviceId, templateId, form.current as any, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }, []);

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Volver a la tienda
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Contacto</h2>
            <p className="form-block__description">
              Ingresa tus datos y el mensaje.
            </p>

            <form
              ref={form}
              className="form"
              onSubmit={(e) => handleSubmit(handleOnSubmit(e) as any)}
            >
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Nombre"
                  type="text"
                  name="user_name"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Email"
                  type="email"
                  name="user_email"
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Este campo es obligatorio
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Porfavor ingrese un email valido
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Mensaje"
                  name="message"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Este campo es obligatorio
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
