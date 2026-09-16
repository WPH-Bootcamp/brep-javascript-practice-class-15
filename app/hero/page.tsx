import Image from 'next/image';

export default function BlogHero() {
  return (
    <section>
      <Image
        src={'/images/spiderman.jpeg'}
        alt="Ini adalah gambar spiderman"
        width={900}
        height={500}
      />

      <h1>SpiderDeveloper</h1>
    </section>
  );
}
