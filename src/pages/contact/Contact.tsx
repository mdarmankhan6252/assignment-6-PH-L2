import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  supportHours?: string;
  mapEmbedUrl?: string;
}

const Contact = ({
  title = "Get in Touch",
  description = "Need help with your parcel delivery? Our support team is available to answer all your queries, from booking shipments to tracking packages.",
  phone = "+1 (800) 123-4567",
  email = "support@parcelxpress.com",
  address = "123 Parcel Street, Delivery City, USA",
  supportHours = "Mon - Sat: 9:00 AM - 8:00 PM",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24155.11347462139!2d-73.9682853!3d40.7850914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589c93b1a0d9%3A0x8d7b6e2f4fbb9b4f!2sParcel%20Xpress!5e0!3m2!1sen!2sus!4v1693651282345",
}: ContactProps = {}) => {
  return (
    <section className="py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="mt-4 text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-lg font-medium">{phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg font-medium">{email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="text-lg font-medium">{address}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Support Hours</p>
              <p className="text-lg font-medium">{supportHours}</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden h-64">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="rounded-xl bg-white shadow-lg p-8 space-y-6">
          <h3 className="text-2xl font-semibold">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Input type="tel" placeholder="Your Phone" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={4} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
