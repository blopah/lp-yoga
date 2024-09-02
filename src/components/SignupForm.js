import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
    return (
        <section className="signup-form" id="signup" style={{ display: 'none' }}>
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