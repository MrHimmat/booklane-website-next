import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Privacy Policy & Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-6">Last updated : 08 July, 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
        <p>Welcome to BookLane. We are committed to protecting your personal information and your right to privacy. This Privacy Policy & Terms of Service explains how we collect, use, share, and protect your data, and the rules for using our services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">2. Account Creation & Google Login</h2>
        <p>We use Google Sign-In as our sole authentication method. By creating an account, you agree to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Be responsible for all activities that occur under your account</li>
          <li>Comply with Google's Terms of Service and Privacy Policy</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">3. Information We Collect</h2>
        <p>Through Google Sign-In, we collect the following information:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Your name</li>
          <li>Email address</li>
          <li>Profile picture (if available)</li>
        </ul>
        <p className="mt-2">Additionally, we may collect:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Device and log information (e.g., IP address, browser type, operating system)</li>
          <li>Usage data (e.g., interactions with features, preferences, activities within the app)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">4. User Responsibilities</h2>
        <p>As a user of BookLane, you agree to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Use the service only for lawful purposes</li>
          <li>Not engage in any fraudulent or malicious activities</li>
          <li>Respect the intellectual property rights of others</li>
          <li>Not attempt to access other users' accounts</li>
          <li>Not upload viruses or harmful code</li>
          <li>Not interfere with or disrupt the operation of our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">5. Data Use and Purpose</h2>
        <p>We use your information to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide, operate, and maintain our services</li>
          <li>Personalize your experience and show you relevant content</li>
          <li>Improve our services and develop new features</li>
          <li>Communicate with you (e.g., updates, security alerts, support)</li>
          <li>Promote safety, integrity, and security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">6. How We Share Your Information</h2>
        <p>We do <strong>not</strong> sell your personal data. We may share information with:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Service providers who support our business (e.g., hosting, analytics, security)</li>
          <li>Legal authorities, when required by law or to protect our rights and the rights of others</li>
          <li>Other users, only when you choose to share information (e.g., posts, reviews)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">7. Data Security</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no system is completely secure.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">8. Data Retention</h2>
        <p>We retain your personal data as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">9. Children’s Privacy</h2>
        <p>BookLane is not intended for children under 13. We do not knowingly collect data from children. If we learn that we have collected personal data from a child without verified parental consent, we will delete it as soon as possible.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">10. Termination</h2>
        <p>We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">11. Your Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Access, correct, or delete your personal data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p className="mt-2">To exercise these rights, please contact us using the email below.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">12. Changes to Terms</h2>
        <p>We may modify these Terms or this Privacy Policy at any time. We will notify you of changes by updating the "Last updated" date at the top of this page. Your continued use of BookLane after any changes constitutes your acceptance.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">13. Inspired by Instagram and WhatsApp Privacy Practices</h2>
        <p>Our commitment to privacy is inspired by trusted practices from leading platforms such as Instagram and WhatsApp. We believe in transparency, control, and security to protect our users' information and ensure a safe experience.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">14. Contact Us</h2>
        <p>If you have questions about these Terms or our Privacy Policy, you may contact us at:</p>
        <p className="mt-2">📧 <strong>Email:</strong> <a href="mailto:booklaneapp@gmail.com" className="text-blue-400 underline">booklaneapp@gmail.com</a></p>
      </section>
    </main>
  );
} 