import { Camera, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useGetContactInfo } from '../hooks/useQueries';

interface MachineImage {
  id: string;
  src: string;
  alt: string;
  category: 'new' | 'used' | 'industrial' | 'vintage';
  title: string;
  description: string;
}

export default function MachinesPage() {
  const [filter, setFilter] = useState<'all' | 'new' | 'used' | 'industrial' | 'vintage'>('all');
  const { data: contactInfo } = useGetContactInfo();
  const phoneNumber = contactInfo?.phoneNumber || '9980481645';
  const whatsappNumber = contactInfo?.whatsappNumber || '9980481645';

  const machineImages: MachineImage[] = [
    {
      id: '1',
      src: '/assets/generated/home-sewing-setup.dim_800x600.jpg',
      alt: 'Home sewing setup',
      category: 'new',
      title: 'Home Sewing Setup',
      description: 'Perfect setup for home sewing enthusiasts with modern equipment',
    },
    {
      id: '2',
      src: '/assets/generated/industrial-machine.dim_400x400.jpg',
      alt: 'Industrial sewing machine',
      category: 'industrial',
      title: 'Industrial Machine',
      description: 'Heavy-duty industrial sewing machine for professional use',
    },
    {
      id: '3',
      src: '/assets/generated/modern-machine.dim_400x400.jpg',
      alt: 'Modern sewing machine',
      category: 'new',
      title: 'Modern Sewing Machine',
      description: 'Latest model with advanced features and digital controls',
    },
    {
      id: '4',
      src: '/assets/generated/vintage-singer.dim_400x400.jpg',
      alt: 'Vintage Singer sewing machine',
      category: 'vintage',
      title: 'Vintage Singer',
      description: 'Classic Singer machine, well-maintained and fully functional',
    },
    {
      id: '5',
      src: '/assets/generated/sewing-machines-collection.dim_1024x768.jpg',
      alt: 'Collection of sewing machines',
      category: 'used',
      title: 'Machine Collection',
      description: 'Various quality second-hand machines available',
    },
    {
      id: '6',
      src: '/assets/generated/repair-closeup.dim_600x400.jpg',
      alt: 'Sewing machine repair closeup',
      category: 'used',
      title: 'Repair & Restoration',
      description: 'Expert repair services for all machine types',
    },
    {
      id: '7',
      src: '/assets/generated/mechanic-at-work.dim_800x600.jpg',
      alt: 'Mechanic working on sewing machine',
      category: 'industrial',
      title: 'Professional Service',
      description: 'Skilled technician servicing industrial equipment',
    },
  ];

  const filteredMachines = machineImages.filter((machine) => {
    if (filter === 'all') return true;
    return machine.category === filter;
  });

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Machine Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of sewing machines. From brand new models to vintage classics, 
            industrial equipment to home setups - we have expertise across all types.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'new'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setFilter('used')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'used'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Second-Hand
          </button>
          <button
            onClick={() => setFilter('industrial')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'industrial'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Industrial
          </button>
          <button
            onClick={() => setFilter('vintage')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'vintage'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Vintage
          </button>
        </div>

        {filteredMachines.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={machine.src}
                    alt={machine.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground capitalize">
                      {machine.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{machine.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {machine.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-sm font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              No machines in this category at the moment.
            </p>
          </div>
        )}

        <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Looking for Something Specific?</h2>
          <p className="text-center text-muted-foreground mb-6">
            We can help you find the perfect sewing machine for your needs. Contact us to discuss 
            your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </a>
            <a
              href={`https://wa.me/91${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
