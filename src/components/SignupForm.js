import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString(),
        })
        .then(() => alert("Sucesso!"))
        .catch((error) => alert(error));
    };

    return (
        <section className="signup-form" id="signup">
            <h2>Garanta Sua Aula Grátis</h2>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label><input type="text" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required /></label>
                </p>
                <p>
                    <label><input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                </p>
                <p>
                    <label><input type="tel" name="telefone" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required /></label>
                </p>
                <button type="submit">Garantir Minha Aula Grátis</button>
            </form>
        </section>
    );
}

export default SignupForm;
