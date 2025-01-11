import Image from "next/image";
import Navbar from '@/app/components/ui/Navbar';

export default function Privacypolicy() {
    return (
        <>
            <Navbar initialBackground={true} />

            <section className="text-black bg-white p-6 pt-28">

                <div className="bg-white p-10 mx-auto w-auto max-w-4xl">
                    <div className="flex justify-center mb-16">
                        <Image
                            src="/BTL-Logo-Horz-Dk-Gradient.svg"
                            alt="Website Logo"
                            width={500}
                            height={50}
                        />
                    </div>
                    
                    <h1 className="text-2xl font-bold">Beat The Line, LLC Privacy Policy</h1>
                    <p>
                        Beat The Line values your personal information. Please read our privacy policy carefully to get an understanding of how we gather, use, protect, or otherwise handle your personal information.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Information Collection</h2>
                    <p>
                        When creating an account on Beat The Line, you will be asked to enter your name, email address, zip code, credit card information, or other details to optimize your time on our site. Necessary security measures have been taken to safeguard your information.
                    </p>
                    <p>
                        Information is collected when you register on our site, request information or support, make a purchase, participate in surveys or evaluations, participate in promotions or giveaways, submit a resume or cover letter to Beat The Line, or submit any other information to Beat The Line. Information that we may collect includes but is not limited to:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Domain names</li>
                        <li>IP addresses</li>
                        <li>Location</li>
                        <li>Browser type</li>
                    </ul>
                    <p>
                        When you register on our site, request information or support, make a purchase, participate in surveys or evaluations, participate in promotions or giveaways, submit a resume, or submit any information, we may use the information in the following ways:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Tailor content in a specific way to enhance a user’s experience.</li>
                        <li>Communicate with you through email or other means. This can include but is not limited to service communications, billing reminders, technical service, and security announcements.</li>
                        <li>Process transactions.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4">Information Protection/Disclosure</h2>
                    <p>
                        Your personal information is contained behind secured networks. We have taken appropriate security measures to ensure the protection of your information.
                    </p>
                    <p>
                        All transactions are processed through a gateway provider and are not stored or processed on our servers.
                    </p>
                    <p>
                        Beat The Line respects your privacy and will typically not disclose your personal or personally identifiable information to third parties. However, there may be situations when such disclosure is necessary and will occur. One example is if Beat The Line is required by law to disclose information to government officials and judicial/law enforcement officers in response to a subpoena, warrant, court demands, or other properly issued legal process.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Cookies</h2>
                    <p>
                        Beat The Line uses cookies for a variety of reasons. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. One example is using cookies to recall items stored in your shopping cart. Cookies are also used to recall preferences in your viewing experience on our site. Cookies are also used to compile data pertaining to site traffic and interaction. This allows us to improve the services we offer to you.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Third Party Disclosure</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Third Party Links</h2>
                    <p>
                        There may be links to companies with whom we have a business relationship. We encourage you to read their Privacy Policies carefully. We may also link to websites that are maintained by one or more of our business partners who are collecting your information pursuant to their own policies.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Updates</h2>
                    <p>
                        Users will be notified of any privacy policy changes on our privacy policy page. Users can update their personal information by logging into their account.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Do Not Track Signals</h2>
                    <p>
                        We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Unsubscribing</h2>
                    <p>
                        If at any time you would like to unsubscribe from receiving future emails, you can email us at
                        <a href="mailto:support@establishtherun.com" className="text-blue-500 underline">support@establishtherun.com</a> and we will promptly remove you from all correspondence.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Data Breach</h2>
                    <p>
                        In the event of a data breach, we will notify users within 7 days of learning of the breach.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
                    <p>
                        If there are any questions regarding this privacy policy, feel free to contact us using the information below:
                    </p>
                    <address>
                        Beat The Line, LLC<br />
                        1425 E Desert Cove Ave, Unit 6<br />
                        Phoenix, AZ 85020<br />
                        United States<br />
                        <a href="mailto:support@establishtherun.com" className="text-blue-500 underline">support@establishtherun.com</a>
                    </address>
                </div>
            </section>
        </>
    );
}
