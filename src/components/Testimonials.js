import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>O que nossos alunos dizem</h2>
            <div className="testimonial-container">
                <div className="testimonial">
                    <p>"Praticar yoga no 'Equilíbrio Zen' mudou completamente minha vida. Eu costumava sofrer com dores nas costas e estresse constante, mas desde que comecei as aulas, sinto-me mais leve e com mais energia. A atmosfera acolhedora e o profissionalismo dos instrutores fazem toda a diferença. Recomendo para todos que buscam equilíbrio entre corpo e mente!"</p>
                    <h3>— Mariana Silva</h3>
                </div>
                <div className="testimonial">
                    <p>"No 'Equilíbrio Zen', encontrei um espaço de paz e autoconhecimento. As aulas são adaptadas ao meu nível, e os instrutores são sempre muito atenciosos. Além de melhorar minha flexibilidade, percebi uma grande redução na minha ansiedade. Estou mais centrada e feliz, e não vejo a hora de ir para a próxima aula!"</p>
                    <h3>— Carlos Oliveira</h3>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
