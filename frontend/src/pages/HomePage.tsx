import { Link } from '@tanstack/react-router';
import { Wrench, Truck, ShoppingBag, CheckCircle, Phone, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { useGetAllServices, useGetContactInfo, useGetServiceLocation } from '../hooks/useQueries';
import ServiceLocationMap from '../components/ServiceLocationMap';

export default function HomePage() {
  const { data: services, isLoading } = useGetAllServices();
  const { data: contactInfo } = useGetContactInfo();
  const { data: serviceLocation } = useGetServiceLocation();

  const features = [
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'Professional repair services for all types of sewing machines',
    },
    {
      icon: ShoppingBag,
      title: 'New & Used Machines',
      description: 'Wide selection of quality sewing machines for every budget',
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Convenient delivery service right to your doorstep',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'All work backed by our commitment to excellence',
    },
  ];

  const phoneNumber = contactInfo?.phoneNumber || '9980481645';
  const whatsappNumber = contactInfo?.whatsappNumber || '9980481645';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border/40">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Expert Sewing Machine Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional repairs, quality machines, and reliable service for all your sewing needs. 
                With years of experience, we keep your machines running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book Repair
                </a>
                <a
                  href={`https://wa.me/91${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-1">Call us now:</p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-2xl font-bold text-primary hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/mechanic-at-work.dim_800x600.jpg"
                alt="Sewing machine mechanic at work"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing exceptional service and expertise for all your sewing machine needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your sewing machine requirements
            </p>
          </div>
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-48 rounded-xl bg-card border border-border animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services?.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
              <p className="text-lg text-muted-foreground">
                We provide sewing machine repair and delivery services across nearby areas. Call us to check availability in your location.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/5 border border-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-sm font-medium">
                  Serving local communities and surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Location Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Location</h2>
              <p className="text-lg text-muted-foreground">
                Find us at our service location for all your sewing machine needs
              </p>
            </div>
            {serviceLocation && (
              <ServiceLocationMap
                latitude={serviceLocation.latitude}
                longitude={serviceLocation.longitude}
              />
            )}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Call Now for Doorstep Repair</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Need immediate sewing machine repair? Get expert service at your doorstep. Contact us today!
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-medium text-lg shadow-lg"
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
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Phone className="w-5 h-5" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-2xl font-bold hover:underline"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
