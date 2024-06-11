export function Map() {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const origin = "Miguel Barreiro 2970 bis, 11300 Montevideo, Uruguay";

  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_API_KEY}&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(origin)}&mode=driving&zoom=16`;

  return (
    <iframe
      title="Google Maps Directions"
      id="gmap_canvas"
      className="h-full w-full"
      src={mapSrc}
    ></iframe>
  );
}
