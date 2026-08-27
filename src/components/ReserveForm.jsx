import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ReserveForm.css';

export default function ReserveForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic verification
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    // Log to console for demo purposes
    console.log('Reservation Request Submitted:', formData);
    
    setStatus({
      type: 'success',
      message: 'Thank you. Your table reservation request has been submitted!'
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  return (
    <section className="reserve-section" id="reserve">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="reserve-grid"
        >
          {/* Form Side */}
          <div className="reserve-form-container">
            <p className="reserve-eyebrow">Bookings</p>
            <h2 className="reserve-headline">Reserve a table</h2>
            <p className="reserve-subhead">
              Join us for slow evenings and modern Asian artistry.
            </p>

            <form onSubmit={handleSubmit} className="reserve-form">
              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. +91 99679 33447"
                    required
                  />
                </div>
              </div>

              <div className="form-group-row-three">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time" className="form-label">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests" className="form-label">Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-input"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Request Reservation
              </button>
            </form>

            <p className="reserve-helper-line">
              Prefer to call?{' '}
              <a href="tel:+919967933447" className="reserve-phone-link">
                +91 99679 33447
              </a>
            </p>
          </div>

          {/* Map Side */}
          <div className="reserve-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3392330607623!2d73.02326797613589!3d19.004751482187796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3bf88a6d68b%3A0xe54e3d36b856c321!2sSai%20Sagar%20Complex%2C%20Sai%20Sagar%20Co-operative%20Housing%20Society%2C%20Sector%2015%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1714120000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayame Lounge location at Sai Sagar Complex, Sector 15, CBD Belapur, Navi Mumbai"
              className="reserve-map-iframe"
            ></iframe>
            <div className="map-overlay-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
