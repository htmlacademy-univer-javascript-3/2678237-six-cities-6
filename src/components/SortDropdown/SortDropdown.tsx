import {useState} from 'react';
import {SortType} from '../../types/sort.ts';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentSortOption} from '../../store/offersSelectors.ts';
import {setSortOption} from '../../store/offersSlice.ts';

export function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const currentSortOption = useSelector(selectCurrentSortOption);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleActiveOption = (option : SortType) => {
    dispatch(setSortOption(option));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleOpen}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(SortType).map(([key, value]) => (
            <li
              key={key}
              className={`places__option ${currentSortOption === value ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                handleActiveOption(value);
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
