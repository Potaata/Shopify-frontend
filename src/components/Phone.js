import React from 'react';

function Phone() {
  return (
    <section className="iphoneMock">
      <div className="container">
        <div className="iphone initAnimation">
          <div className="bordeColor">
            <div className="botones">
              <div className="switch"></div>
              <div className="vol up"></div>
              <div className="vol down"></div>
              <div className="touchID"></div>
            </div>
            <div className="backSide">
              <div className="camaras">
                <div className="cam">
                  <div className="lente"></div>
                </div>
                <div className="cam">
                  <div className="lente"></div>
                </div>
                <div className="cam">
                  <div className="lente"></div>
                </div>
                <div className="flash"></div>
                <div className="sensor"></div>
              </div>
              <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M48.334 33.875c-.093-7.593 6.169-11.249 6.45-11.436a13.669 13.669 0 0 0-10.936-5.906c-4.674-.469-9.067 2.718-11.5 2.718-2.337 0-5.982-2.718-9.908-2.625a14.765 14.765 0 0 0-12.339 7.5C4.868 33.313 8.794 47 13.935 54.4c2.524 3.656 5.515 7.78 9.441 7.593 3.832-.187 5.235-2.437 9.815-2.437S39.08 62 43.1 61.9c4.113-.094 6.637-3.75 9.16-7.405a29.782 29.782 0 0 0 4.113-8.53 13.082 13.082 0 0 1-8.039-12.09z"></path>
                  <path d="M40.762 11.565A13.423 13.423 0 0 0 43.847 2a13.194 13.194 0 0 0-8.787 4.5c-1.963 2.25-3.645 5.812-3.178 9.28 3.365.284 6.824-1.68 8.88-4.215z"></path>
                </svg>
              </div>
            </div>
            <div className="bordeNegro">
              <div className="notch">
                <div className="bocina"></div>
                <div className="camara"></div>
              </div>
              <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M48.334 33.875c-.093-7.593 6.169-11.249 6.45-11.436a13.669 13.669 0 0 0-10.936-5.906c-4.674-.469-9.067 2.718-11.5 2.718-2.337 0-5.982-2.718-9.908-2.625a14.765 14.765 0 0 0-12.339 7.5C4.868 33.313 8.794 47 13.935 54.4c2.524 3.656 5.515 7.78 9.441 7.593 3.832-.187 5.235-2.437 9.815-2.437S39.08 62 43.1 61.9c4.113-.094 6.637-3.75 9.16-7.405a29.782 29.782 0 0 0 4.113-8.53 13.082 13.082 0 0 1-8.039-12.09z"></path>
                  <path d="M40.762 11.565A13.423 13.423 0 0 0 43.847 2a13.194 13.194 0 0 0-8.787 4.5c-1.963 2.25-3.645 5.812-3.178 9.28 3.365.284 6.824-1.68 8.88-4.215z"></path>
                </svg>
              </div>
            </div>
            <div className="contenedorPantalla">
              <div className="pantalla initAnimation">
                <div className="screen" id="lock"></div>
                <div className="screen" id="app"></div>
                <div className="screen" id="widget"></div>
                <div className="screen" id="controlCenter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phone;