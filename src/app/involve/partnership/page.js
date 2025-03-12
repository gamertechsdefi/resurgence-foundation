'use client'

import Header from "@/components/Header";

export default function Partnership() {

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/send-email', {
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
                <h1 className="text-4xl font-bold mb-4">Join hands to make a difference</h1>
                <p>At Resurgence Foundation, we are committed to providing support to those in need, especially during times
                    of crisis, need of education and technical help. Whether you want to offer help, partner with us, or collaborate on impactful projects, your
                    contribution can make a lasting difference. Fill out the form below to get started.</p>

                <form onSubmit={handleSubmit} action="/api/send-email" method="POST" className="grayscale space-y-4 pt-4">
                    <input type="text" id="fullName" placeholder="Full name" name="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                    <input type="email" id="email" name="email" placeholder="Email address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                    <input type="tel" required id="phone" name="phone" placeholder="Phone number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <input type="text" required id="orgName" name="orgName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <label htmlFor="contribution" className="block text-sm font-medium dark:text-white">How Would You Like to Contribute?</label>
                    <select id="contribution" required name="contribution" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select an option</option>
                        <option value="volunteer">Volunteer Support</option>
                        <option value="donation">Financial Donation</option>
                        <option value="sponsorship">Sponsorship/Partnership</option>
                        <option value="resource">Resource Donation</option>
                        <option value="other">Other</option>
                    </select>

                    <div className="flex flex-row items-center">
                        <input type="checkbox" id="agreement" name="agreement" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                        <label htmlFor="agreement" className="ml-2 text-sm font-medium dark:text-gray-300">I agree to the terms and conditions.</label>
                    </div>

                    <button className="bg-white text-neutral-900 px-8 py-3 rounded-lg font-bold">Submit</button>
                </form>

            </main>
        </div>
    );
}
