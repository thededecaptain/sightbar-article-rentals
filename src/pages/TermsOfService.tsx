
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Terms of Service - Sightbar</title>
        <meta name="description" content="Terms of Service for Sightbar.io - Read beyond the paywall" />
      </Helmet>
      
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: March 18, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <p>
            Welcome to Sightbar.io (the "Website"). These Terms of Service ("Terms") govern your access to and use of the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By using the Website you agree to comply with these Terms. If you are using the Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after the changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Use of the Website</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">a. Permitted Use</h3>
          <p>You may use the Website for lawful purposes only and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any applicable laws or regulations.</li>
            <li>Infringe on the intellectual property rights of others.</li>
            <li>Engage in any activity that interferes with or disrupts the Website.</li>
            <li>Use the Website to transmit any harmful or malicious content (e.g., viruses, malware).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">b. Prohibited Activities</h3>
          <p>You are prohibited from:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Attempting to gain unauthorized access to the Website or its related systems.</li>
            <li>Using automated tools (e.g., bots, scrapers) to access or interact with the Website without our permission.</li>
            <li>Engaging in any activity that could harm, disable, or overburden the Website.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            All content on the Website, including text, graphics, logos, images, and software, is the property of Sightbar.io or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. User Accounts</h2>
          <p>If you create an account on the Website, you are responsible for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>All activities that occur under your account.</li>
            <li>Providing accurate and up-to-date information.</li>
          </ul>
          <p>
            You agree to notify us immediately of any unauthorized use of your account or any other security breach.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Payments and Refunds</h2>
          <p>If the Website offers paid products or services, the following terms apply:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Payment:</strong> You agree to pay all fees associated with your purchase. Payment information is processed securely by our third-party payment processors.</li>
            <li><strong>Refunds:</strong> Refund policies, if applicable, will be outlined on the Website or during the checkout process.</li>
            <li><strong>Taxes:</strong> You are responsible for any applicable taxes related to your purchases.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p>
            The Website is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the Website's operation, accuracy, reliability, or availability. Your use of the Website is at your own risk.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Sightbar.io and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Website. This includes, but is not limited to, loss of data, profits, or business opportunities.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Sightbar.io and its affiliates from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your use of the Website.</li>
            <li>Your violation of these Terms.</li>
            <li>Your violation of any third-party rights.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Website at any time, with or without notice, for any reason, including but not limited to your violation of these Terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the European Union. Any disputes arising out of or related to these Terms or the Website will be resolved exclusively in the courts of European Union.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">12. Dispute Resolution</h2>
          <p>
            If a dispute arises, you agree to first contact us at <a href="mailto:info@sightbar.io" className="text-[#7855C0] hover:text-[#6745B0]">info@sightbar.io</a> to attempt to resolve the issue informally. If the dispute cannot be resolved, it will be resolved through binding arbitration or in a court of competent jurisdiction, as applicable.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">13. Miscellaneous</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.</li>
            <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Sightbar.io regarding your use of the Website.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">14. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:info@sightbar.io" className="text-[#7855C0] hover:text-[#6745B0]">info@sightbar.io</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
