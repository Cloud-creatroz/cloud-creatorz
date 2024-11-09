import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div style={{ marginTop: '70px' }}> {/* Adjust as needed */}
        <Breadcrumb
          pageName="Contact Us"
          description="We’re here to help. Reach out with any questions or feedback, and we’ll get back to you within 24 hrs."
        />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;