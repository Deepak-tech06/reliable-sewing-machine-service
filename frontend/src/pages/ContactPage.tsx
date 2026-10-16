import { useGetContactInfo, useGetServiceAreas, useGetServiceLocation } from '../hooks/useQueries';
import { Phone, Clock, MapPin, Loader2, MessageCircle } from 'lucide-react';
import ServiceLocationMap from '../components/ServiceLocationMap';

export default function ContactPage() {
  const { data: contactInfo, isLoading: contactLoading } = useGetContactInfo();
  const { data: serviceAreas, isLoading: areasLoading } = useGetServiceAreas();
  const { data: serviceLocation } = useGetServiceLocation();

  const phoneNumber = contactInfo?.phoneNumber || '9980481645';
  const whatsappNumber = contactInfo?.whatsappNumber || '9980481645';

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to repair your machine or purchase a new one? Contact us today for expert service.
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Book a Service Today</h2>
            <p className="text-muted-foreground mb-6">
              Get immediate assistance for all your sewing machine needs
            </p>
            {contactLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto" />
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/91${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium text-lg shadow-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              {contactLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="text-lg text-primary hover:underline font-medium"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href={`https://wa.me/91${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-primary hover:underline font-medium"
                      >
                        {whatsappNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">{contactInfo?.businessHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Service Type</h3>
                      <p className="text-muted-foreground">Home-based service with delivery available</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="p-8 rounded-xl bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-3">Ready to Book?</h3>
              <p className="mb-6 opacity-90">
                Call us now to schedule a repair, inquire about machines, or discuss your needs.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-medium w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Service Area & Location */}
          <div className="space-y-6">
            {/* Service Areas Section */}
            <div className="p-8 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
              <p className="text-muted-foreground mb-6">
                We provide sewing machine repair and delivery services across nearby areas. Call us to check availability in your location.
              </p>
              
              {areasLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                </div>
              ) : serviceAreas && serviceAreas.length > 0 ? (
                <div className="space-y-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{area.areaName}</h3>
                        <p className="text-sm text-muted-foreground">
                          We provide service throughout this area
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Local Service Area</h3>
                      <p className="text-sm text-muted-foreground">
                        We serve the local community and surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-bold mb-6">Service Location</h2>
              
              {serviceLocation && (
                <ServiceLocationMap
                  latitude={serviceLocation.latitude}
                  longitude={serviceLocation.longitude}
                />
              )}
            </div>

            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2">Home Delivery Available</h3>
              <p className="text-sm text-muted-foreground">
                We offer convenient home delivery for all purchased machines. Ask about delivery 
                options when you call.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-xl border border-border bg-card">
            <h2 className="text-2xl font-bold mb-4 text-center">What to Expect</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  Reach out to discuss your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Get a Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Receive pricing and timeline
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Expert Service</h3>
                <p className="text-sm text-muted-foreground">
                  Quality work you can trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
