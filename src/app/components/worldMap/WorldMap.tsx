import Image from 'next/image';

export const WorldMap = () => {
  return (
    <div className="absolute inset-0 z-[-1] scale-[4] origin-top-left translate-x-[-125%] translate-y-[-115%]">
      <Image
        src="/images/world-map.jpg"
        alt="World Map"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
