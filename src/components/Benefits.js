import React from 'react';
import './Benefits.css';

const benefitsData = [
    { color: "#28a745", text: "Flexibilidade", image: require("../imgs/flexibilidade.png") },
    { color: "#ffc107", text: "Força Física", image: require("../imgs/forca-fisica.png") }, // Amarelo
    { color: "#6f42c1", text: "Bem-estar Mental", image: require("../imgs/bem-estar-mental.png") } // Roxo
];

const Benefits = () => {
    return (
        <section className="benefits">
            <h2>Benefícios do Yoga</h2>
            <div className="benefits-container">
                {benefitsData.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                        <div 
                            className="benefit-placeholder" 
                            style={{ 
                                backgroundColor: benefit.color, 
                                backgroundImage: benefit.image ? `url(${benefit.image})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                        <p>{benefit.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;