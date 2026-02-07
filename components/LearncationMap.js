import { useEffect, useRef } from 'react';

const LearncationMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      // Clean up existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map centered on South Korea to show entire route
      const map = L.map(mapRef.current).setView([36.8, 127.8], 7);
      mapInstanceRef.current = map;

      // Add tile layer (map background) - Minimal Style
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        maxZoom: 19,
      }).addTo(map);

      // Define locations with coordinates
      const locations = [
        {
          name: 'Incheon',
          coords: [37.4563, 126.7052],
          description: 'Arrival & Departure - Incheon International Airport',
          color: '#c17854',
          days: 'Days 2 & 11'
        },
        {
          name: 'Seoul',
          coords: [37.5665, 126.9780],
          description: 'Gyeongbokgung Palace, Insadong, National Museum, COEX',
          color: '#c17854',
          days: 'Days 2-4'
        },
        {
          name: 'Hoengseong',
          coords: [37.4896, 127.9846],
          description: 'Minjok Leadership Academy (KMLA) Exchange Program',
          color: '#c17854',
          days: 'Days 5-7'
        },
        {
          name: 'Yeoju',
          coords: [37.2982, 127.6378],
          description: 'Sejong Royal Tomb UNESCO World Heritage Site',
          color: '#c17854',
          days: 'Day 8'
        },
        {
          name: 'Cheonan',
          coords: [36.8065, 127.1522],
          description: 'Independence Hall of Korea',
          color: '#c17854',
          days: 'Day 8'
        },
        {
          name: 'Gyeongju',
          coords: [35.8562, 129.2247],
          description: 'Ancient Silla Kingdom Sites, Hanok Stay Experience',
          color: '#c17854',
          days: 'Days 9-10'
        }
      ];

      // Custom icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          background-color: #c17854;
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "><div style="
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "></div></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });

      // Add markers for each location
      locations.forEach((location) => {
        const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
        
        // Add popup with location info
        marker.bindPopup(`
          <div style="font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: #120902;">
              ${location.name}
            </h3>
            <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.5;">
              ${location.description}
            </p>
          </div>
        `);
      });

      // Draw lines connecting the locations (travel route)
      const routeCoords = locations.map(loc => loc.coords);
      L.polyline(routeCoords, {
        color: '#c17854',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
        lineJoin: 'round'
      }).addTo(map);

    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        style={{ height: '500px', width: '100%' }}
        className="z-0 rounded-lg shadow-lg"
      />
      
      {/* Legend */}
      <div className="mt-6 bg-[#f9f7f4] p-6 rounded-lg">
        <h4 className="text-lg font-bold mb-4 text-[#1e3a5f]">10-Day Trip Route</h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Incheon</div>
              <div className="text-sm text-gray-600">Days 2 & 11</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Seoul</div>
              <div className="text-sm text-gray-600">Days 2-4</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Hoengseong</div>
              <div className="text-sm text-gray-600">Days 5-7</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Yeoju</div>
              <div className="text-sm text-gray-600">Day 8</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Cheonan</div>
              <div className="text-sm text-gray-600">Day 8</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c17854] flex-shrink-0 mt-1"></div>
            <div>
              <div className="font-semibold text-[#120902]">Gyeongju</div>
              <div className="text-sm text-gray-600">Days 9-10</div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading CSS for Leaflet */}
      <style jsx global>{`
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 4px;
        }
        
        .leaflet-popup-content {
          margin: 12px;
        }
        
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default LearncationMap;