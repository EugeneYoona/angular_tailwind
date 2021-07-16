import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Container from '@/src/components/container';
import { getDashboardByTechnologie, isTechno } from '@/src/data/parseData';

export default function TechnoDocPage() {
  const router = useRouter();
  const name: any = router.query.name;
  const { slug } = router.query;
  const data = getDashboardByTechnologie(name, slug);

  React.useEffect(() => {
    if (router.isReady) {
      if (!router.query?.name || !router.query.slug) {
        router.push('/dashboard/all');
      }
    }
  }, [router]);

  return (
    <Fragment>
      {name && (
        <Fragment>
          <Head>
            <title>
              {data?.name} - {isTechno(name)}
            </title>
          </Head>
          <Container>
            <div className="mt-32 lg:w-8/12">
              <h1 className="mb-6 text-center text-3xl font-bold md:text-left">
                {data?.name} - {isTechno(name)}
              </h1>
              <Image src={data.image} alt={data?.name} />
              <p className="mt-6">
                Salvia-kit dashboard is a professional dashboard built with{' '}
                <strong>Tailwind CSS</strong>. We took advantage of Tailwind's
                flexibility to create a fully customizable premium dashboard,
                with documentation designed by a developer for developers. Feel
                free to customize everything to suit your needs.
              </p>
            </div>
            {data.techno.doc}
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
}