import { FC } from 'react';
import ComingSoon from '@/components/common/ComingSoon';

const BlogsPage: FC = () => {
  return (
    <ComingSoon 
      title="Islamic Blogs"
      description="Read insightful articles and blog posts on Islamic topics, contemporary issues, spiritual development, and practical guidance for Muslim life."
      category="Islamic Content"
    />
  );
};

export default BlogsPage;