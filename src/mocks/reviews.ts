import {Comments} from '../types/comment.ts';

export const REVIEWS_MOCK: Comments = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'a12bc3d4-e567-4f89-ab01-cd234ef56789',
    date: '2021-03-15T09:42:11.000Z',
    user: {
      name: 'Sophie Müller',
      avatarUrl: 'https://i.pravatar.cc/150?img=32',
      isPro: true
    },
    comment: 'Absolutely stunning location with breathtaking views. The service was impeccable and the atmosphere unforgettable.',
    rating: 5
  },
  {
    id: 'f98ed7c6-b543-4a21-9012-ab3cd4ef5678',
    date: '2022-07-22T17:05:33.000Z',
    user: {
      name: 'Luca Ferrari',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      isPro: false
    },
    comment: 'Nice place overall, but a bit noisy on weekends. Food was great though, and staff were very friendly.',
    rating: 3
  },
  {
    id: 'c45de6f7-a890-4b12-8c34-de567fg89012',
    date: '2023-01-30T11:18:45.000Z',
    user: {
      name: 'Yuki Tanaka',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      isPro: true
    },
    comment: 'A hidden gem in the heart of the city. The ambiance is warm and inviting, perfect for a slow afternoon.',
    rating: 5
  },
  {
    id: 'd78ef9a0-b123-4c45-9d67-ef890gh12345',
    date: '2024-06-11T14:55:20.000Z',
    user: {
      name: 'Amara Diallo',
      avatarUrl: 'https://i.pravatar.cc/150?img=45',
      isPro: false
    },
    comment: 'Good spot with a lovely terrace. Prices are a little steep but the quality justifies it most of the time.',
    rating: 4
  }
];
