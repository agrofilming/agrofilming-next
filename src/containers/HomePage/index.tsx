import { HomeTitle } from '@/containers/HomePage/containers/HomeTitle';
import { OurProjects } from '@/containers/HomePage/containers/OurProjects';
import { YouTubeBlock } from '@/containers/HomePage/containers/YouTubeBlock';
import { CreativeTeamBlock } from '@/containers/HomePage/containers/CreativeTeamBlock';
import { OurPartners } from '@/containers/HomePage/containers/OurPartners';
import { Agritechnica } from '@/containers/HomePage/containers/Agritechnica';

export const HomePage = () => (
  <>
    <HomeTitle />
    <OurProjects />
    <YouTubeBlock />
    <Agritechnica />
    <OurPartners />
    <CreativeTeamBlock />
  </>
);
