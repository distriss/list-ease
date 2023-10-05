import { React, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, } from '@fortawesome/free-solid-svg-icons'


export default function CategoryItem({ 
  priority, 
  title, 
  category,
  toggleListPriority }) {

    const [starPriority, setStarPriority] = useState(
      priority ? 'fa-star-priority' : ''
    );

    const handleClick = () => {
      toggleListPriority(category.id, !category.priority);
      setStarPriority(!category.priority ? 'fa-star-priority' : '');
    }

  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2"><h3 className="p-2">{title}</h3></div>
      <div className={`p-2 ms-auto ${starPriority === 'fa-star-priority' ? 'jump-animation' : ''}`}>     
        <FontAwesomeIcon 
          icon={faStar} 
          className={`icon icon-zoom fa-star ${starPriority}`}
          onClick={handleClick}
          />
      </div>
    </Stack>
  );
}