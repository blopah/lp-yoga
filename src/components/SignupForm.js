import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
    return (
        <section className="signup-form" id="signup">
            <h2>Garanta Sua Aula Grátis</h2>
            <form name="contact" data-netlify="true">
                <input type="text" name="nome" placeholder="Nome" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <input type="tel" name="telefone" placeholder="Telefone" required />
                <button type="submit">Garantir Minha Aula Grátis</button>
            </form>
        </section>
    );
}

export default SignupForm;
