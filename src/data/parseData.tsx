import data from './data';
import { ChildrenType } from '@/src/utils/globalTypes';

type TechnoTypes = {
  react: {
    doc: ChildrenType;
    demo: string;
    name: string;
  };
  next: {
    doc: ChildrenType;
    demo: string;
    name: string;
  };
  vue: {
    doc: ChildrenType;
    demo: string;
    name: string;
  };
  nuxt: {
    doc: ChildrenType;
    demo: string;
    name: string;
  };
};

interface IProps {
  id: number;
  name: string;
  slug: string;
  image: StaticImageData;
  techno: any;
}

function parseData(data: any) {
  return JSON.parse(JSON.stringify(data));
}

function getDashboardsByTechnologie(name: keyof TechnoTypes) {
  const dashboards: Array<IProps> = data.map((data) => ({
    id: data.id,
    name: data.name,
    slug: data.slug,
    image: data.image,
    techno: data.techno[name],
  }));
  return dashboards;
}

function getDashboardByTechnologie(name: keyof TechnoTypes, slug: any) {
  const dashboards: Array<IProps> = data.filter((dash) => dash.slug === slug);
  return {
    name: dashboards[0]?.name,
    slug: dashboards[0]?.slug,
    image: dashboards[0]?.image,
    techno: dashboards[0]?.techno[name],
  };
}

async function getDashboard(slug: string) {
  const dashboards: Array<IProps> = await data.filter(
    (dash) => dash.slug === slug,
  );
  const dashboard = dashboards[0];
  return parseData(dashboard);
}

function getTechno(slug: string | string[] | undefined) {
  const dashboards: Array<IProps> = data.filter((dash) => dash.slug === slug);
  return dashboards[0]?.techno;
}

function isTechno(name: string) {
  switch (name) {
    case 'react':
      return 'React';
    case 'next':
      return 'Next.js';
    case 'vue':
      return 'Vue';
    case 'nuxt':
      return 'Nuxt.js';
    default:
      return null;
  }
}

export {
  isTechno,
  getTechno,
  parseData,
  getDashboard,
  getDashboardByTechnologie,
  getDashboardsByTechnologie,
};
