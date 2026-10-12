import React from "react";
import style from "./NewsLetter.module.scss";

const NewsLetter = () => {
  const [feedback, setFeedback] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const handleFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFeedback(true);
    setName("");
    setEmail("");
  };
  return (
    <section className={style.container}>
      <div>
        <div className={style.information}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className={style.form}>
          <div>
            <label htmlFor="name" className="visually-hidden">
              Digite seu nome:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="visually-hidden">
              Digite seu email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className={style.checkbox}>
            <input type="checkbox" name="termosECondicoes" id="termosECondicoes" required />
            <label htmlFor="termosECondicoes">Aceito os termos e condições</label>
          </div>
          <button onClick={handleFormClick}>Inscrever</button>
          {feedback && <span className={style.feedback}>Inscrição realizada, verifique seu email.</span>}
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
