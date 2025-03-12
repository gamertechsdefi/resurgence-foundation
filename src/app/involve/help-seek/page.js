'use client'

import Header from "@/components/Header";

export default function HelpSeek() {

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/send-helpseek', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert("Information sent");
            } else {
                alert("Something went wrong");
            }
        } catch (e) {
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <Header />
            <main className="p-8 md:p-16">
                <h1 className="text-4xl font-bold mb-4">Seek Help</h1>
                <p>At Resurgence Foundation, we are here to help you in times of need. Whether you require assistance with education, technical support, or any other form of aid, please fill out the form below to get started.</p>

<form onSubmit={handleSubmit} action="/api/send-helpseek" method="POST" className="grayscale space-y-4 pt-4">
                    <input type="text" id="fullName" placeholder="Full name" name="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                    <input type="email" id="email" name="email" placeholder="Email address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                    <input type="tel" required id="phone" name="phone" placeholder="Phone number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <label htmlFor="helpType" className="block text-sm font-medium dark:text-white">What Type of Help Do You Need?</label>
                    <select id="helpType" required name="helpType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select an option</option>
                        <option value="education">Education</option>
                        <option value="technical">Technical Support</option>
                        <option value="financial">Financial Assistance</option>
                        <option value="other">Other</option>
                    </select>

                    <textarea id="description" name="description" placeholder="Describe your situation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>

                    <button className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold">Submit</button>
                </form>

            </main>
        </div>
    );
}
