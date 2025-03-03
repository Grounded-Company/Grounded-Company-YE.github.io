import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { Team } from "@shared/schema";

export default function Team() {
  const { data: team, isLoading } = useQuery<Team[]>({
    queryKey: ["/api/team"],
  });

  return (
    <main className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Growth Journal, dedicated to helping you nurture your personal growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="h-[300px] animate-pulse">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-3" />
                  <div className="h-3 bg-muted rounded w-1/2 mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded" />
                    <div className="h-2 bg-muted rounded" />
                    <div className="h-2 bg-muted rounded w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            team?.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
