import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
    return (
        <section className="signup-form" id="signup">
            <h2>Garanta Sua Aula Grátis</h2>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label><input type="text" name="nome" placeholder="Nome" required /></label>
                </p>
                <p>
                    <label><input type="email" name="email" placeholder="E-mail" required /></label>
                </p>
                <p>
                    <label><input type="tel" name="telefone" placeholder="Telefone" required /></label>
                </p>
                <button type="submit">Garantir Minha Aula Grátis</button>
            </form>
        </section>
    );
}

export default SignupForm;

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
