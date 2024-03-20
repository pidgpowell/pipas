export default async function getAuthorImage(author: string) {
  const basePath = '/src/assets';
  const defaultPath = `${basePath}/logo-classic.webp`;
  const authorPath = `${basePath}/content/team/dark/${author?.replace(" ", "") ?? ""}.webp`;

  const images = author
    ? import.meta.glob<{ default: ImageMetadata }>("/src/assets/content/team/dark/*.webp")
    : import.meta.glob<{ default: ImageMetadata }>("/src/assets/*.webp");

  return images[author ? authorPath : defaultPath]();
}