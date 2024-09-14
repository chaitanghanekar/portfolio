import Head from 'next/head';
import Resume from 'app/components/resume';

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="mx-auto">
        <h1 className="mb-4 text-5xl font-semibold">
          Resume
        </h1>
        
        <Resume />
      </section>
    </>
  );
}