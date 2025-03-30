import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>

        {/* Banner image */}
        <div className="relative aspect-[16/9] mb-8">
          <Image
            src="/images/about/studio-banner.jpg"
            alt="Our studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-6">
            Founded in 2010, our brand has been at the forefront of contemporary
            fashion, blending innovative design with exceptional craftsmanship.
            What began as a small studio in Berlin has grown into an
            internationally recognized label, while maintaining our commitment
            to quality and sustainability.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p className="mb-6">
            We believe in creating timeless pieces that transcend seasonal
            trends. Each garment is designed with purpose and precision, using
            premium materials sourced from responsible suppliers. Our
            collections reflect a balance between functionality and aesthetic,
            resulting in clothing that is both practical and distinctive.
          </p>

          <h2 className="text-2xl font-bold mb-4">Sustainability Commitment</h2>
          <p className="mb-6">
            Environmental responsibility is central to our ethos. We
            continuously strive to minimize our ecological footprint by
            implementing sustainable practices throughout our production
            process. From using organic cotton and recycled polyester to
            reducing waste and water consumption, we are dedicated to making
            fashion that respects our planet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="relative aspect-square">
              <Image
                src="/images/about/design-process.jpg"
                alt="Design process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about/craftsmanship.jpg"
                alt="Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Craftsmanship</h2>
          <p>
            Every piece in our collection undergoes rigorous quality control to
            ensure exceptional standards. Our team of skilled artisans combines
            traditional techniques with modern innovation, resulting in garments
            that are built to last. We take pride in the details, from perfect
            stitching to thoughtful finishes, creating clothing that feels as
            good as it looks.
          </p>
        </div>
      </div>
    </div>
  );
}
