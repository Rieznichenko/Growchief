export const processes = [
  {
    title: 'Topic Selection and Article Preparation',
    description:
      'The process begins with the provision of various topics from which you can choose. This selection phase typically takes 1-2 days. Once the topic is selected, the next step is to work on the article. This stage involves research, drafting, and finalizing the article, which usually takes about 7 days.',
    imageUrl: '/processes/topic.png',
  },
  {
    title: 'Article Posting and Promotion',
    description:
      "After the article is ready, it's time to post it. The article should be posted on a specific date for maximum impact. Once posted, the article should be promoted on various platforms. This includes posting the article on Reddit with the aim of making it trending. Additionally, the article should be cross-posted on Hashnode and Medium to reach a wider audience.",
    imageUrl: '/processes/article-published.png',
  },
  {
    title: 'Traffic Generation and Trending Potential',
    description:
      'The final section of the process involves driving traffic to your website. This is achieved through the use of an influencer, who will promote your article 2 days after it has been posted.',
    imageUrl: '/processes/website-trafic.png',
  },
] as const;

export type Process = (typeof processes)[number];
