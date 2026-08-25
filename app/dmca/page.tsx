import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: "DMCA Policy for CFA Menu Guide. Information regarding copyright infringement claims.",
};

export default function DMCAPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "DMCA Policy", href: "/dmca" },
        ]}
      />

      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-[#EAE3D5] overflow-hidden p-6 md:p-10">
        <h1 className="font-display font-black text-3xl md:text-4xl text-[#1A1A1A] mb-8">
          DMCA Policy
        </h1>
        
        <div className="max-w-none text-gray-700 space-y-6 leading-relaxed">
          <p>
            CFA Menu Guide ("we", "us", or "our") respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at <a href="http://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer" className="text-[#DD0033] hover:underline">http://www.copyright.gov/legislation/dmca.pdf</a>, we will respond expeditiously to claims of copyright infringement committed using our service.
          </p>
          
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4">Notice of Infringement</h2>
          <p>
            If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.
          </p>
          
          <p>
            Upon receipt of the Notice as described below, we will take whatever action, in our sole discretion, we deem appropriate, including removal of the challenged material from the Site.
          </p>
          
          <h3 className="text-lg font-bold text-[#1A1A1A] mt-6 mb-3">DMCA Notice of Alleged Infringement</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you may provide a representative list of the copyrighted works that you claim have been infringed.</li>
            <li>Identify the material that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material, including at a minimum, if applicable, the URL of the link shown on the Site where such material may be found.</li>
            <li>Provide your mailing address, telephone number, and, if available, email address.</li>
            <li>Include both of the following statements in the body of the Notice:
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 italic">
                <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
                <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
              </ul>
            </li>
            <li>Provide your full legal name and your electronic or physical signature.</li>
          </ol>
          
          <h2 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4">Contact Information</h2>
          <p>
            Deliver this Notice, with all items completed, to our designated Copyright Agent via email at:
          </p>
          <p className="font-bold text-[#DD0033]">
            legal@cfamenuguide.com
          </p>
          
          <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-100">
            Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages.
          </p>
        </div>
      </div>
    </div>
  );
}
