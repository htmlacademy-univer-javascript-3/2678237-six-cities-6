import {CardVariant, Offer} from '../../types/offer.ts';
import {OfferCard} from '../OfferCard/OfferCard.tsx';

type ListOffersProps = {
  offers: Offer[];
  variant?: CardVariant;
  onCardHover?: (offer: Offer | null) => void;
}

const listConfig: Record<CardVariant, string> = {
  cities: 'cities__places-list places__list tabs__content',
  near: 'near-places__list places__list'
};

export function OffersList({offers, variant = 'cities', onCardHover}: ListOffersProps) {
  return (
    <div className={listConfig[variant]}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onCardHover={onCardHover}
        />
      ))}
    </div>
  );
}
