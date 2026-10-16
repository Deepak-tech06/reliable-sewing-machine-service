import { useGetAllServices, useGetAllDetailedServices, useGetAllExperienceTrustItems, useGetContactInfo } from '../hooks/useQueries';
import { Wrench, Loader2, Check, Phone, MessageCircle } from 'lucide-react';

export default function ServicesPage() {
  const { data: services, isLoading } = useGetAllServices();
  const { data: detailedServices, isLoading: isLoadingDetailed } = useGetAllDetailedServices();
  const { data: experienceTrustItems, isLoading: isLoadingExperience } = useGetAllExperienceTrustItems();
  const { data: contactInfo } = useGetContactInfo();

  const phoneNumber = contactInfo?.phoneNumber || '9980481645';
  const whatsappNumber = contactInfo?.whatsappNumber || '9980481645';

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Professional sewing machine services tailored to meet your needs. From repairs to sales, 
            we've got you covered.
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {services && services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id}
                  className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">
                  Contact us for information about our services.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Detailed Service List Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Service List</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services for all your sewing machine needs
            </p>
          </div>

          {isLoadingDetailed ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {detailedServices && detailedServices.length > 0 ? (
                detailedServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-8 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl flex-shrink-0">{service.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-muted-foreground">
                    Loading service details...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Experience & Trust Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground">
                Your trusted partner for sewing machine services
              </p>
            </div>

            {isLoadingExperience ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experienceTrustItems && experienceTrustItems.length > 0 ? (
                  experienceTrustItems.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <p className="font-semibold text-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">
                      Loading trust indicators...
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-12 p-8 rounded-xl bg-primary text-primary-foreground max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Need Immediate Repair? Call Us</h2>
          <p className="text-center opacity-90 mb-6">
            Get expert doorstep service for all your sewing machine needs. Contact us today for quick assistance!
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-medium justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/91${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-xl font-bold hover:underline"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
