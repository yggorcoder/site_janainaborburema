import { config as rawConfig } from "../../business.config.js";
import logoImage from "../assets/images/logo.jpeg";
import heroImage from "../assets/images/hero.jpg";
import pilatesClinicoImage from "../assets/images/pilates-clinico.jpeg";
import fisioterapiaIntegrativaImage from "../assets/images/fisioterapia-integrativa.jpeg";
import pilates3Image from "../assets/images/pilates-3.jpg";
import galeria1 from "../assets/images/gallery/galeria-1.jpeg";
import galeria2 from "../assets/images/gallery/galeria-2.jpeg";
import galeria3 from "../assets/images/gallery/galeria-3.jpeg";
import galeria4 from "../assets/images/gallery/galeria-4.jpeg";
import galeria5 from "../assets/images/gallery/galeria-5.jpeg";

const serviceImages = [pilatesClinicoImage, fisioterapiaIntegrativaImage, pilates3Image];
const galleryImages = [galeria1, galeria2, galeria3, galeria4, galeria5];

export const config = {
  ...rawConfig,
  logo: logoImage,
  hero: {
    ...rawConfig.hero,
    image: heroImage,
  },
  services: {
    ...rawConfig.services,
    main: rawConfig.services.main.map((service, index) => ({
      ...service,
      image: serviceImages[index] ?? service.image,
    })),
  },
  gallery: {
    ...rawConfig.gallery,
    images: rawConfig.gallery.images.map((image, index) => ({
      ...image,
      src: galleryImages[index] ?? image.src,
    })),
  },
  contact: {
    ...rawConfig.contact,
    image: pilates3Image,
  },
};

export function getSiteUrl() {
  const env = import.meta.env.VITE_SITE_URL;
  return (env ?? config.siteUrl).replace(/\/$/, "");
}

export function getFullAddress() {
  const { street, neighborhood, city, state } = config.location;
  return `${street} - ${neighborhood}, ${city}, ${state}`;
}

export function getGoogleMapsUrl() {
  const q = encodeURIComponent(config.location.mapsQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function getGoogleMapsEmbedUrl() {
  const q = encodeURIComponent(config.location.mapsQuery);
  return `https://maps.google.com/maps?q=${q}&hl=pt&z=16&output=embed`;
}

export function getWhatsAppUrl(message = config.whatsapp.defaultMessage) {
  return `https://wa.me/${config.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
