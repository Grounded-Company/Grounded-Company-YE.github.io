import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";

export default function Home() {
  const { data: waitlistCount } = useQuery({
    queryKey: ["/api/waitlist/count"],
  });

  return (
    <main className="min-h-screen">
      <Hero waitlistCount={waitlistCount?.count || 0} />
      <Features />
    </main>
  );
}
