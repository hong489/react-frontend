import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import './carouselStyles.css'; // Import your custom CSS file


export default function GettingStarted() {
  const products = [
    {
      step: '1. Install NodeJS',
      description: ('MERN stack prerequisites are: NodeJS version 16 and above recommended'),
      videoSrc: 'https://www.youtube.com/embed/__7eOCxJyow',
    },
    {
      step: '2. Install MongoDB and MongoDB Compass',
      description: (
        <p>
          <a href="https://www.mongodb.com/docs/manual/administration/install-community/" target="_blank">
            MongoDB
          </a>{' '}
          database and{' '}
          <a href="https://www.mongodb.com/products/compass" target="_blank">
            MongoDB Compass
          </a>{' '}
          a GUI tool to manage your database.
        </p>
      ),
      videoSrc: 'https://youtube.com/embed/6_NSkDRXPZk',
    },
    {
      step: '3. Install install Git',
      description: (
        <p>
          <a href="https://git-scm.com/downloads" target="_blank">
            git
          </a>{' '}
          to download your project from GitHub and manage version control.
        </p>
      ),
      videoSrc: 'https://youtube.com/embed/4xqVv2lTo40',
    },
    {
      step: '4. Install Docker (optional)',
      description: (
        <p>
          <a href="https://www.docker.com/" target="_blank">
            Docker
          </a>{' '}
          to run your project in containers (optional).
        </p>
      ),
      videoSrc: 'https://youtube.com/embed/5nX8U8Fz5S0',
    },
    {
      step: '5. Install Postman (optional)',
      description: (
        <>
          <p>
            <a href="https://www.postman.com/downloads/" target="_blank">
              Postman
            </a>{' '}
            to test your API endpoints (optional).
          </p>
        </>
      ),
      videoSrc: 'https://youtube.com/embed/pBo_oClYjjM',
    },
    {
      step: '6. Install Visual Studio Code',
      description: (
        <>
          <p>
            <a href="https://code.visualstudio.com/download" target="_blank">
              Visual Studio Code
            </a>{' '}
            text editor.
          </p>
        </>
      ),
      videoSrc: 'https://youtube.com/embed/MlIzFUI1QGA',
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const productTemplate = (Slide) => {
    return (
      <div className="carousel-slide">
        {/* <div className="card grid flex flex-row"> */}
        <div className="col-12 lg:col-6">
          <h1 className="font-bold">{Slide.step}</h1>
          <div className="m-0">{Slide.description}</div>
        </div>
        <div className="col-12 lg:col-6 youtube-video">
          <iframe
            width="750"
            height="315"
            src={Slide.videoSrc}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        {/* </div> */}
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
    </div>
  )
}

