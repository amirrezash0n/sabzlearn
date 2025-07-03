import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const ContactHeader = styled.div`
  text-align: center;
`;

const ContactTitle = styled.h2`
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #57606f;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  color: #69e3a0;
  font-size: 1.5rem;
  margin-top: 0.3rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: #2f3542;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #57606f;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #2f3542;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #69e3a0;
    box-shadow: 0 0 0 3px rgba(105, 227, 160, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #69e3a0;
    box-shadow: 0 0 0 3px rgba(105, 227, 160, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #69e3a0;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #4ec887;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما با موفقیت ارسال شد!");
    e.target.reset();
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>تماس با ما</ContactTitle>
        <ContactSubtitle>
          برای دریافت پاسخ سوالات خود، پیشنهادات یا انتقادات می‌توانید از طریق
          فرم زیر با ما در ارتباط باشید
        </ContactSubtitle>
      </ContactHeader>

      <ContactContent>
        <ContactInfo>
          <InfoItem>
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>تلفن تماس</InfoTitle>
              <InfoText>۰۲۱-۱۲۳۴۵۶۷۸</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>ایمیل</InfoTitle>
              <InfoText>info@sabzlearn.com</InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>آدرس</InfoTitle>
              <InfoText>
                تهران، خیابان آزادی، دانشگاه صنعتی شریف، ساختمان مرکزی
              </InfoText>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FaClock />
            </InfoIcon>
            <InfoContent>
              <InfoTitle>ساعات کاری</InfoTitle>
              <InfoText>شنبه تا چهارشنبه: ۸ صبح تا ۴ عصر</InfoText>
            </InfoContent>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">نام و نام خانوادگی</FormLabel>
            <FormInput type="text" id="name" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">ایمیل</FormLabel>
            <FormInput type="email" id="email" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">موضوع</FormLabel>
            <FormInput type="text" id="subject" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">پیام شما</FormLabel>
            <FormTextarea id="message" required />
          </FormGroup>

          <SubmitButton type="submit">
            <FaPaperPlane />
            ارسال پیام
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
