import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaHeadset,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: right;
  direction: rtl;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #69e3a0 0%, #186c65 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: white;
  color: #186c65;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #69e3a0;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2f3542;
`;

const FeatureDescription = styled.p`
  color: #57606f;
  line-height: 1.6;
`;

const CoursesSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2f3542;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 3px;
    background-color: #69e3a0;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2f3542;
`;

const CourseInstructor = styled.p`
  color: #57606f;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const CourseRating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffb800;
  font-weight: 600;
`;

const CourseStudents = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #57606f;
  font-size: 0.9rem;
`;

const CoursePrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #186c65;
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
`;

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaGraduationCap />,
      title: "آموزش‌های تخصصی",
      description: "دوره‌های آموزشی با کیفیت بالا توسط اساتید مجرب",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "مدرس‌های حرفه‌ای",
      description: "یادگیری از بهترین متخصصان هر حوزه",
    },
    {
      icon: <FaLaptopCode />,
      title: "پروژه‌محور",
      description: "آموزش همراه با انجام پروژه‌های واقعی",
    },
    {
      icon: <FaHeadset />,
      title: "پشتیبانی دائمی",
      description: "پاسخگویی به سوالات شما در هر زمان",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "دوره جامع React.js",
      instructor: "علی محمدی",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      students: 1245,
      currentPrice: 1290000,
      originalPrice: 1590000,
    },
    {
      id: 2,
      title: "آموزش Node.js پیشرفته",
      instructor: "مریم احمدی",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      students: 892,
      currentPrice: 990000,
      originalPrice: 1200000,
    },
    {
      id: 3,
      title: "طراحی رابط کاربری با Figma",
      instructor: "رضا حسینی",
      image:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      students: 1567,
      currentPrice: 850000,
      originalPrice: 0,
    },
    {
      id: 4,
      title: "دوره کامل Python",
      instructor: "نازنین کریمی",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      students: 2103,
      currentPrice: 1100000,
      originalPrice: 1350000,
    },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>یادگیری آنلاین با سبزلرن</HeroTitle>
        <HeroSubtitle>
          به بزرگترین جامعه یادگیری برنامه‌نویسی ایران بپیوندید و مهارت‌های خود
          را ارتقا دهید
        </HeroSubtitle>
        <CTAButton onClick={() => navigate("/products")}>
          مشاهده دوره‌ها
        </CTAButton>
      </HeroSection>

      <FeaturesSection>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesSection>

      <CoursesSection>
        <SectionTitle>جدیدترین دوره‌ها</SectionTitle>
        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              onClick={() => navigate(`/products/${course.id}`)}
            >
              <CourseImage src={course.image} alt={course.title} />
              <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseInstructor>مدرس: {course.instructor}</CourseInstructor>

                <CourseMeta>
                  <CourseRating>
                    <FaStar />
                    {course.rating}
                  </CourseRating>
                  <CourseStudents>
                    <FaUsers />
                    {course.students.toLocaleString()}
                  </CourseStudents>
                </CourseMeta>

                <CoursePrice>
                  <CurrentPrice>
                    {course.currentPrice.toLocaleString()} تومان
                  </CurrentPrice>
                  {course.originalPrice > 0 && (
                    <OriginalPrice>
                      {course.originalPrice.toLocaleString()} تومان
                    </OriginalPrice>
                  )}
                </CoursePrice>
              </CourseContent>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesSection>
    </HomeContainer>
  );
};

export default Home;
