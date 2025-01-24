import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setStatus(result.success ? "Message sent successfully!" : "Error sending message");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="border p-2"/>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="border p-2"/>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="border p-2"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4">Send</button>
            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;
