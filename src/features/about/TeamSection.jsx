import React from 'react';
import { ProfileCard, CompactCard } from '../../components/ui/SocialCard';

const facebookIcon = (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const telegramIcon = (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const emailIcon = (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const designTeam = [
  {
    name: 'Sam Channa',
    image: '/src/assets/Images/channa.jpg',
    verified: true,
    bio: 'Design Engineer living in San Francisco. I love creating beautiful software that delights users and reimagines technology.',
    links: [
      { label: 'Facebook', url: 'https://facebook.com/haydenbleasel', icon: facebookIcon },
      { label: 'Telegram', url: 'https://t.me/@CHANNA_SM', icon: telegramIcon },
      { label: 'Email', url: 'mailto:khimreaksmey123@gmail.com', icon: emailIcon },
    ],
  },
  {
    name: 'Khim Reaksmey',
    image: '/src/assets/Images/Reaksmey.jpg',
    verified: true,
    bio: 'Creative UI/UX Designer passionate about crafting delightful digital experiences. Based in Tokyo, working worldwide.',
    links: [
      { label: 'Facebook', url: 'https://facebook.com/haydenbleasel', icon: facebookIcon },
      { label: 'Telegram', url: 'https://t.me/haydenbleasel', icon: telegramIcon },
      { label: 'Email', url: 'mailto:khimreaksmey123@gmail.com', icon: emailIcon },
    ],
  },
];

const leaderTeam = [
  {
    name: 'Kru IT jet laor',
    image: '/src/assets/Images/Kru_it_jit_laor.jpg',
    verified: true,
    bio: 'Full-stack developer and tech enthusiast. Building the future one line of code at a time from Barcelona.',
    links: [
      { label: 'Facebook', url: 'https://facebook.com/', icon: facebookIcon },
      { label: 'Telegram', url: 'https://t.me/', icon: telegramIcon },
      { label: 'Email', url: 'mailto:contact@example.com', icon: emailIcon },
    ],
  },
  {
    name: 'Hok Vanthiv',
    image: '/src/assets/Images/Thiv.jpg',
    verified: true,
    bio: 'Digital marketing strategist helping brands tell their stories. Coffee lover and world traveler based in London.',
    links: [
      { label: 'Facebook', url: 'https://facebook.com/', icon: facebookIcon },
      { label: 'Telegram', url: 'https://t.me/', icon: telegramIcon },
      { label: 'Email', url: 'mailto:contact@example.com', icon: emailIcon },
    ],
  },
];

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 py-12 px-6">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        {/* Leaders — compact stacked layout */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Leader</h2>
            <p className="text-gray-600">Tech experts building innovative solutions</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {leaderTeam.map((profile, index) => (
              <CompactCard key={index} profile={profile} />
            ))}
          </div>
        </div>

        {/* Design Team — side by side */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Team</h2>
            <p className="text-gray-600">Creative minds shaping beautiful experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designTeam.map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;