import {City, Offers} from '../types/offer.ts';

export const AMSTERDAM_CITY : City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37914938496378,
    longitude: 4.900377537499948,
    zoom: 12,
  },
};

export const offers: Offers = [
  {
    id: '67318f9c-706d-44e2-9b27-0993a8306c51',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 478,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5,
  },
  {
    id: 'a9d98153-0052-4c29-8aa6-03461af8eb4f',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 102,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.6,
  },
  {
    id: 'a9b2a105-17e1-4a35-80f7-0f8790c2566e',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 187,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.6,
  },
  {
    id: '89bd250c-2443-4112-91ea-cc147fd65f63',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 150,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
  },
];
