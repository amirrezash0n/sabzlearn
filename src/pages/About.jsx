import React from "react";
import styled from "styled-components";
import {
  FaUsers,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

const AboutContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #2f3542;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #69e3a0;
  }
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: #57606f;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2f3542;
    margin-bottom: 1.5rem;
  }

  p {
    color: #57606f;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  color: #69e3a0;
  margin-bottom: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2f3542;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #57606f;
  font-size: 1.1rem;
`;

const TeamSection = styled.section`
  margin-top: 5rem;
`;

const TeamTitle = styled.h3`
  font-size: 2rem;
  color: #2f3542;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #69e3a0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h4`
  font-size: 1.3rem;
  color: #2f3542;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #69e3a0;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #57606f;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "علی محمدی",
      role: "موسس و مدیر عامل",
      bio: "متخصص فرانت‌اند با بیش از ۱۰ سال سابقه کار در شرکت‌های معتبر بین‌المللی",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "مریم احمدی",
      role: "مدیر آموزش",
      bio: "کارشناس ارشد مهندسی نرم‌افزار با سابقه تدریس در دانشگاه‌های معتبر",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "رضا حسینی",
      role: "مدرس ارشد",
      bio: "توسعه‌دهنده فول‌استک با تخصص در React و Node.js",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "نازنین کریمی",
      role: "طراح رابط کاربری",
      bio: "متخصص UX/UI با سابقه کار در استارتاپ‌های موفق ایرانی",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>درباره سبزلرن</AboutTitle>
        <AboutSubtitle>
          ما باور داریم که آموزش با کیفیت حق همه است و می‌تواند زندگی افراد را
          متحول کند
        </AboutSubtitle>
      </AboutHeader>

      <AboutContent>
        <AboutImage>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="تیم سبزلرن"
          />
        </AboutImage>

        <AboutText>
          <h3>داستان ما</h3>
          <p>
            سبزلرن در سال ۱۳۹۸ با هدف ارائه آموزش‌های باکیفیت در حوزه
            برنامه‌نویسی و فناوری اطلاعات تأسیس شد. ما با تیمی از متخصصان
            باتجربه تلاش می‌کنیم تا با ارائه دوره‌های کاربردی و پروژه‌محور، مسیر
            یادگیری را برای علاقه‌مندان به برنامه‌نویسی هموار کنیم.
          </p>
          <p>
            در این سال‌ها، بیش از ۱۰۰۰۰ دانشجو در دوره‌های ما شرکت کرده‌اند و
            بسیاری از آن‌ها توانسته‌اند با استفاده از مهارت‌های کسب شده، شغل
            مناسب پیدا کنند یا کسب‌وکار خود را راه‌اندازی نمایند.
          </p>
          <p>
            ماموریت ما این است که با ارائه آموزش‌های عملی و به‌روز، شما را برای
            بازار کار آماده کنیم.
          </p>
        </AboutText>
      </AboutContent>

      <StatsContainer>
        <StatItem>
          <StatIcon>
            <FaUsers />
          </StatIcon>
          <StatNumber>۱۰,۰۰۰+</StatNumber>
          <StatLabel>دانشجوی فعال</StatLabel>
        </StatItem>

        <StatItem>
          <StatIcon>
            <FaGraduationCap />
          </StatIcon>
          <StatNumber>۵۰+</StatNumber>
          <StatLabel>دوره آموزشی</StatLabel>
        </StatItem>

        <StatItem>
          <StatIcon>
            <FaChalkboardTeacher />
          </StatIcon>
          <StatNumber>۱۵+</StatNumber>
          <StatLabel>مدرس متخصص</StatLabel>
        </StatItem>

        <StatItem>
          <StatIcon>
            <FaAward />
          </StatIcon>
          <StatNumber>۹۵%</StatNumber>
          <StatLabel>رضایت دانشجویان</StatLabel>
        </StatItem>
      </StatsContainer>

      <TeamSection>
        <TeamTitle>تیم ما</TeamTitle>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamMember key={member.id}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
