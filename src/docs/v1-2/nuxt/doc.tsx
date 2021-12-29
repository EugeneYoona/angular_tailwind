import Image from 'next/image';
import LintersSection from '@/src/docs/common-sections/linters';
import FeaturesSection from '@/src/docs/common-sections/features';
import V1AndV2NuxtThirdSection from '@/src/docs/v1-2/nuxt/sections/third';
import V1AndV2NuxtFourthSection from '@/src/docs/v1-2/nuxt/sections/fourth';
import VueNuxtFifthSection from '@/src/docs/common-sections/section/vue-nuxt/fifthSection';
import { NuxtCommonFirstSectionV1AndV7 } from '@/src/docs/common-sections/section/nuxt/firstSection';
import { NuxtCommonSecondSectionV1AndV7 } from '@/src/docs/common-sections/section/nuxt/secondSection';

// this doc is for the version 1 and 2 of dashboard
export default function DocV1AndV2Nuxt() {
  return (
    <div className="mt-16 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <Image src="/svg/nuxt.svg" height={30} width={30} alt="Nuxt icon" />
        <span className="pl-2">Documentation</span>
      </h2>
      <FeaturesSection />
      <NuxtCommonFirstSectionV1AndV7 />
      <NuxtCommonSecondSectionV1AndV7 />
      <V1AndV2NuxtThirdSection />
      <V1AndV2NuxtFourthSection />
      <LintersSection />
      <VueNuxtFifthSection />
    </div>
  );
}
