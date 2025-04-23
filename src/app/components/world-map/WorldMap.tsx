import Image from 'next/image';

export const WorldMap = () => {
  return (
    <div className="absolute inset-0 z-[-1] scale-[3.2] origin-top-left translate-x-[-85%] translate-y-[-75%]">
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
