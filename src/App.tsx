import FAQs from "@/components/faqs";
import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/contact-section";
import ProcessSection from "@/components/process-section";
import PortfolioSection from "@/components/portfolio-section";
import BeforeAfterSection from "@/components/before-after-section";
import TestimonialsSection from "@/components/testimonials-section";
import ServiceAreaSection from "@/components/service-area-section";
import CTASection from "@/components/cta-section";
import MobileStickyCTA from "@/components/mobile-sticky-cta";

function App() {
	return (
		<>
			<HeroSection />
			<ProcessSection />
			<PortfolioSection />
			<BeforeAfterSection />
			<TestimonialsSection />
			<FAQs />
			<ServiceAreaSection />
			<CTASection />
			<ContactSection />
			<MobileStickyCTA />
		</>
	);
}

export default App;
