import React from 'react';
import logo from './img/Asset 2@4x.png'
function App(props) {
    return (
        <div>
            <div className="section lg">
                <img className="logo" src={logo} alt="" />
                <h1>Privacy Policy</h1>
                <p><b>Last Revised on July 5, 2024</b></p>
            </div>

            <p>This Privacy Policy governs the manner in which JBS TECHNOLOGY collects, uses,
                maintains, and discloses information collected from users of the JBS IT INSTITUTE mobile
                application.</p>

            <div className="section">
                <h2>1. Introduction</h2>
                <p>At JBS TECHNOLOGY, we are committed to protecting the privacy of our users. This Privacy Policy outlines
                    our practices regarding the collection, use, and disclosure of information we receive from users of our
                    App.
                    By using the App, you agree to the collection and use of information in accordance with this policy.</p>
            </div>

            <div className="section">
                <h2>2. Information We Collect</h2>
                <p>We collect various types of information to provide and improve our services, including:</p>
                <ul>
                    <li><strong>Personal Information:</strong> When you register an account or use certain features of the
                        App,
                        we may collect personal information such as your name, email address, phone number, date of birth, and
                        any other information you voluntarily provide.
                    </li>
                    <li><strong>Usage Data:</strong> We collect information about how you interact with the App, including but
                        not limited to attendance records, leave requests, exam results, seminar attendance, fees payments,
                        complaints submitted, notices viewed, and remarks provided.
                    </li>
                    <li><strong>Device Information:</strong> We may collect information about the devices you use to access
                        our
                        App, including unique device identifiers, IP address, operating system, and mobile network information.
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                    <li><strong>Providing and Improving Services:</strong> To provide, operate, and maintain the App,
                        authenticate users, and personalize user experience.
                    </li>
                    <li><strong>Managing Student Information:</strong> To track attendance, manage leave requests, record exam
                        results, monitor seminar attendance, process fees payments, and maintain academic and administrative
                        records.
                    </li>
                    <li><strong>Communications:</strong> To communicate with users, send important notices, updates, and
                        promotional materials related to our services.
                    </li>
                    <li><strong>Analytics and Research:</strong> To analyze usage patterns, conduct research, and improve our
                        services and features.
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>4. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as
                    described
                    in this Privacy Policy or with your consent. We may share your information with:</p>
                <ul>
                    <li><strong>Service Providers:</strong> We may engage third-party companies and individuals to facilitate
                        our App ("Service Providers"), to provide the App on our behalf, perform App-related services (e.g.,
                        maintenance services, database management, web analytics, payment processing), or assist us in analyzing
                        how our App is used.
                    </li>
                    <li><strong>Legal Compliance:</strong> We may disclose your information to comply with applicable laws,
                        regulations, legal processes, or governmental requests.
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>5. Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access,
                    alteration, disclosure, or destruction. These measures may include encryption, password protection, and
                    secure socket layer technology (SSL). However, no method of transmission over the internet or electronic
                    storage is 100% secure and we cannot guarantee absolute security.</p>
            </div>

            <div className="section">
                <h2>6. Your Rights and Choices</h2>
                <p>You have certain rights regarding your personal information, subject to local data protection laws. These
                    rights may include:</p>
                <ul>
                    <li><strong>Access and Correction:</strong> You may request access to, correction, or deletion of your
                        personal information.
                    </li>
                    <li><strong>Data Portability:</strong> You may request a copy of your personal information in a
                        structured,
                        machine-readable format.
                    </li>
                    <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent to the processing of your
                        personal
                        information at any time, where we rely on consent as the legal basis for processing.
                    </li>
                </ul>
                <p>To exercise your rights, please contact us using the contact information provided below.</p>
            </div>

            <div className="section">
                <h2>7. Children's Privacy</h2>
                <p>Our App is not intended for children under the age of 13. We do not knowingly collect personal
                    information
                    from children under 13. If you are a parent or guardian and believe that we may have inadvertently
                    collected
                    personal information from your child, please contact us using the contact information provided below.</p>
            </div>

            <div className="section">
                <h2>8. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
                    practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by
                    posting the new Privacy Policy on this page and updating the effective date above.</p>
            </div>

            <div className="section">
                <h2>9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, the practices of this App, or your dealings with
                    this
                    App, Please contact us at jbs.technology26@gmail.com.</p>
            </div>
        </div>
    );
}

export default App;
