import { FC } from 'react';
import ComingSoon from '@/components/common/ComingSoon';

const ArticlesPage: FC = () => {
  return (
    <ComingSoon 
      title="Articles"
      description="Read our thoughtful articles, insights, and commentary on various topics related to Islamic values, social issues, and community development."
      category="Media"
    />
  );
};

export default ArticlesPage;