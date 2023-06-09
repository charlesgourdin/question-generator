import { FieldValues, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.scss";
import { useState } from "react";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import PostForm from "@/components/PostForm";
import { FALSE } from "sass";

export default function Contact() {
  const [hasSubmit, setHasSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [spring] = useSpring(() => ({
    config: {
      easing: true,
    },
    loop: true,
    from: { transform: "scaleX(1)" },
    to: { transform: "scaleX(-1)" },
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      await emailjs.send(
        process.env.EMAILJS_SERVICE_KEY!,
        process.env.EMAILJS_TEMPLATE_KEY!,
        data,
        process.env.EMAILJS_PUBLIC_KEY!
      );
      setHasSubmit(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formRender = isLoading ? (
    <animated.div
      style={{
        ...spring,
      }}
    >
      <Image
        src="/images/question.png"
        alt="github logo"
        title="github"
        width={32}
        height={32}
      />
    </animated.div>
  ) : (
    <>
      <h1 className="title">
        Vous avez des idées ? <br />
        Proposez une nouvelle question !
      </h1>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label>
              <p>Ma proposition</p>
              <textarea {...register("question", { required: true })} />
            </label>
          </fieldset>

          <fieldset>
            <label>
              <p>Proposé par</p>
              <input {...register("name", { required: true })} />
            </label>
          </fieldset>

          {Object.keys(errors).length ? (
            <span className={styles.error}>
              Merci de renseigner tous les champs du formulaire...
            </span>
          ) : null}

          <button type="submit">Envoyer ma proposition</button>
        </form>
      </div>
    </>
  );

  return (
    <>
      <Layout title="Proposer une nouvelle question">
        <div className={styles.globalContainer}>
          {hasSubmit ? <PostForm /> : formRender}
        </div>
      </Layout>
    </>
  );
}
