import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NewsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const NewsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const NewsTitle = styled.h2`
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

const NewsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #57606f;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const NewsMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #57606f;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NewsCardTitle = styled.h3`
  font-size: 1.3rem;
  color: #2f3542;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const NewsExcerpt = styled.p`
  color: #57606f;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const ReadMoreLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #69e3a0;
  font-weight: 600;
  text-decoration: none;
  margin-top: auto;
  transition: all 0.3s ease;

  &:hover {
    color: #4ec887;
    gap: 0.7rem;
  }
`;

const sampleNews = [
  {
    id: 1,
    title: "برگزاری همایش سالانه توسعه‌دهندگان وب",
    excerpt:
      "همایش سالانه توسعه‌دهندگان وب با حضور برترین متخصصان کشور در تاریخ ۱۵ مرداد برگزار خواهد شد.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۵/۱۰",
    author: "تیم سبزلرن",
    category: "رویدادها",
  },
  {
    id: 2,
    title: "آخرین بروزرسانی React نسخه ۱۸ منتشر شد",
    excerpt:
      "شرکت فیسبوک آخرین نسخه از کتابخانه محبوب React را با قابلیت‌های جدید منتشر کرد.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۴/۲۵",
    author: "علی محمدی",
    category: "تکنولوژی",
  },
  {
    id: 3,
    title: "معرفی برترین فریمورک‌های Frontend در سال ۲۰۲۳",
    excerpt:
      "در این مقاله به بررسی و مقایسه محبوب‌ترین فریمورک‌های فرانت‌اند در سال جاری می‌پردازیم.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۴/۱۵",
    author: "مریم احمدی",
    category: "مقالات",
  },
  {
    id: 4,
    title: "آموزش پروژه‌محور TypeScript از صفر تا صد",
    excerpt:
      "دوره جدید آموزش TypeScript به صورت پروژه‌محور در سبزلرن منتشر شد.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۳/۲۸",
    author: "رضا حسینی",
    category: "آموزش",
  },
  {
    id: 5,
    title: "تغییرات بزرگ در اکوسیستم JavaScript در سال ۲۰۲۳",
    excerpt:
      "چه تغییرات مهمی در دنیای JavaScript در سال جاری رخ داده است؟ در این مقاله به بررسی می‌پردازیم.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۳/۱۰",
    author: "نازنین کریمی",
    category: "تکنولوژی",
  },
  {
    id: 6,
    title: "برگزاری کارگاه رایگان طراحی رابط کاربری",
    excerpt:
      "کارگاه رایگان طراحی UI/UX با Figma روز پنجشنبه در مجموعه سبزلرن برگزار می‌شود.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "۱۴۰۲/۰۲/۲۰",
    author: "سارا محمدزاده",
    category: "رویدادها",
  },
];

const News = () => {
  return (
    <NewsContainer>
      <NewsHeader>
        <NewsTitle>آخرین اخبار و مقالات</NewsTitle>
        <NewsSubtitle>
          تازه‌ترین اخبار، مقالات آموزشی و رویدادهای دنیای تکنولوژی و
          برنامه‌نویسی
        </NewsSubtitle>
      </NewsHeader>

      <NewsGrid>
        {sampleNews.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage src={news.image} alt={news.title} />
            <NewsContent>
              <NewsMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  {news.date}
                </MetaItem>
                <MetaItem>
                  <FaUser />
                  {news.author}
                </MetaItem>
              </NewsMeta>
              <NewsCardTitle>{news.title}</NewsCardTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <ReadMoreLink to={`/news/${news.id}`}>
                <FaArrowLeft />
                ادامه مطلب
              </ReadMoreLink>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default News;
