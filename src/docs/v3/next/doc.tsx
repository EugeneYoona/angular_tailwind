import V3NextFirstSection from '@/src/docs/v3/next/sections/first';
import V3NextSecondSection from '@/src/docs/v3/next/sections/second';
import V3NextThirdSection from '@/src/docs/v3/next/sections/third';
import V3NextFourthSection from '@/src/docs/v3/next/sections/fourth';
import V3NextFifthSection from '@/src/docs/v3/next/sections/fifth';
import LintersSection from '@/src/docs/common/linters';
import ComponentsSection from '@/src/docs/common/components';
import FeaturesSection from '@/src/docs/common/features';
import NextIcon from '@/src/components/icons/next';

export default function DocV3Next() {
  return (
    <div className="mt-12 max-w-full">
      <h2 className="flex mb-16 text-3xl font-medium">
        <NextIcon className="mt-2 w-20 h-12" />
        <span className="pl-2 pt-4">Documentation</span>
      </h2>
      <FeaturesSection />
      <V3NextFirstSection />
      <V3NextSecondSection />
      <V3NextThirdSection />
      <LintersSection />
      <V3NextFourthSection />
      <V3NextFifthSection />
      <ComponentsSection />
    </div>
  );
}
