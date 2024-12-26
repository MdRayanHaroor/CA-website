// app/page.tsx
import Slider from '@/components/Slider';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Testimonials />
      <Contact />

      {/* First Ad Placement */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8232236830358247"
          data-ad-slot="1997798361"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </>
  );
}
