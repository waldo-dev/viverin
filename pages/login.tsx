import Layout from "../layouts/Main";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { server } from "../utils/server";
import { postData } from "../utils/services";

type FormValues = {
  email: string;
  password: string;
  keepSigned?: boolean;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });

    console.log(res);
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Volver atras
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit as any)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Please write a valid email
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      type="checkbox"
                      id="check-signed-in"
                      {...register("keepSigned", { required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Mantener sesion iniciada</p>
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook"></i>Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Entrar
              </button>

              <p className="form__signup-link">
                No tienes usuario? <a href="/register">Crear usuario</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
