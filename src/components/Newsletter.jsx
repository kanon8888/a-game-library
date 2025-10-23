import React from "react";

const Newsletter = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 text-center rounded-2xl mt-12">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">
                    Join Our Newsletter ✉️
                </h2>
                <p className="text-gray-600 mb-8">
                    Subscribe now to get weekly updates, new game releases, and special offers.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="border border-gray-300 rounded-md px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                    You can unsubscribe anytime. We respect your privacy.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;

