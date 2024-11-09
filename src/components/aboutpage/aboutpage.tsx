import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image"; 

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cloud creatorz",
  description: "Learn more about our mission, vision, and our certified Azure and AWS team.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div style={{ marginTop: '70px' }}> {/* Adjust as needed */}
        <Breadcrumb
          pageName="About Us"
          description="Discover our story, certifications, and commitment to excellence."
        />
      </div>

      <div style={{ padding: '20px' }}>
        <h1>Our Story</h1>
        <p>
          Founded on the principles of innovation and excellence, we are dedicated to providing top-tier cloud solutions.
          Our team consists of certified Azure and AWS professionals who are committed to helping businesses succeed in the digital landscape.
        </p>

        <h2>Our Certifications</h2>
        <p>
          Our team holds various certifications, ensuring that we deliver expert solutions:
        </p>
        <ul>
          <li>Microsoft Certified: Azure Solutions Architect Expert</li>
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>Microsoft Certified: Azure Developer Associate</li>
          <li>AWS Certified DevOps Engineer – Professional</li>
          {/* Add more certifications as needed */}
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower organizations to leverage cloud technology for greater efficiency and innovation.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a future where every business can harness the power of cloud solutions to drive success and transformation.
        </p>

        <h2>Success Stories</h2>
        <p>
          Here are a few examples of how our certified team has made a difference:
        </p>
        <div style={{ marginTop: '20px' }}>
          <h3>Case Study: Transforming a Retail Business</h3>
          <p>
            We helped a retail company migrate to AWS, resulting in a 30% reduction in operational costs and improved scalability.
          </p>
          <Image src="/path/to/retail-case-study.jpg" alt="Retail Case Study" width={300} height={200} />

          <h3>Case Study: Optimizing Cloud Infrastructure</h3>
          <p>
            Our Azure experts optimized a client s cloud infrastructure, enhancing performance and reducing downtime by 25%.
          </p>
          <Image src="/path/to/azure-case-study.jpg" alt="Azure Case Study" width={300} height={200} />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
