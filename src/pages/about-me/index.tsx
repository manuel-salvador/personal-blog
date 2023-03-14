import MainLayout from '@/layouts/MainLayout';

export default function AboutMePage() {
  return (
    <MainLayout title="Sobre mí | Blog Manu S.">
      <h2 className="text-3xl font-semibold mt-4 mb-10">Sobre mí</h2>
      <p>Soy Manuel Salvador, desarrollador web full-stack.</p>
      <p>
        Este es un blog que hecho con React, Next.js, TypeScript, TailwindCSS y Notion como base de
        datos.
      </p>
    </MainLayout>
  );
}
