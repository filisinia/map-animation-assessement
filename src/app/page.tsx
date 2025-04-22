import { Dot } from "@/components/dot/Dot";

export default function Home() {
  return (
    <div>
      <Dot status="active" animate />
      <Dot status="inactive" animate />
    </div>
  );
}
