import { MapPin } from 'lucide-react';

interface ServiceLocationMapProps {
  latitude: string;
  longitude: string;
}

export default function ServiceLocationMap({ latitude, longitude }: ServiceLocationMapProps) {
  // Convert DMS coordinates to decimal for Google Maps
  const convertDMSToDecimal = (lat: string, lon: string) => {
    // Parse latitude: 12°50'04.9"N
    const latMatch = lat.match(/(\d+)°(\d+)'([\d.]+)"([NS])/);
    // Parse longitude: 77°29'09.6"E
    const lonMatch = lon.match(/(\d+)°(\d+)'([\d.]+)"([EW])/);
    
    if (!latMatch || !lonMatch) return { lat: 12.8347, lng: 77.4860 };
    
    const latDeg = parseFloat(latMatch[1]);
    const latMin = parseFloat(latMatch[2]);
    const latSec = parseFloat(latMatch[3]);
    const latDir = latMatch[4];
    
    const lonDeg = parseFloat(lonMatch[1]);
    const lonMin = parseFloat(lonMatch[2]);
    const lonSec = parseFloat(lonMatch[3]);
    const lonDir = lonMatch[4];
    
    let latDecimal = latDeg + latMin / 60 + latSec / 3600;
    let lonDecimal = lonDeg + lonMin / 60 + lonSec / 3600;
    
    if (latDir === 'S') latDecimal = -latDecimal;
    if (lonDir === 'W') lonDecimal = -lonDecimal;
    
    return { lat: latDecimal, lng: lonDecimal };
  };

  const { lat, lng } = convertDMSToDecimal(latitude, longitude);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=15`;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 text-primary" />
        <span>
          {latitude}, {longitude}
        </span>
      </div>
      <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-md">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Service Location"
        />
      </div>
    </div>
  );
}
