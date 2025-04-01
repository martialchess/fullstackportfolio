import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus(data.error || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="bg-white p-6 mt-20 rounded-2xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-md"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-md h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
        >
          Send Message
        </button>
        <p className="text-sm text-gray-600">{status}</p>
      </form>
    </section>
  );
}
