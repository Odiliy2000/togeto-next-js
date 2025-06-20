import { IMenuDT } from '@/types/menu-d-t';

import homeImg2 from '@/assets/img/menu/home-2.jpg';


const homeMenuData: IMenuDT[] = [
  {
    id: 2,
    title: 'Home',
    link: 'home-2',
    
  },
];

export const menuData: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'Service', link: '/service' },
      { title: 'Service Details', link: '/service-details/1' },
    ],
  },
  
  {
    id: 5,
    title: 'Portfolio',
    link: '/portfolio',
    dropdown_menus: [
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Portfolio Details', link: '/portfolio-details/1' },
    ],
  },
  {
    id: 6,
    title: 'Blog',
    link: '/blog',
    dropdown_menus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Blog Left Sidebar', link: '/blog-left-sidebar' },
      { title: 'Blog Right Sidebar', link: '/blog-right-sidebar' },
      {
        title: 'Blog Details Left Sidebar',
        link: '/blog-details-left-sidebar/1',
      },
      {
        title: 'Blog Details Right Sidebar',
        link: '/blog-details-right-sidebar/1',
      },
    ],
  },
  {
    id: 7,
    title: 'Contact',
    link: '/contact',
  },
];

export const onePageDataOne: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 5,
    title: 'Team',
    link: '#team',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataTwo: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 5,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 6,
    title: 'Faq',
    link: '#faq',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataThree: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Service',
    link: '#service',
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 5,
    title: 'Team',
    link: '#team',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataFour: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'Choose',
    link: '#choose',
  },
  {
    id: 3,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 4,
    title: 'Service',
    link: '#service',
  },
  {
    id: 5,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];

export const onePageDataFive: IMenuDT[] = [
  ...homeMenuData,
  {
    id: 2,
    title: 'About Us',
    link: '#about',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 4,
    title: 'Team',
    link: '#team',
  },
  {
    id: 5,
    title: 'Faq',
    link: '#faq',
  },
  {
    id: 6,
    title: 'Testimonial',
    link: '#testimonial',
  },
  {
    id: 7,
    title: 'Blog',
    link: '#blog',
  },
];
