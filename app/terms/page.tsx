export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-slate-600">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using Viquoe Global Ltd's services, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
            <p className="text-slate-600 mb-4">
              Viquoe Global Ltd provides comprehensive business solutions including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Automobile sales and related services</li>
              <li>Road logistics and supply chain management</li>
              <li>General contracting and construction services</li>
              <li>Import and export facilitation</li>
              <li>General goods supply and distribution</li>
              <li>International trade facilitation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use services only for lawful business purposes</li>
              <li>Maintain confidentiality of account credentials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-slate-600 mb-4">
              Payment terms are specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Payments are due within 30 days of invoice date</li>
              <li>Late payments may incur additional charges</li>
              <li>Disputed charges must be reported within 30 days</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              Viquoe Global Ltd's liability is limited to the maximum extent permitted by law. We are not liable for
              indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
            <p className="text-slate-600 mb-4">
              Either party may terminate services with appropriate notice as specified in individual service agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="text-slate-600">
              For questions regarding these terms, contact us at:
              <br />
              Email: legal@viquoeglobal.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
