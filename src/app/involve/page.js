"use client";

import Header from "@/components/Header";
import InFooter from "@/components/InFooter";
import Link from "next/link";

export default function GetInvolved() {
    return (
        <div>
            <Header />
            <main className="grayscale p-8 md:p-16">
                <h1 className="pb-2 text-3xl font-bold text-neutral-200">Get involved with us </h1>
                <p>At Resurgence Foundation, we are dedicated to fostering meaningful connections,
                    partnerships, and support systems that empower individuals and communities. Our
                    forms are designed to provide a streamlined, user-friendly experience, ensuring
                    that whether you’re seeking assistance or looking to collaborate with us, you have
                    a clear and accessible way to do so.
                    We believe that impactful change happens through collaboration, and our partnership
                    form serves as a bridge between like-minded individuals, businesses, and organizations
                    that share our vision. By working together, we can drive innovation, create lasting
                    solutions, and extend our reach to those who need it most.</p>
                    <p className="pt-4">For those in need of assistance, our help-seeking form is a crucial resource designed
                    to connect individuals with the support and services they require. We understand that
                    navigating challenges can be overwhelming, and we’re committed to making the process
                    as simple and efficient as possible. No matter the need, we’re here to listen,
                    assist, and provide guidance.
                    Explore the options below to learn more about how you can get involved or receive
                    the support you need.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="col-span-1 bg-gradient-to-b from-neutral-500 to-neutral-700 rounded-lg p-4">
                        <h2 className="text-2xl font-bold mb-2">Partnership Form</h2>
                        <p className="mb-4">By partnering with us, you gain access to a network of
                            changemakers, resources, and opportunities to contribute to meaningful
                            causes. Fill out the form to share your interests, goals, and how you
                            envision working together. Our team will review your submission and reach
                            out to explore the possibilities of collaboration. Let’s create something
                            powerful together!</p>
                        <Link href="/involve/partnership" className="bg-white text-neutral-900 px-4 py-2 rounded-md">Partner with us</Link>
                    </div>
                    <div className="col-span-1 bg-gradient-to-b from-neutral-500 to-neutral-700 rounded-lg p-4">
                        <h2 className="text-2xl font-bold mb-2">Help Seeking Form?</h2>
                        <p className="mb-4">If you are in need of assistance, you are not alone, we are 
                            here to help. Our help-seeking form is designed to connect you with the support, resources, 
                            and guidance you need. Whether you require financial aid, counseling, educational support, 
                            or other services, this form is the first step in accessing help.
                            Simply provide the necessary details about your situation, and our team will review your 
                            request with care and confidentiality.</p>
                            <Link href="/involve/help-seek" className="bg-white text-neutral-900 px-4 py-2 rounded-md">Get help</Link>
                    </div>
                </div>
            </main>
            <InFooter />
        </div>
    );
}
