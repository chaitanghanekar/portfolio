import Head from 'next/head';
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon1.ico"/>
    </Head>
    <section>
      
      <h1 className="mb-2 text-8xl font-semibold tracking-tighter">
        Hello!
      </h1>
      <h2 className="mb-1 ml-5 text-3xl tracking-tight">
        I'm Chaitan,
      </h2>
      <h3 className="mb-2 ml-7 text-1xl tracking-tight">
        Software Developer Based in Kelowna Canada
      </h3>
      <br></br>
      
      <p className="mb-1 text-1xl tracking-tight">I have a strong educational background having graduated from the University of British 
        Columbia with a Bachelors Degree with a concentration in Computer Science, Mathematics, and 
        Data Science. My passion for technology and problem-solving 
        drives me to continuously learn and take on new challenges.</p>

    </section>
    </>
  );
}