import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HowItWork = ({
  image,
  description,
  title,
  itemsCollection: { items },
  linkId,
}) => {
  return (
    <section id={linkId} className="process-area ptb-100 bg-fafafb">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <div>{documentToReactComponents(description.json)}</div>
        </div>
        <div className="row align-items-center m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="process-image">
              <img
                src={image?.url ?? '/images/process/process7.png'}
                alt={image?.title ?? 'Imagen'}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="process-content">
              <div className="row">
                {items.map(({ name, icon: { url: icon } }, index) => (
                  <div key={name} className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={icon} alt="banner" />
                        </div>
                        <h3>{name}</h3>
                        <div className="number">{index + 1}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
