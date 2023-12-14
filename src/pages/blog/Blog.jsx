/* eslint-disable no-unused-vars */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';





const mainFeaturedPost = {
    title: 'Unveiling the Future: The Impact of Artificial Intelligence in Web Development',
    description:
      "Discover the profound influence of Artificial Intelligence (AI) in reshaping the landscape of web development. This comprehensive post explores real-world applications, challenges, and the exciting possibilities that AI brings to the digital realm.",
    image: 'https://source.unsplash.com/random?web-development',
    imageText: 'AI Impact in Web Development',
    linkText: 'Continue Reading →',
  };
  

  const featuredPosts = [
    {
      title: 'Unlocking the Secrets of Web Development Frameworks',
      date: 'Nov 12',
      description:
        'Explore the world of web development frameworks and discover how they can streamline your coding process. This in-depth post covers popular frameworks, their features, and when to use them for optimal results.',
      image: 'https://source.unsplash.com/random?coding',
      imageLabel: 'Coding Workspace',
      link: 'web-development-frameworks',
    },
    {
      title: 'The Art of Visual Storytelling in Graphic Design',
      date: 'Nov 11',
      description:
        'Delve into the art of graphic design and learn how to captivate your audience through visual storytelling. This post explores design principles, techniques, and showcases stunning examples to ignite your creativity.',
      image: 'https://source.unsplash.com/random?design',
      imageLabel: 'Graphic Design Illustration',
      link: 'visual-storytelling-graphic-design',
    },
    {
      title: 'Crafting Effective Digital Marketing Strategies',
      date: 'Nov 10',
      description:
        'Master the art of digital marketing with insights into crafting effective strategies that drive results. From SEO and social media to email campaigns, this post provides actionable tips for boosting your online presence.',
      image: 'https://source.unsplash.com/random?marketing',
      imageLabel: 'Digital Marketing Strategies',
      link: 'effective-digital-marketing-strategies',
    },
    {
      title: 'Exploring Innovative Tools for Creative Projects',
      date: 'Nov 9',
      description:
        'Dive into a world of creative tools that can elevate your projects. This post introduces innovative tools for web development, graphic design, and digital marketing, complete with recommendations and use cases.',
      image: 'https://source.unsplash.com/random?creativity',
      imageLabel: 'Creative Tools Showcase',
      link: 'innovative-tools-creative-projects',
    },
  ];
  
  
  


const defaultTheme = createTheme();

export default function Blog() {
  return (
    <div className='mb-14'>
      <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
         
        </main>
      </Container>
      
    </ThemeProvider>
    </div>
  
  );
}