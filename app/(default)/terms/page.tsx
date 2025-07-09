import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Terms and Conditions</h1>
      <p className="text-sm text-gray-400 mb-6">Last updated : 08 July, 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing or using BookLane, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, you may not use our services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">2. Account Registration</h2>
        <p>We use Google Sign-In as our sole authentication method. By creating an account, you agree to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Be responsible for all activities that occur under your account</li>
          <li>Comply with Google’s Terms of Service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. User Responsibilities</h2>
        <p>As a user of BookLane, you agree to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Use the service only for lawful, personal, and non-commercial purposes</li>
          <li>Not engage in any fraudulent, abusive, or malicious activities</li>
          <li>Respect the intellectual property rights of BookLane and other users</li>
          <li>Not upload viruses, malware, or harmful code</li>
          <li>Not attempt to access or disrupt other users’ accounts or data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">4. Content Ownership</h2>
        <p>Users retain ownership of any content they upload to BookLane. However, by uploading content, you grant BookLane a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, modify, and display such content as necessary to operate and improve the service.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">5. Termination</h2>
        <p>We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms, harms other users, or is unlawful.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">6. Limitation of Liability</h2>
        <p>BookLane shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of data or profits, resulting from your use of or inability to use the service.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">7. Changes to Terms</h2>
        <p>We may modify these Terms at any time. We will notify you by updating the "Last updated" date at the top of this page. Your continued use of the service after changes constitutes your acceptance of the new Terms.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">8. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">9. Additional Platform Terms</h2>
        <p>By using BookLane, you also agree to comply with the terms and policies of the following platforms and services:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Other Third-Party Services</strong>: If you use any other integrated services or APIs through BookLane, you agree to their respective terms and policies as well.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">10. Contact Information</h2>
        <p>For any questions or concerns about these Terms, please contact us at:</p>
        <p className="mt-2">📧 <strong>Email:</strong> <a href="mailto:booklaneapp@gmail.com" className="text-blue-400 underline">booklaneapp@gmail.com</a></p>
      </section>
    </main>
  );
} 