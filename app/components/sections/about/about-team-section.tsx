import { FC } from "react";
import { TeamMemberCard } from "@/app/components/shared/TeamMemberCard";

interface Props {
  className?: string;
}

const teamMembers = [
  { id: "1", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "2", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "3", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "4", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "5", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "6", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "7", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
  { id: "8", image: "/images/teams/01.png", name: "Адмиралов Тимур", role: "Head of Product" },
];

export const AboutTeamSection: FC<Props> = ({ className }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <section className={"section-content bg-transparent px-0 px-0 xs:px-10 md:px-16"}>
          <h2 className="text-h2 lg:max-w-[60%]">
            Все это создает и поддерживает команда настоящих профессионалов
          </h2>
          <div className="grid grid-cols-2 justify-end gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4">
            {teamMembers?.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
