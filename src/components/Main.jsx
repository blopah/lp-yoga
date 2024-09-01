import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={require('../assets/fractal-loop.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                {/* Seções sobrepostas ao vídeo */}
            </div>
        </div>
    );
};

export default Main;
