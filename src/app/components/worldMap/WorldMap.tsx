import Image from 'next/image';

export const WorldMap = () => {
  return (
    <div className="absolute inset-0 scale-[4] origin-top-left translate-x-[-120%] translate-y-[-115%]">
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
