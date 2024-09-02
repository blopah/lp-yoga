import React from 'react';
import './Benefits.css';
import { benefitsData } from './benefitsData';

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
                                backgroundPosition: 'center',
                                mixBlendMode: benefit.blendMode // Add blendMode property
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