import { FC } from "react";

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
}

interface Props {
  member: TeamMember;
}

export const TeamMemberCard: FC<Props> = ({ member }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="max-w-[124px] sm:max-w-[164px]">
        <img className="w-full" src={member.image} alt={member.name} />
      </p>
      <h4 className="font-helvetica-neue text-base font-normal leading-normal text-white">
        {member.name}
      </h4>
      <p className="font-helvetica-neue text-sm font-normal leading-normal text-[#787878]">
        {member.role}
      </p>
    </div>
  );
};

