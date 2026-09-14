
import benner_kep from '../assets/Images/Brnner_kep.jpg';
import benner_koh from '../assets/Images/Benner_koh.jpg';
import benner_kom from '../assets/Images/Benner_kompot.jpg';
import benner_sp from '../assets/Images/Benne_siemreap.jpg';
import benner_sey from '../assets/Images/Benner_seyhaknuk.jpg';

import {
  provincekep,
  provinceKohKong,
  provinceKomPot,
  provinceSiemReap,
  provinceSihanoukville,
} from '../data/data';

// key = slug used in the URL: /provinces/:slug
export const provincesConfig = {
  kep: {
    slug: 'kep',
    title: 'Explore Kep',
    description:
      'Discover the peaceful coastal charm of Kep, famous for its fresh crab market, beaches, and scenic ocean views.',
    banner: benner_kep,
    data: provincekep,
  },
  'koh-kong': {
    slug: 'koh-kong',
    title: 'Explore Koh Kong',
    description:
      'Discover the untouched beauty of Koh Kong, from pristine beaches to lush jungles and vibrant wildlife.',
    banner: benner_koh,
    data: provinceKohKong,
  },
  kampot: {
    slug: 'kampot',
    title: 'Explore Kampot',
    description:
      'Discover the serene riverside, pepper plantations, and coastal beauty of Kampot province.',
    banner: benner_kom,
    data: provinceKomPot,
  },
  'siem-reap': {
    slug: 'siem-reap',
    title: 'Siem Reap',
    description:
      'Discover the ancient temples, rich Khmer heritage, and scenic countryside of Siem Reap.',
    banner: benner_sp,
    data: provinceSiemReap,
  },
  sihanoukville: {
    slug: 'sihanoukville',
    title: 'Explore Sihanoukville',
    description:
      'Discover the beautiful beaches, vibrant islands, and lush natural scenery of Sihanoukville, perfect for relaxation and adventure.',
    banner: benner_sey,
    data: provinceSihanoukville,
  },
};
