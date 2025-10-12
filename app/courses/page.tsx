import { FC } from 'react';
import ComingSoon from '@/components/common/ComingSoon';

const CoursesPage: FC = () => {
  return (
    <ComingSoon 
      title="Islamic Courses"
      description="Enhance your Islamic knowledge with our comprehensive courses covering Quran, Hadees, Seerat, Fiqh, and Islamic History. Learn from qualified scholars and educators."
      category="Education"
    />
  );
};

export default CoursesPage;