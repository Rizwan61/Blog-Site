import React from 'react'
import services from '../images/service-pic.jpg'
import services1 from '../images/service-icon-1.png'
import services2 from '../images/service-icon-2.png'
import services3 from '../images/service-icon-3.png'


function serviceSection() {
  return (
    <section className="services-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="services-pic">
            <img src={services} alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-items">
            <div className="row">
              <div className="col-md-6">
                <div className="services-item bg-gray">
                  <img src={services1} alt="" />
                  <h4>Strategies</h4>
                  <p>
                    Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                    dis part urient montes.
                  </p>
                </div>
                <div className="services-item bg-gray pd-b">
                  <img src={services2} alt="" />
                  <h4>Workout</h4>
                  <p>
                    Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                    dis part urient montes.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="services-item">
                  <img src={services3} alt="" />
                  <h4>Yoga</h4>
                  <p>
                    Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                    dis part urient montes.
                  </p>
                </div>
                <div className="services-item pd-b">
                  <img src="img/services/service-icon-4.png" alt="" />
                  <h4>Weight Loss</h4>
                  <p>
                    Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                    dis part urient montes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default serviceSection