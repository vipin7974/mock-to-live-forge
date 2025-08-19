// ScheduleModal.tsx
'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ScheduleModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    datetime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_uzjpzth',
        'template_no931zd',
        {
          ...formData,
          to_name: 'Company Team',
        },
        'ocsNkGsggmbftfXXh'
      );
      alert(`Appointment scheduled! Confirmation email sent. ${result}`);
      onClose();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('There was an error scheduling. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-teal-600">Schedule Your Assessment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded p-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-black border border-gray-300 rounded p-2"
          />
          <textarea
            name="description"
            placeholder="Describe your need"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded p-2"
          ></textarea>
          <input
            name="datetime"
            type="datetime-local"
            value={formData.datetime}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded p-2"
          />
          <div className="flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Schedule</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;